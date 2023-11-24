import tailwind from "../assets/icons/Tailwind CSS.png";
import javascript from "../assets/icons/JavaScript.png";
import node from "../assets/icons/Node.js.png";
import mysql from "../assets/icons/MySQL.png";
import react from "../assets/icons/React.png";
import php from "../assets/icons/PHP.png";
import express from "../assets/icons/Express.png";
import mongodb from "../assets/icons/MongoDB.png";
import sass from "../assets/icons/Sass.png";
import html from "../assets/icons/HTML5.png";
import css from "../assets/icons/CSS3.png";

export const projects = [
  {
    id: 0,
    cover: require("../assets/Booki.png"),
    slug: "Booki-Creez-la-page-daccueil-dune-agence-de-voyage-avec-HTML-et-CSS",
    title: "Booki",
    subtitle: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
    technologies: [
      { techno: "HTML", icon: html },
      { techno: "CSS", icon: css },
    ],
    categories: ["Frontend", "React"],
    demands:
      "intégration complète d’une page web statique conforme à la maquette donnée et dotée d'une interface responsive adaptée aux formats tablette et mobile",
    difficulties: [
      "respect fidèle de la maquette",
      "positionnement des éléments sur la page",
      "format de la page adapté à la taille de l'écran",
    ],
    solutions: [
      "utilisation de Figma",
      "Flexbox",
      "media queries pour gérer l'aspect responsive",
    ],
    repository: "https://github.com/ale-raf/OpenClassroomsProjet2.git",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet2/",
  },
  {
    id: 1,
    cover: require("../assets/Sophie_Bluel.png"),
    slug: "Sophie-Bluel-Creez-une-page-web-dynamique-avec-Javascript",
    title: "Sophie Bluel",
    subtitle: "Créez une page web dynamique avec JavaScript",
    technologies: [{ techno: "JavaScript", icon: javascript }],
    categories: ["Frontend", "JavaScript"],
    demands:
      "rendu navigateur dynamique avec récupération et affichage des données issues d’une API ; création d’une fenêtre modale et d’un formulaire de connexion côté client",
    difficulties: [
      "aspect dynamique et interactif de certains éléments de la page",
      "affichage des données récupérées depuis une interface externe (API) côté client",
    ],
    solutions: [
      "gestion des événements utilisateurs avec les méthodes et écouteurs d'événements",
      "réalisation de requêtes HTTP grâce à la méthode API fetch",
    ],
    repository: "https://github.com/ale-raf/OpenClassroomsProjet3.git",
    demo: null,
  },
  {
    id: 2,
    cover: require("../assets/Nina_Carducci.png"),
    slug: "Nina-Carducci-Debuggez-et-optimisez-un-site-de-photographe",
    title: "Nina Carducci",
    subtitle: "Débuggez et optimisez un site de photographe",
    technologies: [{ techno: "JavaScript", icon: javascript }],
    categories: ["Frontend", "JavaScript"],
    demands:
      "débug et optimisation des indices de performance, de référencement et d’accessibilité du site ; rédaction d’un cahier de recette",
    difficulties: [
      "recherche des bugs présents dans plusieurs fichiers",
      "traitement des différents facteurs d’optimisation",
    ],
    solutions: [
      "utilisation de la console et du débogueur du navigateur",
      "gestion du poids des images, des librairies et des scripts",
    ],
    repository: "https://github.com/ale-raf/OpenClassroomsProjet5.git",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet5/",
  },
  {
    id: 3,
    cover: require("../assets/Kasa.png"),
    slug: "Kasa-Creez-une-application-web-de-location-immobiliere-avec-React",
    title: "Kasa",
    subtitle: "Créez une application web de location immobilière avec React",
    technologies: [{ techno: "React", icon: react }],
    categories: ["Frontend", "JavaScript", "React"],
    demands:
      "développement complet d’une application côté client à l’aide de React ; initialisation du projet avec Create React App et configuration du routage de l’application",
    difficulties: [
      "affichage de plusieurs pages distinctes",
      "réutilisation d'éléments récurrents",
      "gestion des erreurs avec affichage d'une page d’erreur dédiée",
    ],
    solutions: [
      "gestion des différentes routes de l'application",
      "utilisation des composants et des props",
      "affichage condiditionnel",
    ],
    repository: "https://github.com/ale-raf/OpenClassroomsProjet6.git",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet6/",
  },
  {
    id: 4,
    cover: require("../assets/Mon_Vieux_Grimoire.png"),
    slug: "Mon-Vieux-Grimoire-Developpez-le-backend-dun-site-de-notation-de-livres",
    title: "Mon Vieux Grimoire",
    subtitle: "Développez le back-end d'un site de notation de livres",
    technologies: [
      { techno: "Node", icon: node },
      { techno: "Express", icon: express },
      { techno: "MongoDB", icon: mongodb },
    ],
    categories: ["Backend", "JavaScript", "Express"],
    demands:
      "finalisation de l’application en réalisant le code côté serveur ; élaboration d’une API avec un modèle logique de données ; stockage sécurisé des données et mise en œuvre des opérations CRUD",
    difficulties: [
      "vérification du code sans le navigateur",
      "mise à jour des nouveaux livres ajoutés par l'utilisateur",
    ],
    solutions: [
      "utilisation de Thunder Client pour tester les différentes fonctionnalités et opérations depuis le backend",
      `méthode "update" pour mettre à jour les nouvelles données`,
    ],
    repository: "https://github.com/ale-raf/OpenClassroomsProjet7.git",
    demo: null,
  },
];
