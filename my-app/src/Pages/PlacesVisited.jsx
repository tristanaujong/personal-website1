import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiCamera, FiMapPin, FiPlus, FiX } from "react-icons/fi";
import BentoBackButton from "../components/BentoBackButton";
import { waitForPageImages } from "../components/waitForPageImages";
import places from "./placesVisitedData";
import "./PlacesVisited.css";

const PlaceAlbum = ({ place, onClose }) => {
  const dialogRef = useRef(null);
  const contentRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const lenis = window.lenis;
    const wasLenisStopped = lenis?.isStopped;

    dialog.showModal();
    root.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      dialog.close();
      root.style.overflow = previousOverflow;
      if (window.lenis === lenis && !wasLenisStopped) lenis?.start();
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    waitForPageImages(contentRef.current, controller.signal).then(() => {
      if (!controller.signal.aborted) setIsReady(true);
    });

    return () => controller.abort();
  }, [place]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="place-album"
      aria-labelledby="place-album-title"
      aria-describedby="place-album-description"
      data-lenis-prevent=""
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <button className="place-album__close" type="button" onClick={onClose} aria-label="Close photo album" autoFocus>
        <FiX aria-hidden="true" />
      </button>

      <div
        ref={contentRef}
        className="place-album__scroll"
        data-lenis-prevent=""
        data-ready={isReady}
        aria-busy={!isReady}
        aria-hidden={!isReady}
        inert={!isReady}
      >
        <header className="place-album__header">
          <div>
            <p className="place-album__region"><FiMapPin aria-hidden="true" /> {place.region}</p>
            <h2 id="place-album-title">{place.name}.</h2>
            <p id="place-album-description">{place.visited}</p>
          </div>
        </header>

        <div className="place-album__collage">
          {place.photos.map((photo) => (
            <figure className={`place-album__photo place-album__photo--${photo.layout ?? "portrait"}`} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="eager" decoding="async" />
            </figure>
          ))}
        </div>
      </div>

      {!isReady && (
        <div className="place-album__loader" role="status" aria-live="polite">
          <span className="page-loader__spinner" aria-hidden="true" />
          <span className="page-loader__label">Loading photos</span>
        </div>
      )}
    </dialog>,
    document.body,
  );
};

const PlacesVisited = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const closeAlbum = useCallback(() => setSelectedPlace(null), []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Places I Visited | Tristan's World";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="places-page" aria-labelledby="places-title">
      <div className="places-page__inner">
        <header className="places-page__header">
          <div>
            <h1 id="places-title">Places I Visited.</h1>
          </div>
          <BentoBackButton />
        </header>

        <div className="places-grid">
          {places.map((place) => (
            <button
              key={place.id}
              className="place-card"
              type="button"
              aria-haspopup="dialog"
              aria-label={`Open ${place.name} photo album`}
              onClick={() => setSelectedPlace(place)}
            >
              <img className="place-card__cover" src={place.cover} style={{ objectPosition: place.coverPosition }} alt="" decoding="async" />
              <span className="place-card__count"><FiCamera aria-hidden="true" /> {place.photos.length} photos</span>
              <span className="place-card__caption">
                <span className="place-card__region"><FiMapPin aria-hidden="true" /> {place.region}</span>
                <span className="place-card__name">{place.name}</span>
                <span className="place-card__action">
                  <span>{place.visited}</span>
                  <span className="place-card__plus">View photos <FiPlus aria-hidden="true" /></span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedPlace && <PlaceAlbum key={selectedPlace.id} place={selectedPlace} onClose={closeAlbum} />}
    </section>
  );
};

export default PlacesVisited;
