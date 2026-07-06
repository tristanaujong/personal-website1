const Card = ({
  title,
  description,
  year,
  img,
  link,
  hoverColor = "#6b7280",
}) => {
  const cardClassName =
    "flex h-80 w-64 flex-col overflow-hidden rounded-xl bg-stone-400 p-6 text-center no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[var(--card-hover-color)] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4";

  const cardContent = (
    <>
      <div className="flex flex-1 items-center justify-center">
        <img
          className="h-25 w-44 object-contain"
          src={img}
          alt={`${title} logo`}
        />
      </div>
      <div className="shrink-0">
        <h3 className="font-sf-pro text-xl font-bold text-stone-50">{title}</h3>
        <p className="font-sf-pro text-base text-stone-50">{description}</p>
        <p className="mt-4 font-sf-pro text-base text-stone-50">{year}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        className={cardClassName}
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ "--card-hover-color": hoverColor }}
        aria-label={`Visit ${title}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={cardClassName}
      style={{ "--card-hover-color": hoverColor }}
    >
      {cardContent}
    </div>
  );
};

export default Card;
