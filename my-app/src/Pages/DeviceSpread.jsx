import { useEffect } from "react";
import BentoBackButton from "../components/BentoBackButton";
import laptop from "../components/images/device-spread/acer-predator-helios-300.png";
import phone from "../components/images/device-spread/iphone-16-pro.png";
import watch from "../components/images/device-spread/apple-watch-10.png";
import airpods from "../components/images/device-spread/airpods-pro-2.png";
import tablet from "../components/images/device-spread/ipad-10.png";
import keyboard from "../components/images/device-spread/keychron-k5-max.png";
import mouse from "../components/images/device-spread/glorious-model-o.png";
import headphones from "../components/images/device-spread/soundcore-q45.png";
import chair from "../components/images/device-spread/koenigsegg-gaming-chair.png";
import camera from "../components/images/device-spread/dji-osmo-action-5-pro.png";
import sonyCamera from "../components/images/device-spread/sony-zv1.png";
import microphone from "../components/images/device-spread/dji-mic-mini.png";
import gimbal from "../components/images/device-spread/dji-osmo-mobile-se.png";
import radar from "../components/images/device-spread/uniden-r4.png";
import dashcam from "../components/images/device-spread/viofo-a229-pro.png";
import "./DeviceSpread.css";

const devices = [
  {
    id: "laptop",
    category: "Laptop",
    name: "Acer Predator Helios 300",
    subtitle: "Intel Core i7-12700H - RTX 3070 Ti - 16 GB RAM - 1 TB Storage",
    blurb: "Used for my entire undergrad so far with no issues.",
    image: laptop, width: 649, height: 385,
  },
  {
    id: "phone",
    category: "Phone",
    name: "iPhone 16 Pro",
    subtitle: "256 GB - 89% battery health lol",
    blurb: "I wish I had more storage.",
    image: phone, width: 1080, height: 1350,
  },
  {
    id: "watch",
    category: "Watch",
    name: "Apple Watch Series 10",
    subtitle: "Jet Black",
    blurb: "Lowkey I don't wear this that often lol.",
    image: watch, width: 469, height: 532,
  },
  {
    id: "airpods",
    category: "Audio",
    name: "AirPods Pro 2",
    subtitle: "Lightning",
    blurb: "Highkey I use these quite often.",
    image: airpods, width: 545, height: 458,
  },
  {
    id: "tablet",
    category: "Tablet",
    name: "iPad 10",
    subtitle: "64 GB",
    blurb: "Used for digital notes and big screen doom-scrolling.",
    image: tablet, width: 470, height: 531,
  },
  {
    id: "keyboard",
    category: "Keyboard",
    name: "Keychron K5 Max",
    subtitle: "Wireless",
    blurb: "Low profile keyboard is nice but the switches are a bit too light (I mistype a lot as a result).",
    image: keyboard, width: 500, height: 500,
  },
  {
    id: "mouse",
    category: "Mouse",
    name: "Glorious Model O",
    subtitle: "Wired",
    blurb: "Bought this for Minecraft Hypixel Bedwars during Covid, still use it to this day.",
    image: mouse, width: 500, height: 500,
  },
  {
    id: "headphones",
    category: "Audio",
    name: "Soundcore Q45",
    subtitle: "Wired Headphones",
    blurb: "They do the job, but I'm actively looking for a new pair of wired headphones.",
    image: headphones, width: 449, height: 556,
  },
];

const chairStackDevices = [
  {
    id: "chair",
    category: "Chair",
    name: "Razer Enki Pro Koenigsegg Edition",
    subtitle: "Limited Edition",
    blurb: "Bought off of Facebook Marketplace for $500 and drove 6 hours to get it. Originally worth $1400.",
    image: chair, width: 389, height: 641,
  },
  {
    id: "sony-zv1",
    category: "Camera",
    name: "Sony ZV-1",
    subtitle: "Professional Camera",
    blurb: "Takes super detailed photos.",
    image: sonyCamera, width: 500, height: 500,
  },
  {
    id: "camera",
    category: "Camera",
    name: "DJI Osmo Action 5 Pro",
    subtitle: "Standard Combo",
    blurb: "Nice little action camera.",
    image: camera, width: 630, height: 396,
  },
];

const cameraGearDevices = [
  {
    id: "mic-mini",
    category: "Audio",
    name: "DJI Mic Mini",
    subtitle: "Portable Microphone",
    blurb: "Captures super detailed audio.",
    image: microphone, width: 459, height: 543,
  },
  {
    id: "gimbal",
    category: "Video",
    name: "DJI Osmo Mobile SE",
    subtitle: "Gimbal",
    blurb: "My hands are too shaky without this.",
    image: gimbal, width: 1280, height: 1280,
  },
];

const carDevices = [
  {
    id: "radar",
    category: "Car Tech",
    name: "Uniden R4",
    subtitle: "Radar",
    blurb: "Has saved me a couple of times.",
    image: radar, width: 655, height: 381,
  },
  {
    id: "dashcam",
    category: "Car Tech",
    name: "Viofo A229 Pro",
    subtitle: "Front & Rear",
    blurb: "Dashcam is mandatory in my car.",
    image: dashcam, width: 500, height: 500,
  },
];

const DeviceCard = ({ device, eager = false }) => (
  <figure className={`device-card device-card--${device.id}`}>
    <figcaption className="device-card__caption">
      <p className="device-card__category">{device.category}</p>
      <h2>{device.name}</h2>
      <p className="device-card__subtitle">{device.subtitle}</p>
    </figcaption>
    <div className="device-card__image">
      <img
        src={device.image}
        alt={device.name}
        width={device.width}
        height={device.height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
    <p className="device-card__blurb">{device.blurb}</p>
  </figure>
);

const DeviceSpread = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Device Spread | Tristan's World";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="device-spread-page" aria-labelledby="device-spread-title">
      <div className="device-spread-page__inner">
        <header className="device-spread-page__header">
          <h1 id="device-spread-title">Device Spread.</h1>
          <BentoBackButton />
        </header>

        <div className="device-spread-grid">
          {devices.map((device, index) => (
            <DeviceCard device={device} eager={index < 2} key={device.id} />
          ))}
          <div className="device-chair-stack">
            {chairStackDevices.map((device) => (
              <DeviceCard device={device} key={device.id} />
            ))}
          </div>
          {cameraGearDevices.map((device) => (
            <DeviceCard device={device} key={device.id} />
          ))}
          {carDevices.map((device) => (
            <DeviceCard device={device} key={device.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceSpread;
