import { useContext, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import PageReadyContext from "../components/PageReadyContext";
import DiecastModel from "../components/DiecastModel";
import miniGtLogo from "../components/images/diecast/MINI_GT_logo.svg.webp";
import innoLogo from "../components/images/diecast/INNO_Models_Logo.png";
import popRaceLogo from "../components/images/diecast/popraceLogo.webp";
import tarmacLogo from "../components/images/diecast/tarmac-works.webp";
import hotWheelsLogo from "../components/images/diecast/Hot_Wheels_logo_PNG1.png";
import premiumGoldLabelLogo from "../components/images/diecast/PremiumGoldLabel.webp";
import matchboxLogo from "../components/images/diecast/Matchbox-logo.png";
import tomicaLogo from "../components/images/diecast/Tomica_brand_textlogo.png";
import autoWorldLogo from "../components/images/diecast/image-removebg-preview (50).png";
import moreArtLogo from "../components/images/diecast/moreartlogo.png";
import gfansLogo from "../components/images/diecast/gfanslogo.jpg";
import collectionPhoto from "../components/images/diecast/collection-visit.jpg";
import showcasePhoto from "../components/images/diecast/IMG_6289.jpg";
import displayCasesPhoto from "../components/images/diecast/IMG_1609 (1).jpg";
import shopInteriorPhoto from "../components/images/diecast/IMG_3410.jpg";
import groupPhoto from "../components/images/diecast/jcar.jpg";
import jcarLogo from "../components/images/diecast/jcardiecast.webp";
import horizonLogo from "../components/images/diecast/horizon-diecast.png";
import playdaysLogo from "../components/images/diecast/playdays-collectibles.png";
import shelfDisplayOne from "../components/images/diecast/display1.jpg";
import shelfDisplayTwo from "../components/images/diecast/display2.jpg";
import floorDisplay from "../components/images/diecast/display3.jpg";
import nissanDiorama from "../components/images/diecast/igwsmfmp95mh1.jpg";
import convenienceStoreDiorama from "../components/images/diecast/m8lrfbmp95mh1.jpg";
import carMeetDiorama from "../components/images/diecast/IMG_5779.jpg";
import carHaulerDisplay from "../components/images/diecast/imagehauler.jpg";
import parkingDiorama from "../components/images/diecast/IMG_5789.jpg";
import streetDiorama from "../components/images/diecast/IMG_5786.jpg";
import cafeDiorama from "../components/images/diecast/IMG_7544.jpg";
import gasStationDiorama from "../components/images/diecast/jt2ccfmp95mh1.jpg";
import parkingGarageDiorama from "../components/images/diecast/p5zy7bmp95mh1.jpg";
import "./DiecastCollection.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const brands = [
  { name: "MINI GT", image: miniGtLogo },
  { name: "INNO Models", image: innoLogo },
  { name: "POP RACE", image: popRaceLogo },
  { name: "Tarmac Works", image: tarmacLogo },
  { name: "Hot Wheels", image: hotWheelsLogo },
  { name: "Hot Wheels Premium Gold Label", image: premiumGoldLabelLogo },
  { name: "Matchbox", image: matchboxLogo },
  { name: "Tomica", image: tomicaLogo },
  { name: "Auto World", image: autoWorldLogo },
  { name: "MoreArt", image: moreArtLogo },
  { name: "GFans", image: gfansLogo },
];

const galleryPhotos = [
  {
    src: groupPhoto,
    alt: "Three people standing beside a wall of packaged Hot Wheels cars.",
    width: 2252,
    height: 2252,
    featured: true,
    logo: jcarLogo,
    logoAlt: "Jcar Diecast",
    caption: "Jcar Diecast - Houston, TX",
  },
  {
    src: displayCasesPhoto,
    alt: "Diecast model cars and miniature dioramas displayed in clear cases.",
    width: 4284,
    height: 2410,
    logo: horizonLogo,
    logoAlt: "Horizon Diecast",
    caption: "Horizon Diecast - Markham, Ontario, Canada",
  },
  {
    src: shopInteriorPhoto,
    alt: "Hot Wheels packages and glass display cabinets inside a diecast shop.",
    width: 4032,
    height: 2268,
    logo: playdaysLogo,
    logoAlt: "Playdays Collectibles",
    caption: "Playdays Collectibles - Whittier, CA",
  },
];

