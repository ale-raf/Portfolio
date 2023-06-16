const projects = [
    {
        id: 0,
        cover: require("../assets/Booki.png"),
        slug: "Booki-Creez-la-page-daccueil-dune-agence-de-voyage-avec-HTML-et-CSS",
        title: "Booki",
        subtitle: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
        technologies: ["HTML", "CSS"],
        categories: ["Frontend", "React"],
        demands: "intégration complète d’une page web statique conforme à la maquette donnée et dotée d'une interface responsive adaptée aux formats tablette et mobile",
        difficulties: ["suivi logique et cohérent de la maquette fournie", "positionnement des éléments", "format adapté à la taille de l'écran"],
        solutions: ["utilisation de Figma", "Flexbox", "media queries pour gérer l'aspect responsive"],
        repository: 'https://github.com/ale-raf/OpenClassroomsProjet2.git',
        demo: 'https://ale-raf.github.io/OpenClassroomsProjet2/'
    },
    {
        id: 1,
        cover: require("../assets/Sophie_Bluel.png"),
        slug: "Sophie-Bluel-Creez-une-page-web-dynamique-avec-Javascript",
        title: "Sophie Bluel",
        subtitle: "Créez une page web dynamique avec JavaScript",
        technologies: ["JavaScript", "HTML", "CSS"],
        categories: ["Frontend", "JavaScript"],
        demands: "rendu navigateur dynamique avec récupération et affichage des données issues d’une API ; création d’une fenêtre modale et d’un formulaire de connexion côté client",
        difficulties: ["manipulation des éléments du DOM", "gestion des événements utilisateurs", "affichage des données récupérées depuis les requêtes HTTP côté client"],
        solutions: ["méthodes et écouteurs d'événements", "API fetch"],
        repository: 'https://github.com/ale-raf/OpenClassroomsProjet3.git',
        demo: null
    },
    {
        id: 2,
        cover: require("../assets/Nina_Carducci.png"),
        slug: "Nina-Carducci-Debuggez-et-optimisez-un-site-de-photographe",
        title: "Nina Carducci",
        subtitle: "Débuggez et optimisez un site de photographe",
        technologies: ["JavaScript", "HTML", "CSS"],
        categories: ["Frontend", "JavaScript"],
        demands: "débug et optimisation des indices de performance, de référencement et d’accessibilité du site ; rédaction d’un cahier de recette",
        difficulties: ["recherche des bugs présents dans plusieurs fichiers", "traitement des différents facteurs d’optimisation"],
        solutions: ["utilisation de la console et du débogueur du navigateur", "gestion du poids des images et des librairies"],
        repository: 'https://github.com/ale-raf/OpenClassroomsProjet5.git',
        demo: 'https://ale-raf.github.io/OpenClassroomsProjet5/'
    },
    {
        id: 3,
        cover: require("../assets/Kasa.png"),
        slug: "Kasa-Creez-une-application-web-de-location-immobiliere-avec-React",
        title: "Kasa",
        subtitle: "Créez une application web de location immobilière avec React",
        technologies: ["React", "CSS"],
        categories: ["Frontend", "JavaScript", "React"],
        demands: "développement complet d’une application côté client à l’aide de React ; initialisation du projet avec Create React App et configuration du routage de l’application",
        difficulties: ["affichage de plusieurs pages distinctes", "réutilisation d'éléments récurrents", "gestion des erreurs avec affichage d'une page d’erreur"],
        solutions: ["gestion des différentes routes", "utilisation des composants et des props", "affichage condiditionnel"],
        repository: 'https://github.com/ale-raf/OpenClassroomsProjet6.git',
        demo: 'https://ale-raf.github.io/OpenClassroomsProjet6/'
    },
    {
        id: 4,
        cover: require("../assets/Mon_Vieux_Grimoire.png"),
        slug: "Mon-Vieux-Grimoire-Developpez-le-backend-dun-site-de-notation-de-livres",
        title: "Mon Vieux Grimoire",
        subtitle: "Développez le back-end d'un site de notation de livres",
        technologies: ["Node", "Express", "MongoDB"],
        categories: ["Backend", "JavaScript", "Express"],
        demands: "le code côté client est déjà prêt ; la mission est de compléter l’application en réalisant le code côté serveur ; élaboration d’une API avec un modèle logique de données ; stockage sécurisé des données et mise en œuvre des opérations CRUD",
        difficulties: ["vérification du code sans le navigateur", "mise à jour des nouveaux livres ajoutés"],
        solutions: ["utilisation de Thunder Client pour tester les différentes fonctionnalités et opérations depuis le backend", "update pour mettre à jour les nouvelles données"],
        repository: 'https://github.com/ale-raf/OpenClassroomsProjet7.git',
        demo: null
    }
]

export default projects