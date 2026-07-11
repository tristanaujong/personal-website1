import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import WideCard from "./WideCard";
import ProjectModal from "./ProjectModal";
import dbmsguiCover from "./images/dbmsguicover.png";
import dbmsgui3 from "./images/dbmsgui3.jpg";
import dbmsgui2 from "./images/dbmsgui2.jpg";
import tomatoRollCover from "./images/TomatoRollCover.png";
import tomatoRoll1 from "./images/TomatoRoll1.png";
import tomatoRoll2 from "./images/TomatoRoll2.png";
import tomatoRoll3 from "./images/TomatoRoll3.png";
import tomatoRoll4 from "./images/TomatoRoll4.png";
import findayotaCover from "./images/findayotacover.png";
import findayota1 from "./images/findayota1.png";
import findayota2 from "./images/findayota2.png";
import findayota3 from "./images/findayota3.png";
import findayota4 from "./images/findayota4.jpg";
import csharpLogo from "./images/Csharp_Logo.png";
import javascriptLogo from "./images/JavaScript-logo (1).png";
import cssLogo from "./images/csslogo.webp";
import html5Logo from "./images/html5logo.webp";
import pythonLogo from "./images/pythonlogo.webp";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Projects = () => {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    const heading = projectsRef.current.querySelector(".projects-text");
    const cardGrid = projectsRef.current.querySelector(".card-grid");
    const split = SplitText.create(heading, { type: "chars" });

    const projectsAnimation = gsap.from(split.chars, {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.03,
      paused: true,
      ease: "back.out(1.7)"
    });

    const cardItems = gsap.utils.toArray(
      projectsRef.current.querySelectorAll(".projects-card")
    );
    const cardAnimation = gsap.fromTo(
      cardItems,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        paused: true,
        ease: "back.out(1.7)",
      }
    );
    let cardAnimationIsArmed = true;

    const headingPlayTrigger = ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top 75%",
      onEnter: () => projectsAnimation.restart(),
    });

    const cardPlayTrigger = ScrollTrigger.create({
      trigger: cardGrid,
      start: "top 70%",
      onEnter: () => {
        if (cardAnimationIsArmed) {
          cardAnimationIsArmed = false;
          cardAnimation.restart();
        }
      },
    });

    const cardResetObserver = new IntersectionObserver(([entry]) => {
      const isGridBelowViewport =
        !entry.isIntersecting &&
        entry.rootBounds &&
        entry.boundingClientRect.top >= entry.rootBounds.bottom;

      if (isGridBelowViewport) {
        cardAnimation.pause(0);
        cardAnimationIsArmed = true;
      }
    });

    cardResetObserver.observe(cardGrid);

    const headingResetTrigger = ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top bottom",
      onLeaveBack: () => projectsAnimation.pause(0),
    });

    return () => {
      headingPlayTrigger.kill();
      cardPlayTrigger.kill();
      headingResetTrigger.kill();
      cardResetObserver.disconnect();
      projectsAnimation.kill();
      cardAnimation.kill();
      split.revert();
    };
  }, { scope: projectsRef });

  const cards = [
    {
        id: "dbms-gui",
        title: "DBMS_GUI",
        description: "Real-time DBMS monitoring app for Texas A&M's 2026 Formula Electric team. ",
        modalDescription: `DBMS_GUI is a real-time vehicle interface monitoring app built with C# and Avalonia. 
                           It visualizes battery status, temperature, and system faults from CAN messages so the
                           team can understand vehicle health quickly during testing and development.\n\n 
                           Prior to this app, the Distributed Battery Management System (DBMS) team utilized a legacy Java application
                           to carry out diagnostic and monitoring tasks. Over time, the application started showing
                           its limitations, and it became increasingly unstable to use. It also featured a very simple
                           UI that wasn't user-friendly.\n\n To solve this issue, me and another software developer created
                           a new C# application to combat these native issues. I worked on translating the back-end Java code
                           into C# code while my teammate worked on the front-end. Since my teammate was part of the software sub-team
                           and I was a part of the DBMS sub-team, I was responsible for understanding the back-end logic for communicating with the car.\n\n
                           Some of the features I made include temperature and voltage monitoring, fault clearing, config value changes, blackbox integration, sending and
                           receiving CAN messages, decoding and encoding messages, cell balancing monitoring, and a CAN log.\n\n
                           From this project, I learned a great deal about embedded systems and web dev concepts. From dealing with CAN-communication to
                           multi-threading logic with the UI and linking the entire logic chain from a UI element to the on-board
                           DBMS firmware, I was able to get a lot of hands-on experience with these technologies. I also worked with a lot of
                           talented peers, and I am very fortunate to have been a part of A&M's Formula Electric team for the 2025-2026 season.
                           `,
        img: dbmsguiCover,
        images: [dbmsguiCover, dbmsgui3, dbmsgui2],
        year: "2025 - 2026",
        technologies: [{ name: "C#", img: csharpLogo }],
        hoverColor: "#510000"
    },
    {
        id: "tomatoroll",
        title: "TomatoRoll",
        description: " Gamified competitive fitness and financial app for Strava enthusiasts. Hackathon submission for TAMUHack 2026. ",
        modalDescription: `We started this project with a goal in mind: motivating each other to consistently exercise while also adding 
                           in a financial twist. What then came next was an idea that combined competitiveness with fitness tracking - turning 
                           walks and runs into a strategic game where players claim "territory" on a hexagonal grid map, earning points that 
                           can be redeemed for real financial rewards like restaurant discounts. \n\nWe wanted to create something that not only 
                           encourages physical activity, but also offers ways to save money in your local area as an incentive. We also 
                           found the TAMUHack Tomato mascot really cute, and after seeing how funny it looks while rolling around, we 
                           decided to name our app "TomatoRoll".\n\nTomatoRoll is a gamified competitive fitness and financial app that transforms 
                           exercise into an engaging territorial conquest game. Users connect their Strava accounts to track runs and walks, 
                           which are visualized on an interactive hexagonal grid map centered around the Texas A&M University campus. 
                           \n\nEach hex represents a small area of territory that players can claim by physically walking or running through it. 
                           The app awards points for discovering new hexes (100 points each) and capturing territory from other players 
                           (250 points each). These points can be redeemed for discounts at local restaurants through integration with 
                           Capital One's Nessie API, which captures the latest deals in your area. The app also features AI-generated 
                           walking routes of varying difficulty levels using Google's Gemini AI, which optimizes your chances of winning 
                           more territory.\n\n One of the biggest challenges was integrating multiple external APIs - Strava's OAuth flow 
                           for authentication, Gemini AI for generating realistic walking routes, and Capital One's Nessie API for merchant 
                           data. We struggled with the complexity of H3 hex calculations and ensuring accurate territory claiming based 
                           on GPS paths. Real-time map updates and polygon rendering proved tricky, especially with multiple players' 
                           territories overlapping. Along with this, we are currently limited to only one account allowed to utilize the 
                           Strava API, as requesting more accounts to access would require an application process of two weeks. 
                           Regardless, we worked with what we had and was able to manage our development workflow around roadblocks 
                           that popped-up unexpectedly. \n\n This project taught us the intricacies of API integration, from OAuth 
                           flows to handling third-party data securely. We gained deep knowledge of geospatial programming with H3 
                           hexagons and real-time map visualization with Leaflet. The experience highlighted the importance of user 
                           experience design in gamification - small details like color-coded territories and point multipliers 
                           significantly impact engagement. The full-stack development process showed us the challenges of state 
                           management across frontend and backend, and we discovered the power of AI in creating personalized 
                           user experiences. Finally, we learned that combining seemingly unrelated concepts (fitness + finance) 
                           can create truly innovative solutions.`,
        img: tomatoRollCover,
        images: [tomatoRollCover, tomatoRoll1, tomatoRoll2, tomatoRoll3, tomatoRoll4],
        year: "2026",
        technologies: [
            { name: "JavaScript", img: javascriptLogo },
            { name: "CSS", img: cssLogo },
            { name: "HTML5", img: html5Logo },
            { name: "Python", img: pythonLogo },
        ],
        hoverColor: "#510000"
    },
    {
        id: "findayota",
        title: "FindAYota",
        description: " Car-matching app for Toyota customers to find their compatible vehicle. Hackathon submission for TAMUHack 2025. ",
        modalDescription: `FindAYota was built as a Flask web application using Tailwind, HTML, CSS and Python for frontend and backend, 
                           and json files to handle Toyota car information. The calculation of car compatability was done by compiling the 
                           user's inputs on the form, and putting "weights" on certain question inputs. \n\nFor example, body style of the car 
                           was given the most weight in determining the compatability of cars with the user's preferences. In the results 
                           page after submitting the form, the top 3 cars with the highest compatability points were displayed.
                           The financial aspect of FindAYota is built on a Python file that calculates the total amount of money someone would need to finance a car. 
                           The python file then uses credit score information to roughly estimate APR. The APR, total financed amount, and 
                           months financed are used to calculate the estimated monthly pay required. These numbers provided an accurate estimate 
                           close to those on the Toyota website.\n\nDeveloping FindAYota was no easy feat! We encountered many roadblocks mainly 
                           in setting up the backend with the frontend especially with the forms feature. There would be many times where 
                           data would not get relayed to the backend or, whenever the data did get relayed, the results would somehow show 
                           the results for the previous form submitted. However, with hours of debugging and discussion, we were able 
                           to smooth out all of the edge cases that may be encountered in the form. \n\nAnother area where we ran into 
                           some trouble was in deciding how compatability would be calculated. There were many ideas suggested 
                           such as a branch pathway into different cars or filtering through Toyota's cars, however we decided 
                           that using a point system would be the smartest option as we would be able to adjust the weights 
                           of each car trait and effectively be able to give some questions on the form more influence than others.\n\n
                           Through this project, we learned so much about how Flask interacts with the backend and frontend and how 
                           everything ties together. We also learned so much about the different ways in how to calculate compatability 
                           through a form. FindAYota also helped us learn so much on how to create a UI that people enjoy seeing and 
                           interacting with.`,
        img: findayota2,
        images: [findayota1, findayotaCover, findayota2, findayota3, findayota4],
        year: "2025",
        hoverColor: "#510000"
    }
  ]

  return (
    <section id="projects" ref={projectsRef} className="flex min-h-dvh flex-col scroll-mt-26">
        <div className="mx-auto w-full max-w-[96rem] justify-start px-6 2xl:px-6 flex-row">
            <h2 className="projects-text font-sf-pro font-bold text-8xl text-stone-900 mb-16 mx-auto">
            MY PROJECTS
            </h2>
        </div>
        <div className="card-grid flex w-full flex-wrap justify-center gap-6 px-6">
        {cards.map((card) => (
          <div key={card.id} className="projects-card">
            <WideCard
              title={card.title}
              description={card.description}
              img={card.img}
              year={card.year}
              hoverColor={card.hoverColor}
              onClick={() => setSelectedProject(card)}
            />
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects
