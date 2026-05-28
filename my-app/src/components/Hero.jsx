import React from 'react'
import heroPicture from './images/hero-picture.png'

const Hero = () => {
  return (
    <>
    <section id="hero">
        <div className="mx-auto flex min-h-dvh w-fit flex-row items-center justify-center gap-36 px-8">
            <div className="flex flex-col items-start justify-center">
                <h1 className="font-sf-pro text-[9rem] font-bold leading-none">
                    TRISTAN-LEE
                </h1>
                <h1 className="-mt-4 font-sf-pro text-[13.6rem] font-bold leading-none">
                    AUJONG
                </h1>
            </div>
            <img
                src={heroPicture}
                alt="hero-picture"
                className="translate-y-10 w-[35vw] max-w-md flex-shrink-0 object-contain"
            ></img>
        </div>
    </section>
    </>
  )
}

export default Hero
