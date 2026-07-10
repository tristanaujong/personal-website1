import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      lerp: 0.07,
      stopInertiaOnNavigate: true,
    });
    window.lenis = lenis;

    const unsubscribeScroll = lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      unsubscribeScroll();
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      if (window.lenis === lenis) {
        delete window.lenis;
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
