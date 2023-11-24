import {
  faCode,
  faServer,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

import tailwind from "../assets/icons/Tailwind CSS.png";
import javascript from "../assets/icons/JavaScript.png";
import node from "../assets/icons/Node.js.png";
import mysql from "../assets/icons/MySQL.png";
import react from "../assets/icons/React.png";
import php from "../assets/icons/PHP.png";
import express from "../assets/icons/Express.png";
import mongodb from "../assets/icons/MongoDB.png";
import photoshop from "../assets/icons/Adobe Photoshop.png";
import figma from "../assets/icons/Figma.png";
import github from "../assets/icons/GitHub.png";
import sass from "../assets/icons/Sass.png";

export const skillsList = [
  {
    icon: faCode,
    title: "Front-end",
    items: [
      { techno: "JavaScript", icon: javascript },
      { techno: "React", icon: react },
      { techno: "Tailwind", icon: tailwind },
      { techno: "SCSS", icon: sass },
    ],
  },
  {
    icon: faServer,
    title: "Back-end",
    items: [
      { techno: "Node", icon: node },
      { techno: "Express", icon: express },
      { techno: "MongoDB", icon: mongodb },
      { techno: "PHP", icon: php },
      { techno: "MySQL", icon: mysql },
    ],
  },
  {
    icon: faScrewdriverWrench,
    title: "Outils",
    items: [
      { techno: "Git & Github", icon: github },
      { techno: "Figma", icon: figma },
      { techno: "Photoshop", icon: photoshop },
    ],
  },
];
