import { useEffect } from "react";
import BentoBackButton from "../components/BentoBackButton";
import laptop from "../components/images/device-spread/acer-predator-helios-300.png";
import phone from "../components/images/device-spread/iphone-16-pro.png";
import watch from "../components/images/device-spread/apple-watch-10.png";
import airpods from "../components/images/device-spread/airpods-pro-2.png";
import tablet from "../components/images/device-spread/ipad-10.png";
import keyboard from "../components/images/device-spread/keychron-k5-max.png";
import mouse from "../components/images/device-spread/glorious-model-o.png";
import chair from "../components/images/device-spread/koenigsegg-gaming-chair.png";
import "./DeviceSpread.css";

const devices = [
  { id: "laptop", category: "Laptop", name: "Acer Predator Helios 300", subtitle: "Intel Core i7-12700H - RTX 3070 Ti - 16 GB RAM - 1 TB Storage", image: laptop, width: 649, height: 385 },
  { id: "phone", category: "Phone", name: "iPhone 16 Pro", subtitle: "256 GB", image: phone, width: 1080, height: 1350 },
  { id: "watch", category: "Watch", name: "Apple Watch Series 10", subtitle: "Jet Black", image: watch, width: 469, height: 532 },
  { id: "airpods", category: "Audio", name: "AirPods Pro 2", subtitle: "Lightning", image: airpods, width: 545, height: 458 },
  { id: "tablet", category: "Tablet", name: "iPad 10", subtitle: "64 GB", image: tablet, width: 470, height: 531 },
  { id: "keyboard", category: "Keyboard", name: "Keychron K5 Max", subtitle: "Wireless", image: keyboard, width: 500, height: 500 },
  { id: "mouse", category: "Mouse", name: "Glorious Model O", subtitle: "Wired", image: mouse, width: 500, height: 500 },
  { id: "chair", category: "Chair", name: "Razer Enki Pro Koenigsegg Edition", subtitle: "Limited Edition", image: chair, width: 389, height: 641 },
];

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
            <figure className={`device-card device-card--${device.id}`} key={device.id}>
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
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeviceSpread;
