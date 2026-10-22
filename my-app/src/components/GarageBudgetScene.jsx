import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./GarageBudgetScene.css";

gsap.registerPlugin(useGSAP);

const GarageBudgetScene = ({ scene }) => {
  const sceneRef = useRef(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const animatedElements = gsap.utils.toArray(
          ".garage-budget__heading, .garage-budget__title, .garage-car, .garage-budget__description, .garage-budget__back",
        );

        gsap.set(animatedElements, { willChange: "transform, opacity" });

        const entrance = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.out", force3D: true, lazy: false },
          onComplete: () => {
            gsap.set(animatedElements, { clearProps: "willChange,transform" });
          },
        });

        entrance
          .from(".garage-budget__heading", {
            autoAlpha: 0,
            x: "110vw",
            duration: 1,
            ease: "power3.out",
          })
          .from(
            ".garage-budget__title",
            { autoAlpha: 0, x: 36, y: -12, duration: 0.65 },
            0.2,
          )
          .addLabel("cars", 0.7)
          .from(
            ".garage-car--left",
            {
              autoAlpha: 0,
              x: "-110vw",
              y: 48,
              rotation: -9,
              transformOrigin: "center bottom",
              duration: 1.3,
            },
            "cars",
          )
          .from(
            ".garage-car--right",
            {
              autoAlpha: 0,
              x: "110vw",
              y: 48,
              rotation: 9,
              transformOrigin: "center bottom",
              duration: 1.3,
            },
            "cars",
          )
          .from(
            ".garage-budget__description",
            { autoAlpha: 0, y: "100vh", rotation: 2, duration: 0.9 },
            "cars+=0.65",
          )
          .fromTo(
            ".garage-budget__back",
            { autoAlpha: 0, y: -12 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              clearProps: "opacity,visibility,transform",
            },
            "cars+=0.9",
          );

        let cancelled = false;
        let preparationFrame = 0;
        let onPageLoad;
        const pageLoaded = new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            onPageLoad = resolve;
            window.addEventListener("load", onPageLoad, { once: true });
          }
        });

        // Decode every cutout and load all three font weights before playback.
        const assets = [...sceneRef.current.querySelectorAll("img")].map(
          (image) => image.decode(),
        );

        assets.push(
          document.fonts.load('400 16px "SF Pro Display"'),
          document.fonts.load('500 16px "SF Pro Display"'),
          document.fonts.load('700 16px "SF Pro Display"'),
          pageLoaded,
        );

        Promise.allSettled(assets)
          .then(() => document.fonts.ready)
          .then(() => {
            if (cancelled) return;

            // Initialize every tween now, including the cars that start later.
            entrance.progress(1, true).progress(0, true);

            // Let the browser settle layout and prepare layers before moving them.
            preparationFrame = requestAnimationFrame(() => {
              preparationFrame = requestAnimationFrame(() => {
                if (!cancelled) entrance.play(0);
              });
            });
          });

        return () => {
          cancelled = true;
          cancelAnimationFrame(preparationFrame);
          if (onPageLoad) window.removeEventListener("load", onPageLoad);
        };
      });

      return () => media.revert();
    },
    { scope: sceneRef, dependencies: [scene], revertOnUpdate: true },
  );

  return (
    <section
      ref={sceneRef}
      className="garage-budget"
      aria-labelledby={`garage-budget-${scene.id}`}
      aria-label="My ideal 2-car garage (with a twist)"
      style={{
        "--garage-background-start": scene.backgroundStart,
        "--garage-background-end": scene.backgroundEnd,
        "--garage-text": scene.textColor,
      }}
    >
      <div className="garage-budget__stage">
        <div className="garage-budget__intro">
          <p className="garage-budget__title">
            My 2 Car Garage Solution (with a twist)
          </p>
          <a className="garage-budget__back" href="#/fun">
            <span aria-hidden="true">&larr;</span> Back to fun stuff
          </a>
        </div>

        <h1 className="garage-budget__heading" id={`garage-budget-${scene.id}`}>
          <span>{scene.budget}</span>
          <span>BUDGET</span>
        </h1>

        {scene.cars.map((car, index) => (
          <figure
            className={`garage-car garage-car--${index === 0 ? "left" : "right"}`}
            key={car.id}
          >
            <div className="garage-car__visual">
              <img
                className="garage-car__image"
                src={car.image}
                alt={car.imageAlt}
                width={car.imageWidth}
                height={car.imageHeight}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <figcaption className="garage-car__caption">
              <img
                className="garage-car__wordmark"
                src={car.wordmark}
                alt=""
                aria-hidden="true"
                width={car.wordmarkWidth}
                height={car.wordmarkHeight}
                loading="eager"
                decoding="async"
              />
              <div className="garage-car__details">
                <h2>{car.name}</h2>
                <p>{car.details}</p>
              </div>
            </figcaption>
          </figure>
        ))}

        <p className="garage-budget__description">{scene.description}</p>
      </div>
    </section>
  );
};

export default GarageBudgetScene;
