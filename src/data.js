// CONTACT Media
// import contactmeGallery from "../src/assets/linkImg/contactLink.png";

// Reservia Media
import reserviaLogo from "../src/assets/logo/reservia.png";
import reserviaGallery from "../src/assets/linkImg/reserviaLink.png";
// import reserviaIFrame from "../src/assets/media/reservia/frame-Reservia.png";
import reserviaDesktop from "../src/assets/media/reservia/imageA.Reservia.jpg";
import reserviaTablet from "../src/assets/media/reservia/imageB.Reservia.jpg";
import reserviaMobile from "../src/assets/media/reservia/imageC.Reservia.jpg";

// OhMyFood Media
import ohmyfoodLogo from "../src/assets/logo/ohmyfood.png";
import ohmyfoodGallery from "../src/assets/linkImg/ohmyfood.png";
// import ohmyfoodIFrame from "../src/assets/media/ohmyfood/frame-Ohmyfood.png";
import ohmyfoodDesktop from "../src/assets/media/ohmyfood/imageA.Ohmyfood.jpg";
import ohmyfoodTablet from "../src/assets/media/ohmyfood/imageB.Ohmyfood.jpg";
import ohmyfoodMobile from "../src/assets/media/ohmyfood/imageC.Ohmyfood.jpg";

// GameOn Media
import gameonLogo from "../src/assets/logo/gameOn.png";
import gameonGallery from "../src/assets/linkImg/gameonLink.png";
// import gameonIFrame from "../src/assets/media/gameon/frame-Gameon.png";
import gameonDesktop from "../src/assets/media/gameon/imageA.GameOn.jpg";
import gameonTablet from "../src/assets/media/gameon/imageB.GameOn.jpg";
import gameonMobile from "../src/assets/media/gameon/imageC.GameOn.jpg";

// Fisheye Media
import fisheyeLogo from "../src/assets/logo/fisheye.png";
import fisheyeGallery from "../src/assets/linkImg/fisheyeLink.png";
// import fisheyeIFrame from "../src/assets/media/fisheye/frame-Fisheye.png";
import fisheyeDesktop from "../src/assets/media/fisheye/imageA.Fisheye.jpg";
import fisheyeTablet from "../src/assets/media/fisheye/imageB.Fisheye.jpg";
import fisheyeMobile from "../src/assets/media/fisheye/imageC.Fisheye.jpg";

// Les petits plats Media
import lespetitsplatsLogo from "../src/assets/logo/lespetitsplats.svg";
import lespetitsplatsGallery from "../src/assets/linkImg/lespetitsplatsLink.png";
// import lespetitsplatsIFrame from "../src/assets/media/lespetitsplats/frame-Lespetitsplats.png";
import lespetitsplatsDesktop from "../src/assets/media/lespetitsplats/imageA.FLespetitsplats.jpg";
import lespetitsplatsTablet from "../src/assets/media/lespetitsplats/imageB.FLespetitsplats.jpg";

// Learn@Home Media
import learnhomelogo from "../src/assets/logo/learnhome.png";
import learnhomeGallery from "../src/assets/linkImg/learnmoreLink.png";
// import learnhomeIFrame from "../src/assets/media/learnhome/frame-learnhome.png";
import learnhomeDesktop from "../src/assets/media/learnhome/imageA.learnhome.jpg";
import learnhomeTablet from "../src/assets/media/learnhome/imageB.learnhome.jpg";
import learnhomeMobile from "../src/assets/media/learnhome/imageC.learnhome.jpg";

// Kasa Media
import kasalogo from "../src/assets/logo/kasa.png";
import kasaGallery from "../src/assets/linkImg/kasaLink.png";
// import kasaIFrame from "../src/assets/media/kasa/frame-Kasa.png";
import kasaDesktop from "../src/assets/media/kasa/imageA.Kasa.jpg";
import kasaTablet from "../src/assets/media/kasa/imageB.Kasa.jpg";
import kasaMobile from "../src/assets/media/kasa/imageC.Kasa.jpg";

