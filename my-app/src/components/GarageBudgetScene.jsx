import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./GarageBudgetScene.css";

gsap.registerPlugin(useGSAP);

const GarageBudgetScene = ({ scene, previousBudget, nextBudget, onNavigate }) => {
  const sceneRef = useRef(null);
  const entranceRef = useRef(null);
  const transitioningRef = useRef(true);
  const pendingDirectionRef = useRef(null);
  const focusDirectionRef = useRef(null);
  const previousArrowRef = useRef(null);
  const nextArrowRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    if (isTransitioning || focusDirectionRef.current === null) return;

    const preferredArrow = focusDirectionRef.current < 0
      ? previousArrowRef.current
      : nextArrowRef.current;
    (preferredArrow ?? previousArrowRef.current ?? nextArrowRef.current)
      ?.focus({ preventScroll: true });
    focusDirectionRef.current = null;
  }, [isTransitioning]);

  const navigate = (direction) => {
    const budget = direction < 0 ? previousBudget : nextBudget;
    if (!budget || transitioningRef.current) return;

    transitioningRef.current = true;
    setIsTransitioning(true);
    focusDirectionRef.current = direction;

    if (entranceRef.current) {
      pendingDirectionRef.current = direction;
      entranceRef.current.reverse();
    } else {
      // Reduced motion switches content immediately.
      onNavigate(direction);
    }
  };

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      const finishEntrance = () => {
        transitioningRef.current = false;
        setIsTransitioning(false);
      };

      media.add({
        animate: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      }, (context) => {
        if (!context.conditions.animate) {
          // Also finish a pending switch if the preference changes mid-exit.
          const direction = pendingDirectionRef.current;
          pendingDirectionRef.current = null;
          if (direction !== null) {
            onNavigate(direction);
          } else {
            finishEntrance();
          }
          return;
        }

        transitioningRef.current = true;
        setIsTransitioning(true);
        const animatedElements = gsap.utils.toArray(
          ".garage-budget__heading, .garage-budget__title, .garage-car, .garage-budget__description, .garage-budget__back",
        );

        gsap.set(animatedElements, { willChange: "transform, opacity" });

        const entrance = gsap.timeline({
          paused: true,
          defaults: { duration: 0.6, ease: "power3.out", force3D: true, lazy: false },
          onComplete: () => {
            // Keep transforms intact so this exact timeline can play backward.
            gsap.set(animatedElements, { clearProps: "willChange" });
            finishEntrance();
          },
          onReverseComplete: () => {
            const direction = pendingDirectionRef.current;
            pendingDirectionRef.current = null;
            if (direction !== null) onNavigate(direction);
          },
        });
        entranceRef.current = entrance;

        // Match both timing and duration so every part also reverses together.
        entrance
          .from(
            ".garage-budget__heading",
            { autoAlpha: 0, x: "110vw" },
            0,
          )
          .from(
            ".garage-budget__title",
            { autoAlpha: 0, x: 36, y: -12 },
            0,
          )
          .from(
            ".garage-car--left",
            {
              autoAlpha: 0,
              x: "-110vw",
              y: 48,
              rotation: -9,
              transformOrigin: "center bottom",
            },
            0,
          )
          .from(
            ".garage-car--right",
            {
              autoAlpha: 0,
              x: "110vw",
              y: 48,
              rotation: 9,
              transformOrigin: "center bottom",
            },
            0,
          )
          .from(
            ".garage-budget__description",
            { autoAlpha: 0, y: "100vh", rotation: 2 },
            0,
          )
          .fromTo(
            ".garage-budget__back",
            { autoAlpha: 0, y: -12 },
            {
              autoAlpha: 1,
              y: 0,
            },
            0,
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

            // Initialize every tween before the first animation frame.
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
          if (entranceRef.current === entrance) entranceRef.current = null;
          if (onPageLoad) window.removeEventListener("load", onPageLoad);
        };
      });

      return () => media.revert();
    },
    { scope: sceneRef, dependencies: [scene, onNavigate], revertOnUpdate: true },
  );

  return (
    <section
      ref={sceneRef}
      className="garage-budget"
      aria-busy={isTransitioning}
      aria-labelledby={`garage-budget-${scene.id}`}
      aria-label="My ideal 2-car garage (with a twist)"
      style={{
        "--garage-background-start": scene.backgroundStart,
        "--garage-background-end": scene.backgroundEnd,
        "--garage-text": scene.textColor,
      }}
    >
      <div className="garage-budget__stage" id="garage-budget-scene">
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
                style={car.wordmarkAspectRatio ? {
                  aspectRatio: car.wordmarkAspectRatio,
                  objectFit: "cover",
                } : undefined}
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

      {previousBudget && (
        <button
          ref={previousArrowRef}
          type="button"
          className="garage-budget__arrow garage-budget__arrow--previous"
          aria-label={`Previous garage: ${previousBudget} budget`}
          aria-controls="garage-budget-scene"
          disabled={isTransitioning}
          onClick={() => navigate(-1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m15 5-7 7 7 7" />
          </svg>
        </button>
      )}
      {nextBudget && (
        <button
          ref={nextArrowRef}
          type="button"
          className="garage-budget__arrow garage-budget__arrow--next"
          aria-label={`Next garage: ${nextBudget} budget`}
          aria-controls="garage-budget-scene"
          disabled={isTransitioning}
          onClick={() => navigate(1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m9 5 7 7-7 7" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default GarageBudgetScene;