const collectionPhotos = [
  {
    src: shelfDisplayOne,
    alt: "Diecast cars and dioramas arranged across a cube shelf beneath a car-themed skateboard.",
    width: 4284,
    height: 4284,
    layout: "feature",
  },
  {
    src: shelfDisplayTwo,
    alt: "A bookshelf filled with miniature car meets, parking lots, and model car displays.",
    width: 2268,
    height: 2268,
    layout: "feature",
  },
  {
    src: floorDisplay,
    caption: "A kid knocked over the display",
    alt: "Groups of diecast model cars arranged on the floor beside a wooden display rack.",
    width: 4284,
    height: 5712,
    layout: "portrait",
  },
  {
    src: nissanDiorama,
    alt: "Miniature cars parked outside a Nissan dealership diorama.",
    width: 3024,
    height: 3024,
  },
  {
    src: convenienceStoreDiorama,
    alt: "Colorful model cars gathered outside a miniature 7-Eleven store.",
    width: 3024,
    height: 3024,
  },
  {
    src: carMeetDiorama,
    alt: "A miniature car meet with rows of sports cars and event flags.",
    width: 4032,
    height: 2268,
    layout: "wide",
  },
  {
    src: carHaulerDisplay,
    alt: "A red model car transporter and miniature parking garages on a display shelf.",
    width: 3024,
    height: 3024,
  },
  {
    src: parkingDiorama,
    alt: "Model cars parked in a miniature lot around a black car with its hood open.",
    width: 4032,
    height: 2268,
    layout: "wide",
  },
  {
    src: streetDiorama,
    alt: "A miniature street scene with parked cars and a yellow delivery truck.",
    width: 4032,
    height: 2268,
    layout: "strip",
  },
  {
    src: cafeDiorama,
    alt: "White and yellow diecast cars parked outside a miniature cafe.",
    width: 3024,
    height: 3024,
  },
  {
    src: gasStationDiorama,
    alt: "Sports cars filling a miniature Shell gas station forecourt.",
    width: 3024,
    height: 3024,
  },
  {
    src: parkingGarageDiorama,
    alt: "Model cars displayed on both levels of a miniature parking garage.",
    width: 3024,
    height: 3024,
  },
];

