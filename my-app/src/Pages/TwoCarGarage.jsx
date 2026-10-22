import { useEffect } from "react";
import GarageBudgetScene from "../components/GarageBudgetScene";
import Navbar from "../components/Navbar";
import { garageBudgets } from "./twoCarGarageData";

const TwoCarGarage = () => {
  const scene = garageBudgets[0];

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
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
      <GarageBudgetScene scene={scene} />
    </div>
  );
};

export default TwoCarGarage;
