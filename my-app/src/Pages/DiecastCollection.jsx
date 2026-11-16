import { useEffect } from "react";
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
import "./DiecastCollection.css";

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

const DiecastCollection = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Diecast Collection | Tristan's World";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="diecast-page" aria-label="Diecast Collection">
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
