const WideCard = ({
  title,
  description,
  year,
  img,
  hoverColor = "#6b7280",
  onClick,
}) => {
  const cardClassName =
    "flex h-108 w-108 flex-col overflow-hidden rounded-xl bg-stone-400 p-6 text-center no-underline transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[var(--card-hover-color)] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4";

  const cardContent = (
    <>
      <div className="flex h-1/2 shrink-0 items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={img}
          alt={`${title} logo`}
        />
      </div>
      <div className="flex h-1/2 shrink-0 flex-col justify-center">
        <h3 className="font-sf-pro text-xl font-bold text-stone-50">{title}</h3>
        <p className="font-sf-pro text-base text-stone-50">{description}</p>
        <p className="mt-4 font-sf-pro text-base text-stone-50">{year}</p>
      </div>
    </>
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className={cardClassName}
      style={{ "--card-hover-color": hoverColor }}
    >
      {cardContent}
    </button>
  );
};

export default WideCard;
