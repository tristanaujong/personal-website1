import { useCallback, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageReadyContext, { PageLoadContext } from "./PageReadyContext";
import { waitForPageImages } from "./waitForPageImages";
import "./PageTransition.css";

const PageTransition = ({ children, waitForAssets = [] }) => {
  const contentRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  // Declare requirements before lazy pages mount so a fast image/font load
  // cannot reveal the page before its 3D viewer even starts loading.
  const [pendingAssets, setPendingAssets] = useState(() => new Set(waitForAssets));
  const markAssetReady = useCallback((asset) => {
    setPendingAssets((current) => {
      if (!current.has(asset)) return current;
      const remaining = new Set(current);
      remaining.delete(asset);
      return remaining;
    });
  }, []);

  useEffect(() => {
    if (isReady) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const lenis = window.lenis;

    root.style.overflow = "hidden";
    lenis?.stop();
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    return () => {
      root.style.overflow = previousOverflow;
      if (window.lenis === lenis) lenis?.start();
    };
  }, [isReady]);

  useEffect(() => {
    if (pendingAssets.size > 0) return;

    const controller = new AbortController();
    let finished = false;

    const release = () => {
      window.clearTimeout(timeout);
      controller.abort();
    };

    const reveal = () => {
      if (finished) return;
      finished = true;
      release();
      setIsReady(true);
    };

    // Model loading has its own error/timeout handling. Start this fallback
    // only after required assets settle, then scan the mounted lazy page's images.
    const timeout = window.setTimeout(reveal, 15000);
    Promise.allSettled([
      waitForPageImages(contentRef.current, controller.signal),
      document.fonts?.ready,
    ]).then(reveal);

    return () => {
      if (finished) return;
      finished = true;
      release();
    };
  }, [pendingAssets]);

  useEffect(() => {
    if (!isReady) return;

    const anchor = document.getElementById(window.location.hash.slice(1));
    anchor?.scrollIntoView({ behavior: "instant" });
    ScrollTrigger.refresh();
  }, [isReady]);

  return (
    <PageLoadContext.Provider value={markAssetReady}>
      <PageReadyContext.Provider value={isReady}>
        <div
          ref={contentRef}
          className="page-transition__content"
          data-ready={isReady}
          aria-busy={!isReady}
          aria-hidden={!isReady}
          inert={!isReady}
        >
          {children}
        </div>
        <div
          className="page-loader"
          data-ready={isReady}
          role="status"
          aria-live="polite"
          aria-hidden={isReady}
        >
          <span className="page-loader__spinner" aria-hidden="true" />
          <span className="page-loader__label">Loading</span>
        </div>
      </PageReadyContext.Provider>
    </PageLoadContext.Provider>
  );
};

export default PageTransition;
