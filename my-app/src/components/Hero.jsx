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
    <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
            <linearGradient id="instagram-hover-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#405de6" />
                <stop offset="11.11%" stopColor="#5851db" />
                <stop offset="22.22%" stopColor="#833ab4" />
                <stop offset="33.33%" stopColor="#c13584" />
                <stop offset="44.44%" stopColor="#e1306c" />
                <stop offset="55.56%" stopColor="#fd1d1d" />
                <stop offset="66.67%" stopColor="#f56040" />
                <stop offset="77.78%" stopColor="#f77737" />
                <stop offset="88.89%" stopColor="#fcaf45" />
                <stop offset="100%" stopColor="#ffdc80" />
            </linearGradient>
        </defs>
    </svg>
    <section id="hero" ref={heroRef} className="flex min-h-dvh items-center justify-center">
        <div className="text-stone-900 mx-auto flex w-full max-w-[96rem] flex-col items-center justify-center gap-8 px-6 py-12 2xl:flex-row 2xl:gap-[clamp(4rem,9vw,11rem)] 2xl:px-12">
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
                        <FaLinkedin className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105 hover:text-[#0A66C2]" />
                    </a>
                    <a
                    href="https://github.com/tristanaujong"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="hero-icon"
                    >
                        <FaGithub className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105 hover:text-[#24292e]" />
                    </a>
                    <a
                    href="https://instagram.com/tristan_mahjong"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="hero-icon"
                    >
                        <FaInstagram className="instagram-icon text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105" />
                    </a>
                    <a
                    href="https://open.spotify.com/user/fsnqhbcwp223y9aije3cv0hnh?si=a1bcf073425e4bab"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Spotify"
                    className="hero-icon"
                    >
                        <FaSpotify className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105 hover:text-[#1DB954]" />
                    </a>
                    <a
                    href="https://www.youtube.com/@bobasi22"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Youtube"
                    className="hero-icon"
                    >
                        <FaYoutube className="text-4xl opacity-60 transition-opacity transition-transform duration-200 hover:opacity-100 hover:-translate-y-1 hover:scale-105 hover:text-[#ff0000]" />
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
