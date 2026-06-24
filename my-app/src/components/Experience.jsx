import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Experience = () => {
  const experienceRef = useRef(null);

  useGSAP(() => {
    const split = SplitText.create(".experience-text", { type: "chars" });

    const experienceAnimation = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.03,
      paused: true,
      ease: "back.out(1.7)"
    });

    ScrollTrigger.create({
      trigger: experienceRef.current,
      start: "top 75%",
      onEnter: () => experienceAnimation.restart(),
    });

    ScrollTrigger.create({
      trigger: ".experience-text",
      start: "top bottom",
      onLeaveBack: () => experienceAnimation.pause(0),
    });

    return () => split.revert();
  }, { scope: experienceRef });
  return (
    <section id="experience" ref={experienceRef} className="flex min-h-dvh">
      <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6">
        <h2 className="experience-text font-sf-pro font-bold text-8xl text-stone-900">
          MY EXPERIENCE
        </h2>
      </div>
    </section>
  )
}

export default Experience
