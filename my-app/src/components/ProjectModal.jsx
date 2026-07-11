import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = useMemo(() => {
    if (!project) return [];

    return project.images?.length ? project.images : [project.img].filter(Boolean);
  }, [project]);

  const hasMultipleImages = images.length > 1;
  const currentImage = images[activeImageIndex] ?? images[0];
  const modalDescription =
    project?.modalDescription ?? project?.details ?? project?.description ?? "";
  const modalDescriptionParagraphs = modalDescription
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);

  const goToPreviousImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }, [hasMultipleImages, images.length]);

  const goToNextImage = useCallback(() => {
    if (!hasMultipleImages) return;

    setActiveImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }, [hasMultipleImages, images.length]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const lenis = window.lenis;
    const wasLenisStopped = lenis?.isStopped;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }

      if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (lenis && !wasLenisStopped) {
        lenis.start();
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNextImage, goToPreviousImage, project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        data-lenis-prevent
        className="relative h-[calc(100dvh-2rem)] w-full max-w-4xl overflow-y-auto overscroll-contain rounded-2xl bg-stone-100 p-5 text-stone-900 shadow-2xl sm:h-[calc(100dvh-3rem)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close project"
          onClick={onClose}
          className="absolute right-5 top-4 cursor-pointer text-3xl"
        >
          &times;
        </button>

        {currentImage && (
          <div className="relative mb-5 mt-10 h-[54dvh] min-h-64 overflow-hidden rounded-xl bg-stone-200 sm:h-[58dvh] lg:h-[60dvh]">
            <img
              src={currentImage}
              alt={`${project.title} preview ${activeImageIndex + 1}`}
              className="size-full object-contain"
            />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-stone-950/70 text-stone-50 transition hover:bg-stone-950"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-stone-950/70 text-stone-50 transition hover:bg-stone-950"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </>
            )}

            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 justify-center gap-2 rounded-full bg-stone-950/50 px-3 py-2 backdrop-blur-sm">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    aria-label={`Show image ${index + 1}`}
                    aria-current={activeImageIndex === index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`size-2.5 cursor-pointer rounded-full transition ${
                      activeImageIndex === index
                        ? "bg-stone-50"
                        : "bg-stone-400 hover:bg-stone-200"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 id="project-modal-title" className="text-4xl font-bold">
              {project.title}
            </h2>

            <p className="mt-2 text-stone-500">{project.year}</p>
          </div>

          {project.technologies?.length > 0 && (
            <div className="flex shrink-0 items-center gap-3">
              {project.technologies.map((technology) => (
                <img
                  key={technology.name}
                  src={technology.img}
                  alt={`${technology.name} logo`}
                  title={technology.name}
                  className="size-12 object-contain"
                />
              ))}
            </div>
          )}
        </div>
        <div className="mt-10 space-y-5 pb-2 text-lg">
          {modalDescriptionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
