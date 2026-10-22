import rav4 from "../components/images/2-car-garage/toyota_rav4_limited_7-removebg-preview.png";
import rav4Wordmark from "../components/images/2-car-garage/Toyota_RAV4_wordmark.png";
import prius from "../components/images/2-car-garage/toyota_prius_3-removebg-preview.png";
import priusWordmark from "../components/images/2-car-garage/prius-seeklogo.png";

// Each budget uses the same scene. Add its colors, cars, and copy here.
export const garageBudgets = [
  {
    id: "10k",
    budget: "$10k",
    backgroundStart: "#d9d9d9",
    backgroundEnd: "#737372",
    textColor: "#ffffff",
    cars: [
      {
        id: "rav4",
        name: "2009 Toyota RAV4 V6",
        details: "Used - 202k miles - $5,995",
        image: rav4,
        imageWidth: 677,
        imageHeight: 368,
        imageAlt: "Silver 2009 Toyota RAV4 V6, front three-quarter view",
        wordmark: rav4Wordmark,
        wordmarkWidth: 1000,
        wordmarkHeight: 166,
      },
      {
        id: "prius",
        name: "2007 Toyota Prius",
        details: "Used - 169k miles - $3,999",
        image: prius,
        imageWidth: 698,
        imageHeight: 357,
        imageAlt: "Silver 2007 Toyota Prius, front three-quarter view",
        wordmark: priusWordmark,
        wordmarkWidth: 750,
        wordmarkHeight: 99,
      },
    ],
    description:
      "With a $10k budget, my focus would be on something that could get me from A to B without being a money pit. This brings me to Toyota, specifically the V6 RAV4 and Prius. The V6 RAV4 was actually the fastest car offered by Toyota from 2006 - 2013, with a 0-60 time of 5.6 seconds. And the Prius is a Prius, dare I say more?",
  },
];
