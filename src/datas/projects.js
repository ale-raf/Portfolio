const projects = [
    {
        id: 0,
        cover: require("../assets/Booki.png"),
        slug: "Booki-Creez-la-page-daccueil-dune-agence-de-voyage-avec-HTML-et-CSS",
        title: "Booki",
        subtitle: "Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
        technologies: ["HTML", "CSS"],
        categories: ["Frontend"],
        demands: "intégration complète d’une page web statique conforme à la maquette donnée ; interface responsive (tablette et mobile)",
        difficulties: "suivi logique et cohérent de la maquette fournie ; positionnement des éléments ; format responsive",
        solutions: "utilisation de Figma ; Flexbox ; media queries"
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
        difficulties: "manipulation des éléments du DOM, gestion des événements utilisateurs et affichage des données récupérées depuis les requêtes HTTP côté client",
        solutions: "méthodes et écouteurs d'événements ; API fetch"
    },
    {
        id: 2,
        cover: require("../assets/Nina_Carducci.png"),
        slug: "Nina-Carducci-Debuggez-et-optimisez-un-site-de-photographe",
        title: "Nina Carducci",
        subtitle: "Débuggez et optimisez un site de photographe",
        technologies: ["JavaScript (jQuery)", "HTML", "CSS"],
        categories: ["Frontend", "JavaScript"],
        demands: "débug et optimisation des indices de performance, de référencement et d’accessibilité du site ; rédaction d’un cahier de recette",
        difficulties: "recherche des bugs présents dans plusieurs fichiers et traitement des différents facteurs d’optimisation",
        solutions: "utilisation de la console et du débogueur du navigateur ; gestion du poids des images et des librairies"
    },
    {
        id: 3,
        cover: require("../assets/Booki.png"),
        slug: "Kasa-Creez-une-application-web-de-location-immobiliere-avec-React",
        title: "Kasa",
        subtitle: "Créez une application web de location immobilière avec React",
        technologies: ["React", "CSS"],
        categories: ["Frontend", "JavaScript", "React"],
        demands: "développement complet d’une application côté client à l’aide de React ; initialisation du projet avec Create React App et configuration du routage de l’application",
        difficulties: "affichage de plusieurs pages distinctes, réutilisation d'éléments récurrents, gestion des erreurs avec affichage d'une page d’erreur",
        solutions: "gestion des différentes routes, utilisation des composants et des props, affichage condiditionnel"
    },
    {
        id: 4,
        cover: require("../assets/Booki.png"),
        slug: "Mon-Vieux-Grimoire-Developpez-le-backend-dun-site-de-notation-de-livres",
        title: "Mon Vieux Grimoire",
        subtitle: "Développez le back-end d'un site de notation de livres",
        technologies: ["Node", "Express", "MongoDB"],
        categories: ["Backend", "JavaScript", "Express"],
        demands: "le code côté client est déjà prêt ; la mission est de compléter l’application en réalisant le code côté serveur ; élaboration d’une API avec un modèle logique de données ; stockage sécurisé des données et mise en œuvre des opérations CRUD",
        difficulties: "tests des différentes opérations (Thunder Client) depuis le backend et mise à jour des nouvelles données envoyées (Update)"
    }
]

export default projects