const DiecastCollection = () => {
  const isPageReady = useContext(PageReadyContext);
  const pageRef = useRef(null);

  useGSAP(() => {
    if (!isPageReady) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const title = pageRef.current.querySelector(".diecast-page__title");
      const logos = pageRef.current.querySelectorAll(".diecast-page__brands li");
      const titleStartY = window.innerHeight - title.getBoundingClientRect().top + 24;

      gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } })
        .from(title, {
          opacity: 0,
          y: titleStartY,
          delay: 0.2,
        })
        .from(logos, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: 0.1,
        }, "-=0.55");

      // Give each story the home page blurb's reveal with its own scroll trigger.
      const splits = Array.from(pageRef.current.querySelectorAll(".diecast-story__text"), (text) => {
        const split = SplitText.create(text, { type: "words" });
        gsap.to(split.words, {
          color: "#1c1917",
          stagger: 0.1,
          scrollTrigger: {
            trigger: text,
            start: "top 75%",
            // Finish while the final line is in view, even at the page's end.
            end: "clamp(bottom 80%)",
            scrub: true,
          },
        });
        return split;
      });

      return () => splits.forEach((split) => split.revert());
    });

    return () => media.revert();
  }, { scope: pageRef, dependencies: [isPageReady], revertOnUpdate: true });

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Diecast Collection | Tristan's World";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="diecast-page" ref={pageRef} aria-label="Diecast Collection">
      <a className="diecast-page__back" href="#/fun">
        Back to Fun Stuff <span aria-hidden="true">↗</span>
      </a>

      <div className="diecast-page__hero">
        <h1 className="diecast-page__title">DIECAST<span className="sr-only"> Collection</span></h1>
        <DiecastModel />
      </div>

      <ul className="diecast-page__brands" aria-label="Diecast brands">
        {brands.map((brand) => (
          <li key={brand.name}>
            <img src={brand.image} alt={brand.name} draggable="false" />
          </li>
        ))}
      </ul>

      <section className="diecast-story" aria-label="About my diecast collection">
        <p className="diecast-story__text">
          My favorite hobby currently is collecting diecast model cars. I've always liked collecting hotwheels as a kid,
          and that's now expanded to many other brands. I primarily collect 1/64 scale cars, and I mostly enjoy brands
          such as Mini GT, Hotwheels Premium, and more. Unfortunately, I don't think my wallet enjoys this hobby as much
          as I do lol.
        </p>
        <figure className="diecast-story__figure">
          <img
            className="diecast-story__photo"
            src={collectionPhoto}
            alt="A visit to a diecast shop, with glass display cabinets full of model cars."
            width="5712"
            height="4284"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Horizon Diecast in Markham, Ontario, Canada</figcaption>
        </figure>
      </section>

      <section className="diecast-gallery" aria-label="Diecast shop photo gallery">
        {galleryPhotos.map((photo) => (
          <figure
            className={`diecast-gallery__card${photo.featured ? " diecast-gallery__card--featured" : ""}`}
            key={photo.src}
          >
            <img
              className="diecast-gallery__photo"
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
            <img
              className="diecast-gallery__logo"
              src={photo.logo}
              alt={photo.logoAlt}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
            <figcaption className="diecast-gallery__caption">{photo.caption}</figcaption>
          </figure>
        ))}
      </section>

      <section className="diecast-story" aria-label="Displaying my diecast collection">
        <img
          className="diecast-story__photo"
          src={showcasePhoto}
          alt="Diecast cars arranged with a trailer and a miniature building."
          width="2564"
          height="2564"
          loading="lazy"
          decoding="async"
        />
        <p className="diecast-story__text">
          I'm a firm believer that model cars should be taken out of their packaging and displayed properly
          (I'm talking about you scalpers).
          This is why I have crafted some shelf and diorama display setups to showcase my collection.
          I enjoy setting up each showcase and making my own miniature world come to life.
        </p>
      </section>

      <section className="diecast-collage" aria-label="My diecast collection and diorama displays">
        {collectionPhotos.map((photo) => (
          <figure
            className={`diecast-collage__tile diecast-collage__tile--${photo.layout ?? "square"}${photo.caption ? " diecast-collage__tile--captioned" : ""}`}
            key={photo.src}
          >
            <img
              className="diecast-collage__photo"
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              loading="lazy"
              decoding="async"
            />
            {photo.caption && <figcaption className="diecast-collage__caption">{photo.caption}</figcaption>}
          </figure>
        ))}
      </section>

      <p className="diecast-page__credit">
        <a href="https://sketchfab.com/3d-models/alfaromeo-f1-team-kick-c43-24-zhou-6be2b9c98a9a4534b197c13dba9eeff6" target="_blank" rel="noreferrer">
          Alfa Romeo F1 Team KICK C43 #24 ZHOU
        </a>{" "}
        by <a href="https://sketchfab.com/Metazeon" target="_blank" rel="noreferrer">Metazeon</a>
        <span aria-hidden="true"> · </span>
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>
      </p>
    </section>
  );
};

export default DiecastCollection;
