import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import BentoBackButton from "../components/BentoBackButton";
import MyCar1 from "../components/images/MyCar1.jpg";
import MyCar2 from "../components/images/MyCar2.jpg";
import MyCar3 from "../components/images/MyCar3.jpg";
import MyCar4 from "../components/images/MyCar4.jpg";
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

const MyCar = () => {
  const pageRef = useRef(null);

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

      <section className="px-6 pb-24 pt-5">
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

      <section className="px-6 pb-24">
        <div className="mx-auto grid w-full max-w-[96rem] gap-5 md:grid-cols-2">
          <div className="flex min-h-96 items-center rounded-3xl bg-stone-50 p-6 md:p-10">
            <p className="font-sf-pro text-2xl font-medium leading-relaxed text-stone-900 md:text-3xl">
              I just love my Si. It's a perfect daily driver for me and has
              not skipped a beat since day one. The unique orange color is 
              my favorite part of the car, as you simply don't see this
              color Si that much in the wild. The car looks great, the 
              powertrain is fun, the gearbox is sublime, and it just works
              as a daily driver. It seats 5, has Apple CarPlay, a Bose sound system,
              and I can sit in the front bucket seats all day comfortably. From casual
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
    </>
  );
};

export default MyCar;
