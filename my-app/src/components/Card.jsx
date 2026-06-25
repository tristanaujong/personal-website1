import React from "react";

const Card = ({ title, description, year, img, hoverColor = "#6b7280" }) => {
  return (
    <div
      className="flex h-80 w-64 flex-col overflow-hidden rounded-xl bg-stone-400 p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-[var(--card-hover-color)] hover:shadow-xl"
      style={{ "--card-hover-color": hoverColor }}
    >
      <div className="flex flex-1 items-center justify-center">
        <img
          className="h-20 w-44 object-contain"
          src={img}
          alt={`${title} logo`}
        />
      </div>
      <div className="shrink-0">
        <h3 className="font-sf-pro text-xl font-bold text-stone-50">{title}</h3>
        <p className="font-sf-pro text-base text-stone-50">{description}</p>
        <p className="mt-4 font-sf-pro text-base text-stone-50">
          {year}
        </p>
      </div>
    </div>
  );
};

export default Card;
