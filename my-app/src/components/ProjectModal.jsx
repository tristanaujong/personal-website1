import { useEffect, useRef } from "react";

const ProjectModal = ({ project, onClose }) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative min-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-stone-100 p-8 text-stone-900 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
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

        <img
          src={project.img}
          alt={`${project.title} preview`}
          className="mb-6 max-h-80 w-full object-contain"
        />

        <h2 id="project-modal-title" className="text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-2 text-stone-500">{project.year}</p>
        <p className="mt-6 text-lg">
          {project.details ?? project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
