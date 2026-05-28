import React from 'react';
import {ScrollTrigger, SplitText } from "gsap/all"; 
import gsap from 'gsap';
import { Preview } from 'shaders/react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <div className="preview-background" aria-hidden="true">
                <Preview
                    presetId="c2d66d8f-76bd-45bd-8b7c-92e149ed29aa"
                    style={{ width: '100%', height: '100%' }}
                    watermarkText=""
                    watermarkLink=""
                />
            </div>
            <Navbar />
            <Hero/>
        </main>
    )
}

export default App
