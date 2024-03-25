const worksContent = document.querySelector(".works__wrapper");

const works = [
  {
    title: "Booki",
    description: "Création de la page d'accueil d'une agence de voyage",
    stack: [
      "images/React.png",
      "images/Sass.png",
      "images/HTML5.png",
      "images/CSS3.png",
    ],
    code: "https://github.com/ale-raf/OpenClassroomsProjet2",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet2/",
  },
  {
    title: "Sophie Bluel",
    description: "Création d'une page web dynamique",
    stack: ["images/JavaScript.png", "images/HTML5.png", "images/CSS3.png"],
    code: "https://github.com/ale-raf/OpenClassroomsProjet3",
    demo: null,
  },
  {
    title: "Nina Carducci",
    description: "Débogage et optimisation d'un site de photographe",
    stack: ["images/JavaScript.png", "images/HTML5.png", "images/CSS3.png"],
    code: "https://github.com/ale-raf/OpenClassroomsProjet5",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet5/",
  },
  {
    title: "Kasa",
    description: "Création d'une application web de location immobilière",
    stack: ["images/React.png", "images/CSS3.png"],
    code: "https://github.com/ale-raf/OpenClassroomsProjet6",
    demo: "https://ale-raf.github.io/OpenClassroomsProjet6/",
  },
  {
    title: "Mon vieux grimoire",
    description: "Développement du back-end d'un site de notation de livres",
    stack: ["images/Express.png", "images/MongoDB.png"],
    code: "https://github.com/ale-raf/OpenClassroomsProjet7",
    demo: null,
  },
  {
    title: "GameOn",
    description: "Création d'une landing page avec JavaScript",
    stack: ["images/JavaScript.png", "images/HTML5.png", "images/CSS3.png"],
    code: "https://github.com/ale-raf/OpenClassrooms_GameOn",
    demo: "https://ale-raf.github.io/OpenClassrooms_GameOn",
  },
];

function createWorksCard(work) {
  const div = document.createElement("div");
  const divLinks = document.createElement("div");
  const divStack = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const anchorDemo = document.createElement("a");
  const anchorCode = document.createElement("a");
  for (let stack of work.stack) {
    const img = document.createElement("img");
    img.src = stack;
    divStack.appendChild(img);
  }
  h3.innerText = work.title;
  p.innerText = work.description;
  span.innerText = " - ";
  anchorDemo.innerText = "Démo";
  anchorDemo.href = work.demo;
  anchorDemo.target = "_blank";
  anchorCode.innerText = "Code source";
  anchorCode.href = work.code;
  anchorCode.target = "_blank";
  divLinks.classList.add("works__links");
  div.classList.add("works__card");
  if (work.demo) {
    divLinks.append(anchorDemo, span, anchorCode);
    div.append(h3, p, divLinks, divStack);
  } else {
    div.append(h3, p, anchorCode, divStack);
  }
  worksContent.appendChild(div);
}

for (const work of works) {
  createWorksCard(work);
}
