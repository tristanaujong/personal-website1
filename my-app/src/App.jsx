import {ScrollTrigger, SplitText } from "gsap/all"; 
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blurb from './components/Blurb';
import Experience from "./components/Experience";
import SmoothScroll from "./components/SmoothScroll";
import Projects from "./components/Projects";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <SmoothScroll />
            <Navbar />
            <Hero/>
            <Blurb/>
            <Experience/>
            <Projects/>
        </main>
    )
}

export default App
