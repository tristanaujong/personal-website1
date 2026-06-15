import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Blurb = () => {
  return (
    <section id="blurb" className="mt-28">
        <div className="flex items-center justify-center">
            <p className="text-stone-900 font-sf-pro text-4xl font-bold">EXPERIENCE</p>
        </div>
    </section>
  )
}

export default Blurb
