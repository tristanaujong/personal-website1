import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Card from "./Card";
import lockheedLogo from "./images/LM_Logo.png";
import fsaeLogo from "./images/FSAE_Logo.png";
import taoLogo from "./images/TAO_Logo.png";
import icodeLogo from "./images/iCode_Logo.png";
import tamuLogo from "./images/tamu_Logo.png";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Experience = () => {
  const experienceRef = useRef(null);

  useGSAP(() => {
    const heading = experienceRef.current.querySelector(".experience-text");
    const cardGrid = experienceRef.current.querySelector(".card-grid");
    const split = SplitText.create(heading, { type: "chars" });

    const experienceAnimation = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.03,
      paused: true,
      ease: "back.out(1.7)"
    });

    const cardItems = gsap.utils.toArray(
      experienceRef.current.querySelectorAll(".experience-card")
    );
    const cardAnimation = gsap.fromTo(
      cardItems,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        paused: true,
        ease: "back.out(1.7)",
      }
    );

    const headingPlayTrigger = ScrollTrigger.create({
      trigger: experienceRef.current,
      start: "top 75%",
      onEnter: () => experienceAnimation.restart(),
    });

    const cardPlayTrigger = ScrollTrigger.create({
      trigger: experienceRef.current,
      start: "top 40%",
      onEnter: () => cardAnimation.restart(),
    });

    const headingResetTrigger = ScrollTrigger.create({
      trigger: experienceRef.current,
      start: "top bottom",
      onLeaveBack: () => experienceAnimation.pause(0),
    });

    const cardResetTrigger = ScrollTrigger.create({
      trigger: cardGrid,
      start: "top bottom",
      onLeaveBack: () => cardAnimation.pause(0),
    });

    return () => {
      headingPlayTrigger.kill();
      cardPlayTrigger.kill();
      headingResetTrigger.kill();
      cardResetTrigger.kill();
      experienceAnimation.kill();
      cardAnimation.kill();
      split.revert();
    };
  }, { scope: experienceRef });

  const cards = [
    {
      title: "LOCKHEED MARTIN",
      description: "Software Engineer Intern",
      img: lockheedLogo,
      year: "2025, Present",
      hoverColor: "#0f3b61",
      link: "https://www.lockheedmartin.com",
    },
    {
      title: "ENGR TAO",
      description: "President | prev. VP | prev. Software Engineer Intern",
      img: taoLogo,
      year: "2024-Present",
      hoverColor: "#510000",
      link: "https://engrtao.tech/",
    },
    {
      title: "TEXAS A&M",
      description: "Computer Science Student",
      img: tamuLogo,
      year: "2023-Present",
      hoverColor: "#510000",
      link: "https://engineering.tamu.edu/cse/index.html",
    },
    {
      title: "TEXAS A&M FSAE",
      description: "Software Developer",
      img: fsaeLogo,
      year: "2025-2026",
      hoverColor: "#000000",
      link: "https://tamuformulaelectric.com/",
    },
    {
      title: "ICODE",
      description: "Technical Lead",
      img: icodeLogo,
      year: "2024",
      hoverColor: "#000000",
      link: "https://icodeschool.com/southlake108/",
    },
  ];

  return (
    <section id="experience" ref={experienceRef} className="flex min-h-dvh flex-col">
      <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6 flex-row">
        <h2 className="experience-text font-sf-pro font-bold text-8xl text-stone-900 mb-24 mx-auto">
          MY EXPERIENCE
        </h2>
      </div>
      <div className="card-grid flex w-full flex-wrap justify-center gap-6 px-6">
        {cards.map((card) => (
          <div key={card.title} className="experience-card">
            <Card
              title={card.title}
              description={card.description}
              img={card.img}
              year={card.year}
              hoverColor={card.hoverColor}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
