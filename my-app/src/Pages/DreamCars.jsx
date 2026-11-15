import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { dreamCars, formatPrice, usedPriceResearchDate } from "./dreamCarsData";
import "./DreamCars.css";

const Arrow = ({ up = false }) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d={up ? "m8 20 8-8 8 8" : "m8 12 8 8 8-8"} />
  </svg>
);

const DreamCars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const previousButton = useRef(null);
  const nextButton = useRef(null);
  const activeCar = dreamCars[activeIndex];
  const lastIndex = dreamCars.length - 1;

  const navigate = useCallback((direction) => {
    setActiveIndex((current) => Math.max(0, Math.min(lastIndex, current + direction)));
  }, [lastIndex]);

  useEffect(() => {
    const originalTitle = document.title;
    document.documentElement.classList.add("dream-cars-active");
    document.title = "My Dream Cars | Tristan’s World";
    if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    return () => {
      document.title = originalTitle;
      document.documentElement.classList.remove("dream-cars-active");
    };
  }, []);

  useEffect(() => {
    // Decode nearby cutouts before they slide into view, without downloading the
    // entire collection on the visitor's first load.
    dreamCars.slice(Math.max(0, activeIndex - 2), activeIndex + 4).forEach((car) => {
      const image = new Image();
      image.src = car.image;
      image.decode().catch(() => {});
    });
  }, [activeIndex]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
          event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        navigate(event.key === "ArrowUp" ? -1 : 1);
      }
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        setActiveIndex(event.key === "Home" ? 0 : lastIndex);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lastIndex, navigate]);

  useEffect(() => {
    // A disabled endpoint must not strand keyboard focus.
    if (activeIndex === 0 && document.activeElement === previousButton.current) {
      nextButton.current?.focus({ preventScroll: true });
    } else if (activeIndex === lastIndex && document.activeElement === nextButton.current) {
      previousButton.current?.focus({ preventScroll: true });
    }
  }, [activeIndex, lastIndex]);

  return (
    <div className="dream-cars-page">
      <Navbar />
      <section className="dream-cars" aria-labelledby="dream-cars-title" aria-roledescription="carousel">
        <header className="dream-cars__header">
          <div>
            <h1 id="dream-cars-title">My Dream Cars</h1>
            <p>Cars I want to own at some point in my life.</p>
          </div>
          <a className="dream-cars__back" href="#/fun">Back to Fun Stuff <span aria-hidden="true">↗</span></a>
        </header>

        <div className="dream-cars__stage"
          style={{ "--active-index": activeIndex }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            if (!touchStart.current) return;
            const touch = event.changedTouches[0];
            const dx = touch.clientX - touchStart.current.x;
            const dy = touch.clientY - touchStart.current.y;
            if (Math.abs(dy) > 55 && Math.abs(dy) > Math.abs(dx) * 1.5) navigate(dy < 0 ? 1 : -1);
            touchStart.current = null;
          }}
          onTouchCancel={() => { touchStart.current = null; }}
          data-lenis-prevent-touch
        >
          <div className="dream-cars__rail" aria-hidden="true">
            {dreamCars.map((car, index) => (
              <span key={car.id}
                className={`dream-cars__marker${index === activeIndex ? " is-active" : ""}`}
                style={{ "--marker-offset": index - activeIndex }} />
            ))}
          </div>

          <div className="dream-cars__viewport" id="dream-cars-timeline">
            <div className="dream-cars__track">
              {dreamCars.map((car, index) => (
                <article key={car.id} className="dream-cars__slide"
                  aria-hidden={index !== activeIndex}
                  inert={index !== activeIndex ? true : undefined}
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${dreamCars.length}: ${car.year} ${car.name}`}
                >
                  <div className="dream-cars__price">
                    <span className="dream-cars__price-label">Average Used Price</span>
                    <p><span className="dream-cars__approx">≈</span>{formatPrice(car.usedPrice)}</p>
                    <span className="dream-cars__currency">USD</span>
                  </div>
                  <figure className="dream-cars__car">
                    <div className="dream-cars__image-wrap">
                      <img src={Math.abs(index - activeIndex) <= 3 ? car.image : undefined}
                        width="800" height="480"
                        alt={`${car.year} ${car.name}`}
                        className="dream-cars__image" draggable="false" />
                    </div>
                    <figcaption className="dream-cars__details">
                      <h2><span>{car.year}</span> {car.name}</h2>
                      <p className="dream-cars__engine">{car.engine}</p>
                      <dl className="dream-cars__specs">
                        <div><dt className="sr-only">Power</dt><dd>{car.horsepower.toLocaleString("en-US")} <span>HP</span></dd></div>
                        <div><dt className="sr-only">Torque</dt><dd>{car.torque.toLocaleString("en-US")} <span>LB-FT</span></dd></div>
                        <div><dt className="sr-only">Drivetrain</dt><dd>{car.drivetrain}</dd></div>
                      </dl>
                      <p className="dream-cars__car-note">{car.caption}</p>
                    </figcaption>
                  </figure>
                </article>
              ))}
            </div>
          </div>

          <button ref={previousButton} type="button"
            className="dream-cars__arrow dream-cars__arrow--previous"
            aria-label="Previous car (lower used price)" aria-controls="dream-cars-timeline"
            disabled={activeIndex === 0} onClick={() => navigate(-1)}>
            <Arrow up />
          </button>
          <button ref={nextButton} type="button"
            className="dream-cars__arrow dream-cars__arrow--next"
            aria-label="Next car (higher used price)" aria-controls="dream-cars-timeline"
            disabled={activeIndex === lastIndex} onClick={() => navigate(1)}>
            <Arrow />
          </button>
        </div>

        <footer className="dream-cars__footer">
          <div>
            <p className="dream-cars__price-note">Rounded USD averages &amp; limited-sale estimates · Researched {usedPriceResearchDate}.</p>
          </div>
          <div className="dream-cars__position" aria-hidden="true">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="dream-cars__position-divider" />
            <span>{dreamCars.length}</span>
          </div>
        </footer>
        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {activeIndex + 1} of {dreamCars.length}. {activeCar.year} {activeCar.name}.
          Average used price: approximately {formatPrice(activeCar.usedPrice)} USD.
        </p>
      </section>
    </div>
  );
};

export default DreamCars;
