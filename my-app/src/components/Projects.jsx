import React from 'react'
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import WideCard from "./WideCard";
import lockheedLogo from "./images/LM_Logo.png";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Projects = () => {
  const projectsRef = useRef(null);

  useGSAP(() => {
    const heading = projectsRef.current.querySelector(".projects-text");
    const cardGrid = projectsRef.current.querySelector(".card-grid");
    const split = SplitText.create(heading, { type: "chars" });

    const projectsAnimation = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.03,
      paused: true,
      ease: "back.out(1.7)"
    });

    const cardItems = gsap.utils.toArray(
      projectsRef.current.querySelectorAll(".projects-card")
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
    let cardAnimationIsArmed = true;

    const headingPlayTrigger = ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top 75%",
      onEnter: () => projectsAnimation.restart(),
    });

    const cardPlayTrigger = ScrollTrigger.create({
      trigger: cardGrid,
      start: "top 70%",
      onEnter: () => {
        if (cardAnimationIsArmed) {
          cardAnimationIsArmed = false;
          cardAnimation.restart();
        }
      },
    });

    const cardResetObserver = new IntersectionObserver(([entry]) => {
      const isGridBelowViewport =
        !entry.isIntersecting &&
        entry.rootBounds &&
        entry.boundingClientRect.top >= entry.rootBounds.bottom;

      if (isGridBelowViewport) {
        cardAnimation.pause(0);
        cardAnimationIsArmed = true;
      }
    });

    cardResetObserver.observe(cardGrid);

    const headingResetTrigger = ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top bottom",
      onLeaveBack: () => projectsAnimation.pause(0),
    });

    return () => {
      headingPlayTrigger.kill();
      cardPlayTrigger.kill();
      headingResetTrigger.kill();
      cardResetObserver.disconnect();
      projectsAnimation.kill();
      cardAnimation.kill();
      split.revert();
    };
  }, { scope: projectsRef });

  const cards = [
    {
        title: "DBMS_GUI",
        description: "Developed and integrated a real-time vehicle interface monitoring app using C# and Avalonia, enabling live visualization of battery status, temperature, and system faults via CAN messages. ",
        img: lockheedLogo,
        year: "2025 - 2026",
        hoverColor: "#0f3b61"
    }
  ]

  return (
    <section id="projects" ref={projectsRef} className="flex min-h-dvh flex-col">
        <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6 flex-row">
            <h2 className="projects-text font-sf-pro font-bold text-8xl text-stone-900 mb-24 mx-auto">
            MY PROJECTS
            </h2>
        </div>
        <div className="card-grid flex w-full flex-wrap justify-center gap-6 px-6">
        {cards.map((card) => (
          <div key={card.title} className="projects-card">
            <WideCard
              title={card.title}
              description={card.description}
              img={card.img}
              year={card.year}
              hoverColor={card.hoverColor}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
