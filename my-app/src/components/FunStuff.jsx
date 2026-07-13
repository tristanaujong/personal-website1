const columns = [
  [
    { height: "h-24", title: "My Car", href: "#my-car" },
    { height: "h-32", title: "Boba", href: "#boba" },
    { height: "h-32", title: "Device Spread", href: "#device-spread" },
    { height: "h-16", title: "Cooking", href: "#cooking" },
    { height: "h-16", title: "Favorite Artists", href: "#experiments" },
  ],
  [
    { height: "h-32", title: "Gym", href: "#gym" },
    { height: "h-40", title: "Places I Visited", href: "#places-i-visited" },
    { height: "h-56", title: "Wishlist", href: "#wishlist" },
  ],
  [
    { height: "h-64", title: "Diecast Collection", href: "#diecast-collection" },
    { height: "h-32", title: "Favorite Games", href: "#favorite-games" },
    { height: "h-32", title: "Fun Facts", href: "#fun-facts" },
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
                  className={`${card.height} mb-4 flex rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 text-stone-900 transition-colors duration-300 hover:bg-neutral-200`}
                  href={card.href}
                  key={card.title}
                >
                  <span className="self-end font-sf-pro text-xl font-semibold">
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
