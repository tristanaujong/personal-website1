import {ScrollTrigger, SplitText } from "gsap/all"; 
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blurb from './components/Blurb';
import Experience from "./components/Experience";
import SmoothScroll from "./components/SmoothScroll";
import Projects from "./components/Projects";
import FunStuff from "./components/FunStuff";
import MyCar from "./Pages/MyCar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    const isFunPage = window.location.pathname === "/fun";
    const isMyCarPage = window.location.pathname === "/fun/my-car";

    if (isMyCarPage) {
        return (
            <main>
                <SmoothScroll />
                <Navbar />
                <MyCar />
            </main>
        )
    }

    if (isFunPage) {
        return (
            <main>
                <SmoothScroll />
                <Navbar />
                <FunStuff />
            </main>
        )
    }

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
