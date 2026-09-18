import { useEffect } from "react";
import BentoBackButton from "../components/BentoBackButton";
import photos from "./spottedCars.json";
import "./SpottedCars.css";

const SpottedCars = () => {
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <section className="min-h-dvh px-6 pb-16 pt-24" aria-labelledby="spotted-cars-title">
      <div className="mx-auto flex w-full max-w-[96rem] flex-col">
        <BentoBackButton />
        <h1 id="spotted-cars-title" className="mb-6 font-sf-pro text-5xl font-bold text-stone-900 md:text-7xl lg:text-7xl">
          Cool Cars I Have Spotted.
        </h1>

        <div className="spotted-cars-grid">
          {photos.map((photo, index) => (
            <figure
              className="spotted-car"
              style={{
                // Stable variation keeps the collage from shifting on re-renders.
                aspectRatio: (photo.width / photo.height) * (0.8 + ((index * 17 + 11) % 29) / 70),
              }}
              key={photo.name}
            >
              <img
                src={`/images/spotted-cars/${photo.name}-1200.webp`}
                srcSet={`/images/spotted-cars/${photo.name}-640.webp ${photo.width640}w, /images/spotted-cars/${photo.name}-1200.webp ${photo.width1200}w`}
                sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 50vw, (max-width: 1584px) 33vw, 499px"
                width={photo.width}
                height={photo.height}
                alt={`Car spotting photograph ${index + 1}`}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpottedCars;
