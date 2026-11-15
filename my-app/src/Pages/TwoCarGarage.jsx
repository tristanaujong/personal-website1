import { useCallback, useEffect, useState } from "react";
import GarageBudgetScene from "../components/GarageBudgetScene";
import Navbar from "../components/Navbar";
import { garageBudgets } from "./twoCarGarageData";

const TwoCarGarage = () => {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = garageBudgets[sceneIndex];

  const navigate = useCallback((direction) => {
    setSceneIndex((current) =>
      Math.max(0, Math.min(garageBudgets.length - 1, current + direction)),
    );
  }, []);

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Warm the next scenes' assets while the first entrance plays.
    garageBudgets.slice(1).forEach((budget) => {
      budget.cars.forEach((car) => {
        [car.image, car.wordmark].forEach((src) => {
          const image = new Image();
          image.src = src;
          image.decode().catch(() => {});
        });
      });
    });
  }, []);

  return (
    <div
      className="two-car-garage-page"
      style={{
        "--garage-background-start": scene.backgroundStart,
        "--garage-background-end": scene.backgroundEnd,
      }}
    >
      <Navbar />
      <GarageBudgetScene
        scene={scene}
        previousBudget={garageBudgets[sceneIndex - 1]?.budget}
        nextBudget={garageBudgets[sceneIndex + 1]?.budget}
        onNavigate={navigate}
      />
      <p className="sr-only" role="status" aria-atomic="true">
        {scene.budget} budget, garage {sceneIndex + 1} of {garageBudgets.length}
      </p>
    </div>
  );
};

export default TwoCarGarage;
