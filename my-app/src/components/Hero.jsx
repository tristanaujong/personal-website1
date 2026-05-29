import React from 'react'
import heroPicture from './images/hero-picture.png'
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <>
    <section id="hero">
        <div className="mx-auto flex min-h-dvh w-full max-w-[96rem] flex-col items-center justify-center gap-8 px-6 pt-24 2xl:flex-row 2xl:gap-[clamp(4rem,9vw,11rem)] 2xl:px-12 2xl:pt-0">
            <div className="flex w-fit shrink-0 flex-col items-start justify-center">
                <h1 className="whitespace-nowrap font-sf-pro text-[clamp(3rem,13vw,9rem)] font-bold leading-none">
                    TRISTAN-LEE
                </h1>
                <h1 className="-mt-[clamp(0.5rem,1vw,1rem)] whitespace-nowrap font-sf-pro text-[clamp(4.5rem,20vw,13.6rem)] font-bold leading-none">
                    AUJONG
                </h1>
            </div>
            <Tilt
            className="w-[min(70vw,28rem)] max-w-full shrink-0 2xl:w-[clamp(16rem,28vw,28rem)]"
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
    </section>
    </>
  )
}

export default Hero
