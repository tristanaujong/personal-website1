import portlandForestRoad from "../components/images/places-i-visited/portland/IMG_2905.jpg";
import portlandCabin from "../components/images/places-i-visited/portland/IMG_2942.jpg";
import portlandRiver from "../components/images/places-i-visited/portland/IMG_2950.jpg";
import portlandTruck from "../components/images/places-i-visited/portland/IMG_2959.jpg";
import portlandWaterfall from "../components/images/places-i-visited/portland/IMG_2961.jpg";
import portlandMountain from "../components/images/places-i-visited/portland/IMG_2970.jpg";
import portlandFood from "../components/images/places-i-visited/portland/IMG_2976.jpg";
import seattleCars from "../components/images/places-i-visited/seattle/IMG_3152.jpg";
import seattleWaterfront from "../components/images/places-i-visited/seattle/IMG_3158.jpg";
import seattleGumWall from "../components/images/places-i-visited/seattle/IMG_3163.jpg";
import seattleMarket from "../components/images/places-i-visited/seattle/IMG_3167.jpg";
import seattleSpaceNeedle from "../components/images/places-i-visited/seattle/IMG_3177.jpg";
import seattleMountains from "../components/images/places-i-visited/seattle/IMG_3209.jpg";
import dragonMuseumFriends from "../components/images/places-i-visited/totd/FullSizeRender (1).webp";
import dragonCivicDrive from "../components/images/places-i-visited/totd/5213637_50 (1).jpg";
import dragonNightStop from "../components/images/places-i-visited/totd/IMG_1468 (1).webp";
import dragonGasStop from "../components/images/places-i-visited/totd/IMG_1485 (1).webp";
import dragonCityDrive from "../components/images/places-i-visited/totd/IMG_1510 (1).webp";
import dragonParthenon from "../components/images/places-i-visited/totd/IMG_1582 (1).webp";
import dragonCorvetteExhibit from "../components/images/places-i-visited/totd/IMG_1648 (1).webp";
import dragonBlueCorvette from "../components/images/places-i-visited/totd/IMG_1649 (1).webp";
import dragonYellowCorvette from "../components/images/places-i-visited/totd/IMG_1669 (1).webp";
import dragonOverlookCars from "../components/images/places-i-visited/totd/IMG_1678 (1).webp";
import dragonTree from "../components/images/places-i-visited/totd/IMG_1701 (1).webp";
import dragonMountainLineup from "../components/images/places-i-visited/totd/IMG_1711 (1).webp";
import dragonCavern from "../components/images/places-i-visited/totd/IMG_1732 (1).webp";
import dragonBreakfast from "../components/images/places-i-visited/totd/IMG_1740 (1).webp";
import dragonRiverView from "../components/images/places-i-visited/totd/IMG_1750 (1).webp";
import dragonMuseumAtrium from "../components/images/places-i-visited/totd/IMG_1785 (1).webp";
import dragonMuseumCollection from "../components/images/places-i-visited/totd/IMG_1800 (1).webp";
import dragonWallDisplay from "../components/images/places-i-visited/totd/IMG_1801 (1).webp";
import dragonMotorcyclePose from "../components/images/places-i-visited/totd/IMG_1829 (1).webp";
import dragonBasketball from "../components/images/places-i-visited/totd/IMG_1880 (1).webp";
import dragonRailBridge from "../components/images/places-i-visited/totd/IMG_1919 (1).webp";

const places = [
  {
    id: "portland",
    name: "Portland",
    region: "Oregon, USA",
    visited: "06/2023",
    cover: portlandRiver,
    photos: [
      { src: portlandWaterfall, alt: "A tall waterfall surrounded by green forest, seen from a stone viewing terrace.", layout: "feature" },
      { src: portlandRiver, alt: "A river winding between forested hills beneath a partly cloudy sky.", layout: "wide" },
      { src: portlandCabin, alt: "A red cabin and a white van beneath tall evergreen trees.", layout: "wide" },
      { src: portlandForestRoad, alt: "A winding road through a dense green forest, seen from inside a car." },
      { src: portlandTruck, alt: "A small white flatbed truck parked beside a wooded road." },
      { src: portlandMountain, alt: "A snow-capped mountain beyond a green valley under a blue sky." },
      { src: portlandFood, alt: "A basket of fried food served with dipping sauces." },
    ],
  },
  {
    id: "seattle",
    name: "Seattle",
    region: "Washington, USA",
    visited: "06/2023",
    cover: seattleSpaceNeedle,
    coverPosition: "center 20%",
    photos: [
      { src: seattleSpaceNeedle, alt: "Seattle's Space Needle viewed from below against a clear blue sky.", layout: "feature" },
      { src: seattleWaterfront, alt: "Seattle's waterfront and ferries seen from above on a sunny day.", layout: "panorama" },
      { src: seattleGumWall, alt: "A brick wall covered in colorful chewing gum at Seattle's Gum Wall." },
      { src: seattleMarket, alt: "People walking through an outdoor market passage in Seattle." },
      { src: seattleCars, alt: "Red and dark-colored cars parked along a sunny Seattle street." },
      { src: seattleMountains, alt: "A snowy mountain landscape with evergreen trees and a partly cloudy sky." },
    ],
  },
  {
    id: "tail-of-the-dragon",
    name: "Tail of the Dragon",
    region: "Tennessee & North Carolina, USA",
    visited: "03/2026",
    cover: dragonCivicDrive,
    photos: [
      { src: dragonCivicDrive, alt: "An orange Honda Civic Si rounding a bend on a wooded road at Tail of the Dragon.", layout: "wide" },
      { src: dragonOverlookCars, alt: "White, orange, and blue cars parked at a mountain overlook beneath a blue sky.", layout: "feature" },
      { src: dragonMountainLineup, alt: "Three cars parked along a mountain road with forested ridges in the distance.", layout: "wide" },
      { src: dragonParthenon, alt: "A group of friends taking a selfie in front of the Parthenon's tall stone columns.", layout: "wide" },
      { src: dragonNightStop, alt: "An orange Honda parked outside a brightly lit restaurant at night." },
      { src: dragonGasStop, alt: "An orange Honda stopped beside a gas pump under an overcast sky." },
      { src: dragonCityDrive, alt: "A city street lined with buildings and yellow bollards, seen from inside a car." },
      { src: dragonCorvetteExhibit, alt: "A damaged orange Corvette displayed in a museum exhibit." },
      { src: dragonBlueCorvette, alt: "A blue Corvette on display beside a red column in a museum." },
      { src: dragonYellowCorvette, alt: "A yellow Corvette displayed beneath a curved museum ceiling." },
      { src: dragonTree, alt: "A roadside tree covered with motorcycle parts and memorabilia." },
      { src: dragonCavern, alt: "A cavern pool beneath textured rock walls illuminated with green light." },
      { src: dragonBreakfast, alt: "Plates of breakfast food with toast, eggs, bacon, and hash browns on a diner table." },
      { src: dragonRiverView, alt: "A broad river curving around a city, viewed from a hillside beneath a clear blue sky." },
      { src: dragonMuseumAtrium, alt: "Multiple floors of motorcycles and cars surrounding an open museum atrium." },
      { src: dragonMuseumCollection, alt: "Rows of motorcycles and cars on display beside tall museum windows." },
      { src: dragonWallDisplay, alt: "A white sports car mounted vertically above a museum doorway." },
      { src: dragonMotorcyclePose, alt: "A person raising both arms beside a yellow motorcycle on a museum platform." },
      { src: dragonMuseumFriends, alt: "Two friends posing beside a red motorcycle on a museum display platform." },
      { src: dragonBasketball, alt: "Friends on an outdoor basketball court beside a lit building at night." },
      { src: dragonRailBridge, alt: "A rust-colored steel railway bridge crossing a river beneath a clear blue sky." },
    ],
  },
];

export default places;
