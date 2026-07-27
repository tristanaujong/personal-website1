import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import BentoBackButton from "../components/BentoBackButton";
import MyCar1 from "../components/images/MyCar1.jpg";
import MyCar2 from "../components/images/MyCar2.jpg";
import MyCar3 from "../components/images/MyCar3.jpg";
import MyCar4 from "../components/images/MyCar4.jpg";
import MyCar11 from "../components/images/MyCar11.jpg";
import MyCar15 from "../components/images/MyCar15.jpg";
import MyCar13 from "../components/images/MyCar13.jpg";
import MyCar14 from "../components/images/MyCar14.jpg";
import MyCarMileage1 from "../components/images/MyCarMileage1.png";
import MyCarMod1 from "../components/images/MyCarMod1.png";
import MyCarMod2 from "../components/images/MyCarMod2.png";
import MyCarPlace1 from "../components/images/MyCarPlace1.jpg";
import MyCarPlace2 from "../components/images/MyCarPlace2.jpg";
import MyCarPlace3 from "../components/images/MyCarPlace3.jpg";
import MyCarPlace4 from "../components/images/MyCarPlace4.jpg";
import gustsIcon from "../components/images/gusts.png";
import chessIcon from "../components/images/chess.png";
import paintBrushIcon from "../components/images/paint-brush.png";
import shiftIcon from "../components/images/shift.png";
import turboEngineIcon from "../components/images/turbo-engine.png";
import wrenchIcon from "../components/images/wrench.png";


gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const carImages = [
  {
    src: MyCar1,
    alt: "2022 Honda Civic Si front angle",
    className: "md:row-span-2",
  },
  {
    src: MyCar2,
    alt: "2022 Honda Civic Si side profile",
    className: "",
  },
  {
    src: MyCar3,
    alt: "2022 Honda Civic Si detail",
    className: "",
  },
];

const carSpecs = [
  {
    metric: "Turbocharged",
    measurement: "1.5L Inline-4",
    icon: turboEngineIcon,
  },
  {
    metric: "207",
    measurement: "Horsepower",
    icon: chessIcon,
  },
  {
    metric: "195",
    measurement: "lb-ft of Torque",
    icon: wrenchIcon,
  },
  {
    metric: "6-Speed",
    measurement: "Manual Transmission",
    icon: shiftIcon,
  },
  {
    metric: "Blazing Orange Pearl",
    measurement: "Paint Finish",
    icon: paintBrushIcon,
  },
];

const funFacts = [
  {
    title: "Fun Fact #1",
    body: "The Blazing Orange Pearl paint color only exists on the 2022 model year Si. Not sure why Honda decided to discontinue the best color after only a year.",
  },
  {
    title: "Fun Fact #2",
    body: "The 'Si' lettering stands for \"Sport Injected\", which represents Honda's formula for sharpening up a commuter car with desirable performance upgrades.",
  },
  {
    title: "Fun Fact #3",
    body: "While the regular Civic offers an automatic transmission, the Si only comes with a 6-speed manual. And this has been true for all 9 generations of the Si!",
  },
];

const carMods = [
  {
    title: "Mod #1",
    name: "27WON Hybrid Cold Air Intake",
    image: MyCarMod1,
    imageClassName: "h-full w-full object-contain",
  },
  {
    title: "Mod #2",
    name: "IKON Motorsports RS Front Lip",
    image: MyCarMod2,
    imageClassName: "h-full w-full object-contain scale-90",
  },
];

const detailImages = [
  {
    src: MyCar11,
    alt: "2022 Honda Civic Si rear angle",
  },
  {
    src: MyCar15,
    alt: "2022 Honda Civic Si interior view",
  },
  {
    src: MyCar13,
    alt: "2022 Honda Civic Si detail view",
  },
  {
    src: MyCar14,
    alt: "2022 Honda Civic Si close-up view",
  },
];

const carPlaces = [
  {
    src: MyCarPlace1,
    location: "Tail of the Dragon, NC",
  },
  {
    src: MyCarPlace2,
    location: "College Station, TX",
  },
  {
    src: MyCarPlace3,
    location: "Talimena National Scenic Byway, OK",
  },
  {
    src: MyCarPlace4,
    location: "Broken Bow, OK",
  },
];

