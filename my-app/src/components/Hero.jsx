import React, { useRef } from 'react'
import heroPicture from './images/hero-picture.png'
import arrowPicture from './images/arrow-down.png'
import Tilt from "react-parallax-tilt";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
            .from('.hero-icon', {
                opacity: 0,
                y: 80,
                scale: 0.9,
                stagger: 0.1,
            }, '-=0.75')
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
                <h2 className="hero-title-line font-sf-pro text-m md:text-xl">
                    Turning curiosity into elements of fruition by trusting the process.
                </h2>
                <div className="hero-icons-wrapper flex gap-4 mt-6 text-stone-900">
                    <a
                    href="https://www.linkedin.com/in/tristan-lee-aujong/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="hero-icon"
                    >
                        <FaLinkedin className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                    <a
                    href="https://github.com/tristanaujong"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hero-icon"
                    >
                        <FaGithub className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                    <a
                    href="https://instagram.com/tristan_mahjong"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hero-icon"
                    >
                        <FaInstagram className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                    <a
                    href="https://open.spotify.com/user/fsnqhbcwp223y9aije3cv0hnh?si=a1bcf073425e4bab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hero-icon"
                    >
                        <FaSpotify className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                    <a
                    href="https://www.youtube.com/@bobasi22"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hero-icon"
                    >
                        <FaYoutube className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                </div>
            </div>
            <div className="hero-image w-[min(70vw,28rem)] max-w-full shrink-0 2xl:w-[clamp(16rem,28vw,28rem)]">
                <Tilt
                className="w-full"
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
                glareBorderRadius="20px">
                    <img
                        src={heroPicture}
                        alt="hero-picture"
                        className="w-full object-contain"
                    ></img>
                </Tilt>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
