const waitForImage = (image, signal) => new Promise((resolve) => {
  const finish = () => {
    image.removeEventListener("load", handleLoad);
    image.removeEventListener("error", finish);
    signal.removeEventListener("abort", finish);
    resolve();
  };

  const handleLoad = () => {
    if (image.naturalWidth > 0 && typeof image.decode === "function") {
      image.decode().catch(() => {}).then(finish);
    } else {
      finish();
    }
  };

  if (signal.aborted) {
    resolve();
    return;
  }

  image.addEventListener("load", handleLoad, { once: true });
  image.addEventListener("error", finish, { once: true });
  signal.addEventListener("abort", finish, { once: true });

  // Lazy images in the first viewport must load while the page is hidden.
  image.loading = "eager";
  if (image.complete) handleLoad();
});

export const waitForPageImages = (container, signal) => {
  const images = [...container.querySelectorAll("img")].filter((image) => {
    if (!image.currentSrc && !image.getAttribute("src") && !image.getAttribute("srcset")) return false;
    if (image.loading !== "lazy") return true;

    const bounds = image.getBoundingClientRect();
    return bounds.bottom > 0 && bounds.top < window.innerHeight &&
      bounds.right > 0 && bounds.left < window.innerWidth;
  });

  return Promise.all(images.map((image) => waitForImage(image, signal)));
};
