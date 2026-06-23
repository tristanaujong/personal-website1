import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Experience = () => {
  return (
    <section id="experience" className="flex min-h-dvh">
      <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6">
        <h2 className="font-sf-pro font-bold text-8xl text-stone-900">
          MY EXPERIENCE
        </h2>
      </div>
    </section>
  )
}

export default Experience
