import {ScrollTrigger, SplitText } from "gsap/all"; 
import gsap from 'gsap';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blurb from './components/Blurb';
import Experience from "./components/Experience";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero/>
            <Blurb/>
            <Experience/>
        </main>
    )
}

export default App
