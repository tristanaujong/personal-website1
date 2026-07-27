import myCarCover from "./images/my-car-cover.png";

const columns = [
  [
    {
      height: "h-64",
      title: "My Car",
      href: "#/fun/my-car",
      background: "bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600",
      hoverBackground: "hover:bg-gradient-to-br hover:from-orange-200 hover:via-orange-300 hover:to-orange-400",
      textColor: "text-stone-100",
      image: myCarCover,
      imageClass: "right-3 top-3 h-60 w-120",
    },
    { height: "h-32", title: "Diecast Collection", href: "#diecast-collection" },
    { height: "h-16", title: "Cars I Have Driven", href: "#cooking" },
    { height: "h-16", title: "My Ideal 2-Car Garage (with a twist)", href: "#two-car-garage" },
    { height: "h-40", title: "Cool Cars I Spotted", href: "#test" },
  ],
  [
    { height: "h-32", title: "Gym", href: "#gym" },
    { height: "h-40", title: "Places I Visited", href: "#places-i-visited" },
    { height: "h-28", title: "Wishlist", href: "#wishlist" },
    { height: "h-28", title: "Device Spread", href: "#device-spread" },
  ],
  [
    { height: "h-40", title: "Boba", href: "#boba" },
    { height: "h-32", title: "Favorite Games", href: "#favorite-games" },
    { height: "h-40", title: "Fun Facts", href: "#fun-facts" },
    { height: "h-16", title: "Cooking", href: "#cooking" },
    { height: "h-32", title: "Favorite Artists", href: "#experiments" },
  ],
];

const FunStuff = () => {
  return (
    <section id="fun" className="min-h-dvh scroll-mt-26 px-6 py-24">
      <div className="mx-auto w-full max-w-[96rem]">
        <h2 className="font-sf-pro text-7xl font-bold text-stone-900 md:text-8xl">
          FUN STUFF
        </h2>

        <div className="mt-16 flex flex-col gap-4 md:flex-row">
          {columns.map((column, columnIndex) => (
            <div className="flex-1" key={columnIndex}>
              {column.map((card) => (
                <a
                  className={`${card.height} ${
                    card.background ?? "bg-neutral-100"
                  } ${
                    card.hoverBackground ?? "hover:bg-neutral-200"
                  } ${
                    card.textColor ?? "text-stone-900"
                  } relative mb-4 flex overflow-hidden rounded-xl border-2 border-slate-400/10 bg-clip-padding p-4 transition-colors duration-300`}
                  href={card.href}
                  key={card.title}
                >
                  {card.image && (
                    <img
                      src={card.image}
                      alt=""
                      aria-hidden="true"
                      className={`pointer-events-none absolute object-contain opacity-90 ${
                        card.imageClass ?? "right-3 top-3 h-24 w-24"
                      }`}
                    />
                  )}

                  <span className="relative z-10 self-end font-sf-pro text-xl font-semibold">
                    {card.title}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunStuff;
