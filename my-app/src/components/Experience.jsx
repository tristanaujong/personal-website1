import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Card from "./Card";
import lockheedLogo from "./images/LM_Logo.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Experience = () => {
  const experienceRef = useRef(null);

  useGSAP(() => {
    const heading = experienceRef.current.querySelector(".experience-text");
    const split = SplitText.create(heading, { type: "chars" });

    const experienceAnimation = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.03,
      paused: true,
      ease: "back.out(1.7)"
    });

    const playTrigger = ScrollTrigger.create({
      trigger: experienceRef.current,
      start: "top 75%",
      onEnter: () => experienceAnimation.restart(),
    });

    const resetTrigger = ScrollTrigger.create({
      trigger: heading,
      start: "top bottom",
      onLeaveBack: () => experienceAnimation.pause(0),
    });

    return () => {
      playTrigger.kill();
      resetTrigger.kill();
      experienceAnimation.kill();
      split.revert();
    };
  }, { scope: experienceRef });

  const cards = [
    {
      title: "LOCKHEED MARTIN",
      description: "Software Engineer Intern",
      img: lockheedLogo,
      year: "2025, 2026",
      hoverColor: "#0f3b61",
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="flex min-h-dvh flex-col">
      <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6 flex-row">
        <h2 className="experience-text font-sf-pro font-bold text-8xl text-stone-900 mb-24 mx-auto">
          MY EXPERIENCE
        </h2>
      </div>
      <div className="flex w-full justify-center px-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            img={card.img}
            year={card.year}
            hoverColor={card.hoverColor}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
