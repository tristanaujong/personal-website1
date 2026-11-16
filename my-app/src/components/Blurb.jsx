import { useContext, useRef } from "react";
import PageReadyContext from "./PageReadyContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Blurb = () => {
  const isPageReady = useContext(PageReadyContext);
  const blurbRef = useRef(null);

  useGSAP(() => {
    if (!isPageReady) return;

    const split = SplitText.create(".blurb-text", { type: "words" });

    gsap.to(split.words, {
      color: "#1c1917",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".blurb-text",
        start: "top 75%",
        end: "center center",
        scrub: true
      }
    });

    return () => split.revert();
  }, { scope: blurbRef, dependencies: [isPageReady], revertOnUpdate: true });

  return (
    <section id="blurb" ref={blurbRef} className="mt-10">
        <div className="mx-auto flex w-full max-w-[96rem] justify-start px-6 2xl:px-6 mb-56">
            <p className="blurb-text w-full lg:w-3/4 font-sf-pro text-5xl font-medium text-stone-900/15 leading-[1.25]">
              I'm a Chinese-Indonesian born and raised in Dallas-Fort Worth. I curate and execute ideas using software
              and technology as my medium to express them. I have an eye for the finest details and
              meticulously plan things out to deliver extraordinary results. Discovering the "why" and "how" of things in this world has
              been a natural trait of my personality, and I will never stop doing that. 
            </p>
        </div>
    </section>
  )
}

export default Blurb