const MyCar = () => {
  const pageRef = useRef(null);
  const placesViewportRef = useRef(null);
  const placeIsAnimatingRef = useRef(false);
  const [currentPlaceIndex, setCurrentPlaceIndex] = useState(carPlaces.length);
  const [placeSlideOffset, setPlaceSlideOffset] = useState(0);
  const [placeSlideInset, setPlaceSlideInset] = useState(0);
  const [placeTransitionEnabled, setPlaceTransitionEnabled] = useState(true);

  const loopingPlaces = [...carPlaces, ...carPlaces, ...carPlaces];

  useEffect(() => {
    const viewport = placesViewportRef.current;

    if (!viewport) {
      return undefined;
    }

    const updatePlaceSlideOffset = () => {
      const slides = viewport.querySelectorAll("article");

      if (slides.length > 1) {
        setPlaceSlideOffset(slides[1].offsetLeft - slides[0].offsetLeft);
        setPlaceSlideInset(
          Math.max(0, (viewport.clientWidth - slides[0].offsetWidth) / 2)
        );
      }
    };

    updatePlaceSlideOffset();
    window.addEventListener("resize", updatePlaceSlideOffset);

    return () => {
      window.removeEventListener("resize", updatePlaceSlideOffset);
    };
  }, []);

  const scrollPlaces = (direction) => {
    if (placeIsAnimatingRef.current) {
      return;
    }

    placeIsAnimatingRef.current = true;
    setPlaceTransitionEnabled(true);
    setCurrentPlaceIndex((index) => index + direction);
  };

  const handlePlaceTransitionEnd = () => {
    if (currentPlaceIndex < carPlaces.length) {
      setPlaceTransitionEnabled(false);
      setCurrentPlaceIndex((index) => index + carPlaces.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPlaceTransitionEnabled(true);
          placeIsAnimatingRef.current = false;
        });
      });
    } else if (currentPlaceIndex >= carPlaces.length * 2) {
      setPlaceTransitionEnabled(false);
      setCurrentPlaceIndex((index) => index - carPlaces.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPlaceTransitionEnabled(true);
          placeIsAnimatingRef.current = false;
        });
      });
    } else {
      placeIsAnimatingRef.current = false;
    }
  };

  useGSAP(
    () => {
      const heading = pageRef.current.querySelector(".my-car-text");
      const split = SplitText.create(heading, { type: "chars" });

      const headingAnimation = gsap.from(split.chars, {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.03,
        paused: true,
        ease: "back.out(1.7)",
      });

      const headingPlayTrigger = ScrollTrigger.create({
        trigger: pageRef.current,
        start: "top 75%",
        onEnter: () => headingAnimation.restart(),
      });

      const headingResetTrigger = ScrollTrigger.create({
        trigger: pageRef.current,
        start: "top bottom",
        onLeaveBack: () => headingAnimation.pause(0),
      });

      headingAnimation.restart();

      return () => {
        headingPlayTrigger.kill();
        headingResetTrigger.kill();
        headingAnimation.kill();
        split.revert();
      };
    },
    { scope: pageRef }
  );

  return (
    <>
      <section
        ref={pageRef}
        className="flex h-dvh flex-col overflow-hidden px-6 pb-6 pt-24"
      >
        <div className="mx-auto flex h-[calc(100dvh-7.5rem)] min-h-0 w-full max-w-[96rem] flex-col">
          <BentoBackButton />

          <h1 className="my-car-text mb-6 font-sf-pro text-5xl font-bold text-stone-900 md:text-7xl lg:text-7xl">
            My Car: 2022 Honda Civic Si
          </h1>

          <div className="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 md:grid-rows-2">
            {carImages.map((image) => (
              <div
                className={`${image.className} overflow-hidden rounded-3xl bg-stone-200`}
                key={image.alt}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-5">
        <div className="mx-auto grid w-full max-w-[96rem] gap-4 md:grid-cols-5">
          {carSpecs.map((spec) => (
            <div
              className="flex min-h-28 items-center gap-4 rounded-2xl bg-stone-50 p-4"
              key={`${spec.metric}-${spec.measurement}`}
            >
              <div
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-stone-200 p-3"
                aria-hidden="true"
              >
                <img
                  src={spec.icon}
                  alt=""
                  className="size-full object-contain"
                />
              </div>

              <div className="min-w-0 text-left">
                <p className="font-sf-pro text-xl font-bold leading-tight text-stone-900">
                  {spec.metric}
                </p>
                <p className="mt-1 font-sf-pro text-sm font-medium text-stone-500">
                  {spec.measurement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-5 pt-5">
        <div className="mx-auto grid w-full max-w-[96rem] gap-5 md:grid-cols-3">
          {funFacts.map((fact) => (
            <article
              className="flex min-h-52 flex-col justify-between rounded-3xl bg-stone-50 p-6"
              key={fact.title}
            >
              <h2 className="font-sf-pro text-2xl font-bold text-stone-900">
                {fact.title}
              </h2>
              <p className="mt-6 font-sf-pro text-lg font-medium leading-relaxed text-stone-600">
                {fact.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-5">
        <div className="mx-auto grid w-full max-w-[96rem] gap-5 md:grid-cols-2">
          {carMods.map((mod) => (
            <article
              className="flex min-h-28 items-center gap-4 rounded-2xl bg-stone-50 p-4"
              key={mod.title}
            >
              <div className="h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={mod.image}
                  alt=""
                  className={mod.imageClassName}
                />
              </div>

              <div className="min-w-0 text-left">
                <h2 className="font-sf-pro text-xl font-bold leading-tight text-stone-900">
                  {mod.title}
                </h2>
                <p className="mt-1 font-sf-pro text-base font-medium text-stone-500">
                  {mod.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto w-full max-w-[96rem]">
          <article className="grid min-h-28 grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl bg-stone-50 px-8 py-4 md:px-12">
            <p className="font-sf-pro text-3xl font-bold leading-tight text-stone-900 md:text-5xl">
              ODOMETER
            </p>

            <div className="flex items-center justify-center gap-0">
              <img
                src={MyCarMileage1}
                alt=""
                className="h-20 max-w-48 object-contain"
              />
              <img
                src={gustsIcon}
                alt=""
                className="h-12 w-12 object-contain"
              />
            </div>

            <p className="text-right font-sf-pro text-3xl font-bold leading-tight text-stone-900 md:text-5xl">
              49,204 <span className="text-xl md:text-3xl">miles</span>
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid w-full max-w-[96rem] gap-5 md:grid-cols-2">
          <div className="flex min-h-96 items-center rounded-3xl bg-stone-50 p-6 md:p-10">
            <p className="font-sf-pro text-2xl font-medium leading-relaxed text-stone-900 md:text-3xl">
              I just love my Si. It's a perfect daily driver for me and has
              not skipped a beat since day one. The unique orange color is 
              my favorite part of the car, as you simply don't see this
              color Si that much in the wild. The car looks great, the 
              powertrain is fun, the gearbox is sublime, and it just works
              as a daily driver. From casual
              highway drives to spirited backroad touge, this car can do it all.
            </p>
          </div>

          <div className="h-[70dvh] min-h-96 overflow-hidden rounded-3xl bg-stone-200">
            <img
              src={MyCar4}
              alt="2022 Honda Civic Si parked outside"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid h-[70dvh] min-h-96 w-full max-w-[96rem] grid-cols-4 gap-5">
          {detailImages.map((image) => (
            <div
              className="h-full w-full overflow-hidden rounded-3xl bg-stone-200"
              key={image.alt}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-dvh items-center px-6 py-6">
        <div className="mx-auto w-full max-w-[96rem]">
          <h2 className="mb-6 font-sf-pro text-4xl font-bold text-stone-900 md:text-6xl">
            Exploring the U.S.
          </h2>

          <div
            ref={placesViewportRef}
            className="group relative mx-auto h-[calc(100dvh-12rem)] max-h-[34rem] w-full overflow-hidden rounded-3xl"
          >
            <div
              className={`flex h-full gap-5 ${
                placeTransitionEnabled
                  ? "transition-transform duration-500 ease-out"
                  : ""
              }`}
              onTransitionEnd={handlePlaceTransitionEnd}
              style={{
                transform: `translateX(${
                  placeSlideInset - currentPlaceIndex * placeSlideOffset
                }px)`,
              }}
            >
              {loopingPlaces.map((place, index) => (
                <article
                  className="relative aspect-[16/9] h-full shrink-0 overflow-hidden rounded-3xl bg-stone-200"
                  key={`${place.location}-${index}`}
                >
                  <img
                    src={place.src}
                    alt={`2022 Honda Civic Si at ${place.location}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="font-sf-pro text-2xl font-bold text-white md:text-4xl">
                      {place.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous place"
              onClick={() => scrollPlaces(-1)}
              className="group/arrow absolute inset-y-0 left-0 flex w-24 cursor-pointer items-center justify-start bg-gradient-to-r from-white/80 to-transparent pl-5 opacity-0 transition-opacity duration-200 hover:from-white group-hover:opacity-100"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-white/90 font-sf-pro text-4xl font-bold leading-none text-stone-900 shadow-lg transition-transform duration-200 group-hover/arrow:scale-110 group-hover/arrow:bg-white">
                ‹
              </span>
            </button>

            <button
              type="button"
              aria-label="Next place"
              onClick={() => scrollPlaces(1)}
              className="group/arrow absolute inset-y-0 right-0 flex w-24 cursor-pointer items-center justify-end bg-gradient-to-l from-white/80 to-transparent pr-5 opacity-0 transition-opacity duration-200 hover:from-white group-hover:opacity-100"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-white/90 font-sf-pro text-4xl font-bold leading-none text-stone-900 shadow-lg transition-transform duration-200 group-hover/arrow:scale-110 group-hover/arrow:bg-white">
                ›
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyCar;
