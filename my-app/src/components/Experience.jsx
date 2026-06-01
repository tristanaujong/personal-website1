import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Experience = () => {
  return (
    <section id="experience" className="mt-28">
        <div className="flex items-center justify-center">
            <h2 className="text-stone-900 font-sf-pro text-8xl font-bold">EXPERIENCE</h2>
        </div>
    </section>
  )
}

export default Experience