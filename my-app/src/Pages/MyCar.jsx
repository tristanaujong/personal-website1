import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import BentoBackButton from "../components/BentoBackButton";
import MyCar1 from "../components/images/MyCar1.jpg";
import MyCar2 from "../components/images/MyCar2.jpg";
import MyCar3 from "../components/images/MyCar3.jpg";


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
  );
};

export default MyCar;
