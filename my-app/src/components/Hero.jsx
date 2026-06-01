import React, { useRef } from 'react'
import heroPicture from './images/hero-picture.png'
import arrowPicture from './images/arrow-down.png'
import Tilt from "react-parallax-tilt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            defaults: {
                ease: 'power3.out',
                duration: 1,
            },
        });

        timeline
            .from('.hero-title-line', {
                opacity: 0,
                y: 80,
                stagger: 0.12,
            })
            .from('.hero-image', {
                opacity: 0,
                y: 50,
                scale: 0.9,
            }, '-=0.65')
            .from('.hero-subtext > *', {
                opacity: 0,
                y: 50,
                stagger: 0.12
            }, '-=0.5');
    }, { scope: heroRef });
    

    return (
    <>
    <section id="hero" ref={heroRef}>
        <div className="min-h-175 text-stone-900 mx-auto flex w-full max-w-[96rem] flex-col items-center justify-center gap-8 px-6 pt-24 2xl:flex-row 2xl:gap-[clamp(4rem,9vw,11rem)] 2xl:px-12 2xl:pt-0">
            <div className="flex w-fit shrink-0 flex-col items-start justify-center">
                <h1 className="hero-title-line whitespace-nowrap font-sf-pro text-[clamp(3rem,13vw,9rem)] font-bold leading-none">
                    TRISTAN-LEE
                </h1>
                <h1 className="hero-title-line -mt-[clamp(0.5rem,1vw,1rem)] whitespace-nowrap font-sf-pro text-[clamp(4.5rem,20vw,13.6rem)] font-bold leading-none">
                    AUJONG
                </h1>
            </div>
            <Tilt
            className="hero-image w-[min(70vw,28rem)] max-w-full shrink-0 2xl:w-[clamp(16rem,28vw,28rem)]"
            tiltAngleXInitial={5}
            tiltAngleYInitial={10}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            scale={1.05}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffffff"
            glarePosition="bottom"
            glareBorderRadius="9999px">
                <img
                    src={heroPicture}
                    alt="hero-picture"
                    className="w-full object-contain"
                ></img>
            </Tilt>
        </div>
        <div className="hero-subtext text-stone-900 flex flex-col items-center justify-center gap-6 mb-8">
            <h2 className="font-sf-pro text-xl md:text-3xl">Rising Senior at Texas A&M pursuing a Bachelor's in Computer Science and Minor in Statistics</h2>
            <h4 className="text-m md:text-l">SCROLL FOR MORE</h4>
            <img src={arrowPicture} className="w-24" ></img>
        </div>
    </section>
    </>
  )
}

export default Hero
