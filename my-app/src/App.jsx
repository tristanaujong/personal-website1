import { lazy, Suspense, useEffect, useState } from "react";
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
import SpottedCars from "./Pages/SpottedCars";
import DreamCars from "./Pages/DreamCars";
import DeviceSpread from "./Pages/DeviceSpread";
import PlacesVisited from "./Pages/PlacesVisited";
import PageTransition from "./components/PageTransition";

const DiecastCollection = lazy(() => import("./Pages/DiecastCollection"));

gsap.registerPlugin(ScrollTrigger, SplitText);

const getCurrentRoute = () => {
    const hashRoute = window.location.hash.replace(/^#/, "");

    const route = hashRoute || window.location.pathname;

    if (["/fun/dream-cars", "/dream-cars", "dream-cars", "/fun/two-car-garage", "/two-car-garage", "two-car-garage"].includes(route)) {
        return "/fun/dream-cars";
    }

    if (["/fun/diecast-collection", "/diecast-collection", "diecast-collection"].includes(route)) {
        return "/fun/diecast-collection";
    }

    if (["/fun/device-spread", "/device-spread", "device-spread"].includes(route)) {
        return "/fun/device-spread";
    }

    if (["/fun/places-i-visited", "/places-i-visited", "places-i-visited"].includes(route)) {
        return "/fun/places-i-visited";
    }

    return route.startsWith("/") ? route : "/";
};

const PageContent = ({ currentRoute }) => {
    const isFunPage = currentRoute === "/fun";
    const isMyCarPage = currentRoute === "/fun/my-car";
    const isSpottedCarsPage = currentRoute === "/fun/spotted-cars";
    const isDreamCarsPage = currentRoute === "/fun/dream-cars";

    if (currentRoute === "/fun/diecast-collection") {
        return (
            <main className="diecast-route">
                <SmoothScroll />
                <Navbar />
                <Suspense fallback={<div className="min-h-dvh" role="status" aria-label="Loading Diecast Collection" />}>
                    <DiecastCollection />
                </Suspense>
            </main>
        );
    }

    if (isDreamCarsPage) {
        return (
            <main className="dream-cars-route">
                <DreamCars />
            </main>
        )
    }

    if (currentRoute === "/fun/device-spread") {
        return (
            <main className="device-spread-route">
                <SmoothScroll />
                <Navbar />
                <DeviceSpread />
            </main>
        );
    }

    if (currentRoute === "/fun/places-i-visited") {
        return (
            <main className="places-route">
                <SmoothScroll />
                <Navbar />
                <PlacesVisited />
            </main>
        );
    }

    if (isMyCarPage || isSpottedCarsPage) {
        return (
            <main>
                <SmoothScroll />
                <Navbar />
                {isSpottedCarsPage ? <SpottedCars /> : <MyCar />}
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

const App = () => {
    const [currentRoute, setCurrentRoute] = useState(getCurrentRoute);

    useEffect(() => {
        const updateCurrentRoute = () => setCurrentRoute(getCurrentRoute());
        window.addEventListener("hashchange", updateCurrentRoute);
        window.addEventListener("popstate", updateCurrentRoute);

        return () => {
            window.removeEventListener("hashchange", updateCurrentRoute);
            window.removeEventListener("popstate", updateCurrentRoute);
        };
    }, []);

    return (
        <PageTransition
            key={currentRoute}
            waitForAssets={currentRoute === "/fun/diecast-collection" ? ["diecast-model"] : []}
        >
            <PageContent currentRoute={currentRoute} />
        </PageTransition>
    );
};

export default App
