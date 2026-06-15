import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Blurb = () => {
  return (
    <section id="blurb" className="mt-28">
        <div className="mx-auto flex w-full max-w-[96rem] justify-start px-6 2xl:px-6">
            <p className="w-full lg:w-3/4 font-sf-pro text-4xl font-normal text-stone-900 leading-[1.25]">
              I'm a Chinese-Indonesian born and raised in Dallas-Fort Worth. I curate and execute ideas using software
              and technology as my medium to express them. I have an eye for the finest details and
              meticulously plan things out to deliver extraordinary results. Discovering the "why" and "how" of things in this world has
              been a natural trait of my personality, and I will never stop doing that. Currently, I am a student
              at Texas A&M obtaining a bachelor's in Computer Science with a minor in Statistics.
            </p>
        </div>
    </section>
  )
}

export default Blurb
