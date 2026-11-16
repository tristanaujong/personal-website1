import { useContext, useEffect, useRef, useState } from "react";
import { PageLoadContext } from "./PageReadyContext";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import modelUrl from "./diecast_3d_model/scene.gltf?url";
import bufferUrl from "./diecast_3d_model/scene.bin?url";
import textureUrl from "./diecast_3d_model/textures/AlfaRomeo_F1_C43_24_RC_LOD0_u0_v0_baseColor.png?url";

// Release shared materials and ImageBitmaps once, including after a late load.
const disposeModel = (root) => {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  root.traverse((object) => {
    if (object.geometry) geometries.add(object.geometry);
    if (object.material) {
      (Array.isArray(object.material) ? object.material : [object.material])
        .forEach((material) => materials.add(material));
    }
  });
  materials.forEach((material) => {
    Object.values(material).forEach((value) => {
      if (value?.isTexture) textures.add(value);
    });
    material.dispose();
  });
  textures.forEach((texture) => {
    texture.source?.data?.close?.();
    texture.dispose();
  });
  geometries.forEach((geometry) => geometry.dispose());
};

const DiecastModel = () => {
  const markAssetReady = useContext(PageLoadContext);
  const hostRef = useRef(null);
  const controlsRef = useRef(null);
  const resetRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    // "ready" is set after textures, shaders, and the first frame are rendered.
    // Reveal the error UI too, so visitors can retry a failed model request.
    if (status !== "loading") markAssetReady?.("diecast-model");
  }, [status, markAssetReady]);

  useEffect(() => {
    const host = hostRef.current;
    let disposed = false;
    let frame = 0;
    let isVisible = true;
    let model = null;
    let fittedDistance = 10;
    const manager = new THREE.LoadingManager();
    let renderer;

    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      setStatus("error");
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    const canvas = renderer.domElement;
    canvas.tabIndex = 0;
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "Interactive 3D Alfa Romeo F1 car. Drag or use the arrow keys to rotate. Use plus and minus to zoom, and Home to reset.");
    canvas.setAttribute("aria-describedby", "diecast-model-help");
    host.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    // Low front-left view: show the MINI GT face and the box's left side.
    const initialDirection = new THREE.Vector3(-1.1, 0.22, 1.8).normalize();
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.09;
    controls.rotateSpeed = 0.65;
    controls.minPolarAngle = Math.PI * 0.12;
    controls.maxPolarAngle = Math.PI * 0.49;
    controlsRef.current = controls;

    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environmentMap = pmrem.fromScene(environment, 0.04);
    scene.environment = environmentMap.texture;
    scene.environmentIntensity = 1.5;
    environment.dispose();
    pmrem.dispose();
    scene.add(new THREE.HemisphereLight(0xffffff, 0x777777, 2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(3, 6, 4);
    scene.add(keyLight);

    // A soft contact shadow grounds the model without an opaque canvas.
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = shadowCanvas.height = 128;
    const context = shadowCanvas.getContext("2d");
    const gradient = context.createRadialGradient(64, 64, 5, 64, 64, 64);
    gradient.addColorStop(0, "rgba(0,0,0,0.26)");
    gradient.addColorStop(0.5, "rgba(0,0,0,0.12)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(7, 3.2),
      new THREE.MeshBasicMaterial({ map: shadowTexture, transparent: true, depthWrite: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -0.025;
    scene.add(shadow);

    function requestRender() {
      if (disposed || frame || !isVisible || document.hidden) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        controls.update();
        renderer.render(scene, camera);
      });
    }

    const resetView = () => {
      // Flush any remaining drag inertia before returning to the hero angle.
      controls.enableDamping = false;
      controls.update();
      camera.position.copy(controls.target).addScaledVector(initialDirection, fittedDistance);
      controls.update();
      controls.enableDamping = true;
      requestRender();
    };
    resetRef.current = resetView;

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      if (model) {
        const box = new THREE.Box3().setFromObject(model);
        const target = box.getCenter(new THREE.Vector3());
        const direction = initialDirection;
        const right = new THREE.Vector3().crossVectors(camera.up, direction).normalize();
        const up = new THREE.Vector3().crossVectors(direction, right);
        const tanVertical = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const tanHorizontal = tanVertical * camera.aspect;
        let distance = 0;
        for (const x of [box.min.x, box.max.x]) {
          for (const y of [box.min.y, box.max.y]) {
            for (const z of [box.min.z, box.max.z]) {
              const point = new THREE.Vector3(x, y, z).sub(target);
              distance = Math.max(distance,
                Math.abs(point.dot(right)) / tanHorizontal + point.dot(direction),
                Math.abs(point.dot(up)) / tanVertical + point.dot(direction));
            }
          }
        }
        fittedDistance = distance * 1.12;
        controls.target.copy(target);
        controls.minDistance = fittedDistance * 0.68;
        controls.maxDistance = fittedDistance * 1.8;
        resetView();
      }
      requestRender();
    };

    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      const step = Math.PI / 18;
      switch (event.key) {
        case "ArrowLeft": controls.rotateLeft(step); break;
        case "ArrowRight": controls.rotateLeft(-step); break;
        case "ArrowUp": controls.rotateUp(step); break;
        case "ArrowDown": controls.rotateUp(-step); break;
        case "+": case "=": case "-": {
          const offset = camera.position.clone().sub(controls.target);
          const distance = THREE.MathUtils.clamp(offset.length() * (event.key === "-" ? 1.1 : 0.9), controls.minDistance, controls.maxDistance);
          camera.position.copy(controls.target).add(offset.setLength(distance));
          controls.update();
          break;
        }
        case "Home": resetView(); break;
        default: return;
      }
      event.preventDefault();
      requestRender();
    };
    const onContextLost = (event) => {
      event.preventDefault();
      if (!disposed) setStatus("error");
    };
    canvas.addEventListener("keydown", onKeyDown);
    canvas.addEventListener("webglcontextlost", onContextLost);
    controls.addEventListener("change", requestRender);
    document.addEventListener("visibilitychange", requestRender);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) requestRender();
    });
    intersectionObserver.observe(host);
    resize();

    // Vite fingerprints each resource separately. Resolve the relative glTF
    // references to the imported URLs so the production build loads correctly.
    manager.setURLModifier((url) => {
      if (url.endsWith("scene.bin")) return bufferUrl;
      if (url.endsWith("AlfaRomeo_F1_C43_24_RC_LOD0_u0_v0_baseColor.png")) return textureUrl;
      return url;
    });
    const timeout = window.setTimeout(() => {
      if (!disposed && !model) {
        manager.abort();
        setStatus("error");
      }
    }, 60000);

    // Defer one frame so React StrictMode's first setup can cleanly cancel
    // before starting the large model request.
    const loadFrame = window.requestAnimationFrame(() => {
      new GLTFLoader(manager).loadAsync(modelUrl).then((gltf) => {
        window.clearTimeout(timeout);
        if (disposed) {
          disposeModel(gltf.scene);
          return;
        }
        const root = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(root);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const scale = 6 / Math.max(size.x, size.z);
        root.scale.setScalar(scale);
        root.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
        model = new THREE.Group();
        model.add(root);
        model.rotation.y = Math.PI / 2;
        scene.add(model);
        resize();
        renderer.compile(scene, camera);
        renderer.render(scene, camera);
        setStatus("ready");
      }).catch(() => {
        window.clearTimeout(timeout);
        if (!disposed) setStatus("error");
      });
    });

    return () => {
      disposed = true;
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(loadFrame);
      window.cancelAnimationFrame(frame);
      manager.abort();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", requestRender);
      canvas.removeEventListener("keydown", onKeyDown);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      controls.dispose();
      controlsRef.current = null;
      resetRef.current = null;
      if (model) disposeModel(model);
      shadow.geometry.dispose();
      shadow.material.dispose();
      shadowTexture.dispose();
      environmentMap.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    };
  }, [attempt]);

  return (
    <div className="diecast-model" data-status={status}>
      <div className="diecast-model__canvas" ref={hostRef} data-lenis-prevent="" aria-busy={status === "loading"} />
      {status === "loading" && (
        <div className="diecast-model__message" role="status">
          <span className="diecast-model__spinner" aria-hidden="true" />
          Loading 3D model
        </div>
      )}
      {status === "error" && (
        <div className="diecast-model__message" role="status">
          <p>The 3D preview couldn’t load.</p>
          <button type="button" onClick={() => { setStatus("loading"); setAttempt((value) => value + 1); }}>Try again</button>
        </div>
      )}
      <div className="diecast-model__tools" hidden={status !== "ready"}>
        <p id="diecast-model-help">Drag to rotate <span aria-hidden="true">·</span> Scroll or pinch to zoom</p>
        <button type="button" onClick={() => resetRef.current?.()} aria-label="Reset 3D model view">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 7a6.5 6.5 0 1 1-.3 5M4 3v4h4" /></svg>
          Reset view
        </button>
      </div>
    </div>
  );
};

export default DiecastModel;
