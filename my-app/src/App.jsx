import { useEffect, useState } from "react";
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

const getCurrentRoute = () => {
    const hashRoute = window.location.hash.replace(/^#/, "");

    return hashRoute || window.location.pathname;
};

const App = () => {
    const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);
    const isFunPage = currentRoute === "/fun";
    const isMyCarPage = currentRoute === "/fun/my-car";

    useEffect(() => {
        const updateCurrentRoute = () => {
            setCurrentRoute(getCurrentRoute());
        };

        window.addEventListener("hashchange", updateCurrentRoute);
        window.addEventListener("popstate", updateCurrentRoute);

        return () => {
            window.removeEventListener("hashchange", updateCurrentRoute);
            window.removeEventListener("popstate", updateCurrentRoute);
        };
    }, []);

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
