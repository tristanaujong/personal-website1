import myCarCover from "./images/my-car/my-car-thumb.jpg";
import ageraCover from "./images/dream-cars/koenigsegg_agera_r_11-removebg-preview.png";
import diecastCover from "./images/diecast/diecast-cover.png";
import spottedCarsCover from "./images/spotted-cars/imagec112.jpg";
import deviceSpreadCover from "./images/device-spread/device-spread-thumb.png";
import deviceSpreadMouse from "./images/device-spread/device-spread-thumb1.png";
import "./FunStuff.css";

// Heights are in rem; column spans give the desktop layout a fixed, varied rhythm.
const cards = [
  {
    height: 9.5,
    columns: 4,
    title: "My Car",
    href: "#/fun/my-car",
    image: myCarCover,
    imageClass: "right-0 top-0 h-full w-[85%]",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 60%",
      opacity: 1,
      maskImage: "linear-gradient(to right, transparent, rgb(0 0 0 / 15%) 6%, #000 30%)",
      WebkitMaskImage: "linear-gradient(to right, transparent, rgb(0 0 0 / 15%) 6%, #000 30%)",
    },
    titleClass: "max-w-[48%]",
  },
  {
    height: 9.5,
    columns: 4,
    title: "My Dream Cars",
    href: "#/fun/dream-cars",
    image: ageraCover,
    imageClass: "right-3 top-2 h-28 w-[55%] object-right",
  },
  {
    height: 9.5,
    columns: 4,
    title: "Diecast Collection",
    href: "#/fun/diecast-collection",
    image: diecastCover,
    imageClass: "right-2 top-0 h-full w-[60%] object-top",
    titleClass: "max-w-[42%]",
  },
  { height: 10, columns: 7, desktopColumn: 6, desktopRow: 43, title: "Places I Visited", href: "#places-i-visited" },
  { height: 8, columns: 3, desktopColumn: 1, desktopRow: 43, title: "Gym", href: "#gym" },
  { height: 8, columns: 2, desktopColumn: 4, desktopRow: 43, title: "Wishlist", href: "#wishlist" },
  {
    height: 11.25,
    columns: 5,
    title: "Cool Cars I Have Spotted",
    href: "#/fun/spotted-cars",
    image: spottedCarsCover,
    imageClass: "right-0 top-0 h-full w-[68%]",
    imageStyle: {
      objectFit: "cover",
      objectPosition: "center 60%",
      opacity: 1,
      maskImage: "linear-gradient(to right, transparent, rgb(0 0 0 / 15%) 25%, #000 65%)",
      WebkitMaskImage: "linear-gradient(to right, transparent, rgb(0 0 0 / 15%) 25%, #000 65%)",
    },
    titleClass: "max-w-[48%]",
  },
  {
    height: 7,
    columns: 4,
    title: "Device Spread",
    href: "#device-spread",
    images: [deviceSpreadCover, deviceSpreadMouse],
  },
  { height: 7, columns: 3, title: "Fun Facts", href: "#fun-facts" },
  // Anchor the lower group so dense packing cannot move its shared baseline.
  { height: 10, columns: 5, desktopColumn: 1, desktopRow: 128, title: "Boba", href: "#boba" },
  { height: 4, columns: 3, desktopColumn: 10, desktopRow: 119, title: "Cars I Have Driven", href: "#cooking" },
  { height: 12.25, columns: 4, desktopColumn: 6, desktopRow: 119, title: "Favorite Games", href: "#favorite-games" },
  { height: 7.25, columns: 3, desktopColumn: 10, desktopRow: 139, title: "Favorite Artists", href: "#experiments" },
];

const FunStuff = () => {
  return (
    <section id="fun" className="min-h-dvh scroll-mt-26 px-6 py-24">
      <div className="fun-bento mx-auto w-full max-w-[96rem]">
        {cards.map((card) => (
          <a
            className={`${
              card.background ?? "bg-neutral-100"
            } ${
              card.hoverBackground ?? "hover:bg-neutral-200"
            } ${
              card.textColor ?? "text-stone-900"
            } fun-bento__card relative mb-4 flex overflow-hidden rounded-xl border-2 border-slate-400/10 bg-clip-padding p-4 transition-colors duration-300`}
            style={{
              "--card-columns": card.columns,
              "--desktop-column": card.desktopColumn,
              "--desktop-row": card.desktopRow,
              height: `${card.height}rem`,
              // Quarter-rem tracks include the one-rem gap below each card.
              gridRowEnd: `span ${Math.ceil((card.height + 1) * 4)}`,
            }}
            href={card.href}
            key={card.title}
          >
            {card.images && (
              <div className="fun-bento__thumbnails" aria-hidden="true">
                {card.images.map((src) => (
                  <img src={src} alt="" key={src} />
                ))}
              </div>
            )}

            {card.image && (
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                style={card.imageStyle}
                className={`pointer-events-none absolute object-contain opacity-90 ${
                  card.imageClass ?? "right-3 top-3 h-24 w-24"
                }`}
              />
            )}

            <span
              className={`relative z-10 self-end font-sf-pro text-xl font-semibold ${card.titleClass ?? ""}`}
            >
              {card.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FunStuff;