// Sportsee Media
import sportseelogo from "../src/assets/logo/sportsee.png";
import sportseeGallery from "../src/assets/linkImg/sportseeLink.png";
// import sportseeIFrame from "../src/assets/media/sportsee/frame-Sportsee.png";
import sportseeDesktop from "../src/assets/media/sportsee/imageA.Sportsee.jpg";
import sportseeTablet from "../src/assets/media/sportsee/imageB.Sportsee.jpg";
import sportseeMobile from "../src/assets/media/sportsee/imageC.Sportsee.jpg";

export const dataList = [{
        id: "001",
        name: "Reservia",
        logo: reserviaLogo,
        source: reserviaGallery,
        size: "small",
        entreprise: "Reservia est une petite entreprise qui propose un outil de planification pour les vacances.",
        subject1: `Le site de Reservia permet à ses utilisateurs de trouver des hébergements et des activités dans un large choix de ville, 
            en ayant la possibilité de filtrer ces hébergements par thématique, par ambiance  ou selon le budget.`,
        subject2: `Un nouveau design basé sur les principes du Material Design vient d'être proposé par Loïc, designer UI.`,
        objectif: `Mon travail sur ce projet, était de réaliser un site web responsive en suivant la maquette réalisée par Loïc.
            La contrainte de ce projet etait qu'il devait être réalisé en utilisant uniquement HTML et CSS.`,
        realisation: `Le parcours utilisateur commence par l'affichage de la page d'accueil de Reservia, qui propose des hébergements 
            et des activités. Depuis cette page d'accueil, l'utilisateur pourra par la suite faire une saisie dans la barre de recherche 
            pour trouver un hébergement dans la ville souhaitée, puis affiner sa recherche en utilisant les filtres proposés. Les liens 
            dans le menu sont des ancres qui mènent aux sections de la page.`,
        pictures: [reserviaDesktop, reserviaTablet, reserviaMobile],
        tagsTechno: ["html", "css"],
        tagsSkills: ["maquette", "responsive", "versionning"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_2_06052021",
        nameLinkApercu: "La page web",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_2_06052021/"
    },
    {
        id: "002",
        name: "Ohmyfood!",
        logo: ohmyfoodLogo,
        source: ohmyfoodGallery,
        size: "large",
        entreprise: "Ohmyfood! est une jeune startup qui voudrait s'imposer sur le marché de la restauration.",
        subject1: `Cette entreprise de commande de repas en ligne permet aux utilisateurs de composer leur propre menu 
                et de réduire leur temps d'attente dans les restaurants car leur menu est préparé à l'avance.`,
        subject2: `En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que 
                les plats soient prêts à leur arrivée. Finis les temps d'attente au restaurant !`,
        objectif: `L'objectif est de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques.
                Ohmyfood! souhaite se positionner sur un marché de niche avec les restaurants luxueux des villes
                dans lesquelles ils sont établis. 
                Souhaitant être identifiée comme une entreprise qui propose des services haut de gamme, l'équipe a réalisé une maquette 
                et des animations CSS avancées qui ont su respecter cette demande.`,
        realisation: `Le parcours utilisateur commence par l'affichage d'un spinner que j'ai créé en reprenant l'ADN de la marque. 
                Puis direction la page d'accueil qui offre la possibilité de choisir les menus de 4 restaurants parisiens. Une fois 
                le choix du restaurant réalisé, l'utilisateur peut alors composer son menu en sélectionnant les différentes propositions 
                dans les entrées, les plats et les desserts. À chaque sélection faite par l'utilisateur, une animation CSS marque le choix.`,
        pictures: [ohmyfoodDesktop, ohmyfoodTablet, ohmyfoodMobile],
        tagsTechno: ["html", "css"],
        tagsSkills: ["maquette", "responsive", "versionning", "animationCSS", "navigation"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_3_06052021",
        nameLinkApercu: "La page web",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_3_06052021/"
    },
    {
        id: "003",
        name: "Game On",
        logo: gameonLogo,
        source: gameonGallery,
        size: "small",
        entreprise: "GameOn est une entreprise spécialisée dans les conférences et les concours de jeux.",
        subject1: `Cette PME spécialisée dans le domaine du jeu vidéo, propose aux utilisateurs dans cette landing page,
                de s'inscrire au Marathon national du jeu vidéo via un formulaire.`,
        subject2: ` `,
        objectif: `Après avoir reçu des commentaires négatifs de la part de certains utilisateurs, la nouvelle page d'accueil ainsi que le formulaire
                d'inscription aux concours ont été simplifiées.
                Mon travail dans ce projet consistait d'abord à vérifier et tester le code déja réalisé et à ajouter une fonctionnalité encore manquante,
                le formulaire d'inscription.`,
        realisation: `Le parcours utilisateur commence par l' affichage de la landing page qui propose aux utilisateurs/gameurs de s'inscrire
                au concours.
                Le bouton 'S'inscrire' ouvre une fenêtre pop up qui est le formulaire d'inscription.
                Plusieurs champs de saisie sont présents comme du texte, une date, des boutons radio et des cases à cocher. Avant la validation du formulaire, tous les champs
                doivent être correctement remplis.
                La barre de navigation n'a pas encore été implémentée.`,
        pictures: [gameonDesktop, gameonTablet, gameonMobile],
        tagsTechno: ["html", "css", "javascript"],
        tagsSkills: ["responsive", "versionning", "formulaire", "navigation", "landingPage"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_4_06052021",
        nameLinkApercu: "La page web",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_4_06052021/"
    },
    {
        id: "004",
        name: "Fisheye",
        logo: fisheyeLogo,
        source: fisheyeGallery,
        size: "large",
        entreprise: "FishEye est un site web qui permet aux photographes freelances de présenter une sélection de leurs meilleurs travaux.",
        subject1: `Fisheye propose aux photographes une plateforme unique pour exposer leur travail
                et permet aux visiteurs de les contacter pour des événements ou des tirages.`,
        subject2: `Fisheye possède un énorme réseau de photographes et, aprés une récente levée de fonds, l'entreprise souhaite effecctuer une mise à niveau
                vers un site web plus dynamique.`,
        objectif: `L'objectif était de construire un prototype fonctionnel d'un nouveau site web accessible, en adéquation avec les maquettes au préalablement validées.
                J'ai été uniquement en charge de la partie front-end de ce site web, en respectant les différentes fonctionnalités et exigences techniques,
                notamment celles en matière d'accessibilité.`,
        realisation: `Dans cette application axée sur l'accessibilité, tous les médias disposent d'une description textuelle et les commandes du clavier 
                permettent de naviguer sur le sie, comme les touches fléchées pour la lightbox dans la page des photographes.
                Sur la page d'accueil, l'utilisateur peut trier les photographes selon un thème grâce à plusieurs tags que j'ai placés dans le header du site. Aprés la
                sélection d'un photographe, l'utilisateur est redirigé vers la page personnelle du photographe qui affiche une galerie de son travail, comprenant photographies et/ou vidéos sous forme de miniatures.
                Quelques précisions fonctionnelles sont contenues dans cette page: d'abord, les différents médias peuvent être triés par popularité ou par titre, et chacun d'eux permet
                d'ouvrir une lightbox où l'utilisateur peut faire défiler les différntes images et fermer cette lightbox à sa convenance.
                Pour contacter un photographe, un bouton de contact affiche une modale sous forme de formulaire qui comprend des champs pour les noms, l'adresse 
                électronique et le message.
                `,
        pictures: [fisheyeDesktop, fisheyeTablet, fisheyeMobile],
        tagsTechno: ["html", "css", "sass", "javascript"],
        tagsSkills: ["responsive", "versionning", "desinPattern", "navigation", "accessibilite"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_6_06052021",
        nameLinkApercu: "La page web",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_6_06052021/"
    },
    {
        id: "005",
        name: "Les petits plats",
        logo: lespetitsplatsLogo,
        source: lespetitsplatsGallery,
        size: "small",
        entreprise: "Les petits plats est une entreprise qui édite des livres de cuisine depuis plusieurs années.",
        subject1: `L'entreprise a décidé de se lancer dans un nouveau projet: réaliser son propre site de recettes de cuisine 
                à l'instar de Marmiton ou 750g.`,
        subject2: `Les sites qui proposent des recettes de cuisine sont nombreux et l'équipe a pensé que l'élément qui pourrait faire la 
                différence sur ce site serait, la fluidité du moteur de recherche.`,
        objectif: `Ma mission dans ce projet: "Visez la performance". J'ai donc été chargé d'implémenter une fonctionnalité de recherche qui offre aux utilisateurs 
                un résultat le plus instantané possible.`,
        realisation: `La recherche étant la fonctionnalité principale de ce projet, j'ai commencé par implémenter deux algorithmes différents 
                pour pouvoir comparer leurs performances et choisir le plus performant.
                J'ai réalisé une première version utilisant les boucles natives (while, for...) et une version en programmation fonctionnelle avec 
                les méthodes de l'objet Array (forEach, filter, map, reduce) qui peuvent être consultées depuis le lien Github.
                Quelques contraintes fonctionnelles devaient être respectées, d'abord une recherche qui doit pouvoir se faire via la barre de recherche principale et 
                se lancer automatiquement dès 3 caractères saisis par l'utilisateur ou via les tags (ingrédients, ustensiles ou appareil). Chaque recherche actualise la liste des recettes
                correspondante dans l'interface. Si aucune recette ne correspondant, un message informe l'utilisateur et l'invite à 
                recommencer sa recherche.
                Pour l'instant, l'équipe Back-end n'était pas encore formée, nous disposons uniquement d'un fichier JavaScript contenant un tableau JSON de 50 recettes. 
            `,
        pictures: [lespetitsplatsDesktop, lespetitsplatsTablet],
        tagsTechno: ["html", "css", "javascript"],
        tagsSkills: ["versionning", "algorithme", "tri"],
        gitLink: "https://github.com/VanesMP/VanesMP-MacedopintoVanessa_7_06052021",
        nameLinkApercu: "La page web",
        gitWebsite: "https://vanesmp.github.io/VanesMP-MacedopintoVanessa_7_06052021/"
    },
    {
        id: "006",
        name: "Learn@Home",
        logo: learnhomelogo,
        source: learnhomeGallery,
        size: "large",
        entreprise: "Learn@Home est une association qui vise à aider des enfants en difficulté scolaire en les mettant en relation avec des tuteurs bénévoles en ligne",
        subject1: `Chaque élève inscrit sur le site est assigné à un tuteur bénévole dont objectif est de soutenir l'élève 
                dans son apprentissage. Les rendez-vous sont organisés chaque semaine et durant ces rencontres, le bénévole
                aide l'élève à réaliser ses devoirs et à s'organiser.`,
        subject2: `Jusqu'à présent, les élèves et les bénévoles communiquaient principalement via WhatsApp et les SMS, désormais le projet de Learn@Home consiste à créer son
                site web.`,
        objectif: `Mon travail a consisté à concevoir la maquette du site web qui permettra aux éléves et aux bénévoles de faciliter leurs échanges.`,
        realisation: `Dans un premier temps, j'ai dû définir les besoins du client en réalisant pour chaques pages (connexion, chat, calendrier, gestionnaire de tâches, tableau de bord)
                des diagrammes de cas d'usage ainsi que des user stories avec critère(s) d'acceptation.
                J'ai ensuite créé des maquettes responsives pour chaque page, conformes aux attentes de Learn@Home.
                La page de connexion permet aux éléves et aux bénévoles de se connecter ou de créer un compte ainsi que de récupérer un mot de passe oublié.
                La page du tableau de bord regroupe un récapitulatif de toutes les informations récentes et importantes provenant des autres pages:
                y compris les messages non lus du chat, les rendez-vous à venir du calendrier et les tâches à effectuer du gestionnaire de tâches.
                La page de Chat intègre un système de discussion instantané classique entre élèves et bénévoles.
                La page de calendrier affiche les différents événements et rendez-vous d'un éléve ou d'un bénévole.
                L'interface de la page de gestion des tâches permet aux éléves de créer des tâches à réaliser et aux bénévoles d'en créer pour eux-même 
                ou pour leurs élèves.`,
        pictures: [learnhomeDesktop, learnhomeTablet, learnhomeMobile],
        tagsTechno: ["figma"],
        tagsSkills: ["maquette", "userstories"],
        gitLink: "?",
        nameLinkApercu: "La maquette",
        gitWebsite: "https://www.figma.com/proto/SJguRYU06mWo71XcjRlmDO/Learn%40Home?node-id=14%3A86&scaling=min-zoom&page-id=0%3A1"
    },
    {
        id: "007",
        name: "Kasa",
        logo: kasalogo,
        source: kasaGallery,
        size: "small",
        entreprise: "Kasa est un acteur majeur de la location d'appartements entre particuliers en France depuis presque 10 ans.",
        subject1: `Avec plus de 500 annonces postées chaque jour, Kasa est l'un des 
                leaders du secteur.`,
        subject2: `Cependant, le site de Kasa a été codé il y a plus de 10 ans en ASP.NET. 
                La CTO, a décidé de lancer une refonte totale du site pour passer à une stack complète en JavaScript avec NodeJS pour le Back-end, 
                et React pour le Front-end. 
                Kasa a également demandé à son designer habituel, de créer de nouvelles maquettes pour le site.`,
        objectif: `Mon travail dans ce projet était de développer une nouvelle plateforme web en utilisant React et en respectant les nouvelles maquettes de Kasa.`,
        realisation: `En suivant le design d'interface responsive sur Figma, j'ai démarré le projet avec React et travaillé sur l'ensemble de l'application 
            avec la logique de composants.
            Une des contraintes fonctionnelles importantes que vous pourrez remarquer est que dans la page d'un logement sélectionné, l'utilisateur peut faire 
            défiler les différentes images dans la galerie qui conserve une hauteur fixe. Comme le backend n'était pas terminé, les logements proposés dans l'application 
            ont été extraits d'un fichier JSON.`,
        pictures: [kasaDesktop, kasaTablet, kasaMobile],
        tagsTechno: ["html", "css", "javascript", "react"],
        tagsSkills: ["responsive", "versionning", "composant", "framework", "navigation"],
        gitLink: "?",
        nameLinkApercu: "La page web",
        gitWebsite: "?"
    },
    {
        id: "008",
        name: "Sportsee",
        logo: sportseelogo,
        source: sportseeGallery,
        size: "large",
        entreprise: "SportSee est une startup dédiée au coaching sportif en pleine croissance.",
        subject1: `L'entreprise s'apprête à lancer une nouvelle version de la page profil utilisateur.`,
        subject2: `Cette page permettra à l'utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.`,
        objectif: `L'objectif est de refaire la page de profil en respectant la maquette fournie et en intégrant les fonctionnalités demandées dans les user stories.`,
        realisation: `J'ai développé cette nouvelle version avec React et en utilisant la librairie Recharts, car le projet intègre des graphiques sur 
                l'activité sportive de l'utilisateur.
                La page de profil devait pouvoir être consultée sur un ordinateur ayant une résolution d'au moins 1024 par 780 pixels.
                Mon travail dans ce projet s'est concentré sur la récupération des données utilisateur et leur utilisation dans les différents graphiques,
                ainsi que sur la configuration et la personnalisation de ces graphiques.
                Pour avoir un aperçu de ce projet, vous pouvez suivre les étapes d'installation depuis le fichier Readme du repository Github.
                Quelques prérequis seront nécessaires : NodeJS, Yarn, Visual Studio Code ou tout autre IDE et Docker Desktop.`,
        pictures: [sportseeDesktop, sportseeTablet, sportseeMobile],
        tagsTechno: ["html", "css", "javascript", "react", "recharts", "nodejs"],
        tagsSkills: ["versionning", "composant", "framework", "connexion", "charts"],
        gitLink: "https://github.com/VanesMP/MacedoPintoVanessa_12_06052021",
        nameLinkApercu: " ",
        gitWebsite: "?"
    }
    // ,
    // {
    //     id: "009",
    //     name: "Contact",
    //     source: contactmeGallery,
    //     size: "small",
    // }

]

export const dataLink = [{
    name: "Linkedin",
    Linkedin: "www.linkedin.com/in/vanessa-macedo-pinto-devjunior"
}]