import rav4 from "../components/images/2-car-garage/toyota_rav4_limited_7-removebg-preview.png";
import rav4Wordmark from "../components/images/2-car-garage/Toyota_RAV4_wordmark.png";
import prius from "../components/images/2-car-garage/toyota_prius_3-removebg-preview.png";
import priusWordmark from "../components/images/2-car-garage/prius-seeklogo.png";
import civic from "../components/images/2-car-garage/honda_civic_si_coupe_3-removebg-preview.png";
import civicWordmark from "../components/images/2-car-garage/si-seeklogo (1).png";
import nissan350z from "../components/images/2-car-garage/nissan_350z_7-removebg-preview.png";
import nissan350zWordmark from "../components/images/2-car-garage/nissan_350Z (1).png";

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
  {
    id: "20k",
    budget: "$20k",
    backgroundStart: "#dd0101",
    backgroundEnd: "#aa0000",
    textColor: "#ffffff",
    cars: [
      {
        id: "civic-si",
        name: "2008 Honda Civic Si",
        details: "Used - 92k miles - $12,500",
        image: civic,
        imageWidth: 752,
        imageHeight: 332,
        imageAlt: "Silver 2008 Honda Civic Si coupe, front three-quarter view",
        wordmark: civicWordmark,
        wordmarkWidth: 682,
        wordmarkHeight: 682,
        wordmarkAspectRatio: "2.4",
      },
      {
        id: "350z",
        name: "2006 Nissan 350Z",
        details: "Used - 149k miles - $7,500",
        image: nissan350z,
        imageWidth: 773,
        imageHeight: 323,
        imageAlt: "Silver 2006 Nissan 350Z, front three-quarter view",
        wordmark: nissan350zWordmark,
        wordmarkWidth: 801,
        wordmarkHeight: 143,
      },
    ],
    description:
      "With a $20k budget, I’d find an 8th gen Civic Si Coupe with good maintenance records and decent mileage. It’s regarded as one of the best generations for the Si due to its K20 VTEC engine and would work for a fun daily. With the leftover money, I found a 2006 350Z for $7.5k, which is pretty sweet. Will it need work? Yes, but I’ve always wanted a 350Z!",
  },
];
