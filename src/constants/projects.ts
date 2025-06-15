import PedalDeck from "/public/images/projects/pedal-deck.png";
import Siroter from "/public/images/projects/siroter-le-delicieux.png";
import NetflixClone from "/public/images/projects/netflix-clone.png";
import MovieZone from "/public/images/projects/moviezone.png";
import HMIWebsite from "/public/images/projects/hmi-website.png";
import HMIPortal from "/public/images/projects/hmi-portal.png";
import SoleMates from "/public/images/projects/solemates.png";

export const projects = [
  {
    projName: "SoleMates",
    site: "https://solematesv1.vercel.app/",
    github: "https://github.com/rda-angeles/siroter-le-delicieux-cafe",
    desc: "SoleMates is a web application that helps users discover and learn about running shoes. It provides detailed information, features, and specifications for various shoe models, making it easier for runners to find the perfect fit based on their needs and preferences. Built with Vite and React, SoleMates delivers a fast, responsive, and user-friendly experience.",
    img: SoleMates,
    techStack: ["React Js", "Tailwind", "TypeScript", "ShadCn UI"],
  },
  {
    projName: "Siroter Le Délicieux Café",
    site: "https://siroter-le-delicieux-cafe.vercel.app/",
    github: "https://github.com/rda-angeles/siroter-le-delicieux-cafe",
    desc: "A frontend design of a coffee shop website that allows users to determine its shop information as well as look into its different services and products that the shop offers.",
    img: Siroter,
    techStack: ["React Js", "Tailwind"],
  },
  {
    projName: "Movie Zone",
    site: "https://movie-zone-nu.vercel.app/",
    github: "https://github.com/rda-angeles/movie-zone",
    desc: "A very informative website that allows users to browse their favorite movies as well as look its movie information.",
    img: MovieZone,
    techStack: ["React Js", "Tailwind"],
  },
  {
    projName: "Netflix Clone",
    site: "https://netflix-clone-chi-neon.vercel.app/",
    github: "https://github.com/rda-angeles/netflix-clone",
    desc: "A netflix clone web application where users can create an account, log in using their created account and saved movies/shows. Created account and saved movie/show is stored in Firebase",
    img: NetflixClone,
    techStack: ["React Js", "Tailwind", "Firebase"],
  },
  {
    projName: "Pedal Deck",
    site: "https://pedal-deck.web.app/home",
    github: "https://github.com/rda-angeles/pedal-deck",
    desc: "A frontend design of an e-commerce website that allows user to browse and buy a bicycle of their choice",
    img: PedalDeck,
    techStack: ["React Js", "Tailwind"],
  },
  {
    projName: "Health Maintenance, Inc. Website",
    site: "https://www.hmi.com.ph/",
    desc: "A company website that helps users know what the company is all about, who are the management team and its services. Also, the website allows users to search their affiliated facilities and physicians.",
    github: "",
    img: HMIWebsite,
    techStack: ["Vue Js", "Node Js", "MySql", "Scss"],
  },
  {
    projName: "Health Maintenance, Inc. Portal",
    site: "https://portal.hmi.com.ph/",
    desc: "A Progressive Web App that allows users to view utilities/transaction history from their previous activity. Users can also view their profile as well as their dependencies.",
    github: "",
    img: HMIPortal,
    techStack: ["Vue Js", "Node Js", "MySql", "Scss"],
  },
];
