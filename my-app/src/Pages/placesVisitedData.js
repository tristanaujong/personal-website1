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
];

export default places;
