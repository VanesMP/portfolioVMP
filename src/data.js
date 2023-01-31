// Reservia Media
// import reserviaLogo from "../src/assets/logo/reservia.png";
// import reserviaIFrame from "../src/assets/media/reservia/frame-Reservia.png";
import reserviaDesktop from "src/assets/media/reservia/imageA.Reservia.jpg";
import reserviaTablet from "../src/assets/media/reservia/imageB.Reservia.jpg";
import reserviaMobile from "../src/assets/media/reservia/imageC.Reservia.jpg";

// OhMyFood Media
// import ohmyfoodLogo from "../src/assets/logo/ohmyfood.png";
// import ohmyfoodIFrame from "../src/assets/media/ohmyfood/frame-Ohmyfood.png";
import ohmyfoodDesktop from "../src/assets/media/ohmyfood/imageA.Ohmyfood.jpg";
import ohmyfoodTablet from "../src/assets/media/ohmyfood/imageB.Ohmyfood.jpg";
import ohmyfoodMobile from "../src/assets/media/ohmyfood/imageC.Ohmyfood.jpg";

// GameOn Media
// import gameonLogo from "../src/assets/logo/gameOn.png";
// import gameonIFrame from "../src/assets/media/gameon/frame-Gameon.png";
import gameonDesktop from "../src/assets/media/gameon/imageA.GameOn.jpg";
import gameonTablet from "../src/assets/media/gameon/imageB.GameOn.jpg";
import gameonMobile from "../src/assets/media/gameon/imageC.GameOn.jpg";

// Fisheye Media
// import fisheyeLogo from "../src/assets/logo/fisheye.png";
// import fisheyeIFrame from "../src/assets/media/fisheye/frame-Fisheye.png";
import fisheyeDesktop from "../src/assets/media/fisheye/imageA.Fisheye.jpg";
import fisheyeTablet from "../src/assets/media/fisheye/imageB.Fisheye.jpg";
import fisheyeMobile from "../src/assets/media/fisheye/imageC.Fisheye.jpg";

// Les petits plats Media
// import lespetitsplatsLogo from "../src/assets/logo/lespetitsplats.svg";
// import lespetitsplatsIFrame from "../src/assets/media/lespetitsplats/frame-Lespetitsplats.png";
import lespetitsplatsDesktop from "../src/assets/media/lespetitsplats/imageA.FLespetitsplats.jpg";
import lespetitsplatsTablet from "../src/assets/media/lespetitsplats/imageB.FLespetitsplats.jpg";

// Learn more Media
// import learnmorelogo from "../src/assets/logo/learnMore.png";
// import learnmoreIFrame from "../src/assets/media/learnmore/frame-Learnmore.png";
import learnmoreDesktop from "../src/assets/media/learnmore/imageA.LearnMore.jpg";
import learnmoreTablet from "../src/assets/media/learnmore/imageB.LearnMore.jpg";
import learnmoreMobile from "../src/assets/media/learnmore/imageC.LearnMore.jpg";

// Kasa Media
// import kasalogo from "../src/assets/logo/kasa.png";
// import kasaIFrame from "../src/assets/media/kasa/frame-Kasa.png";
import kasaDesktop from "../src/assets/media/kasa/imageA.Kasa.jpg";
import kasaTablet from "../src/assets/media/kasa/imageB.Kasa.jpg";
import kasaMobile from "../src/assets/media/kasa/imageC.Kasa.jpg";

// Sportsee Media
// import sportseelogo from "../src/assets/logo/sportsee.png";
// import sportseeIFrame from "../src/assets/media/sportsee/frame-Sportsee.png";
import sportseeDesktop from "../src/assets/media/sportsee/imageA.Sportsee.jpg";
import sportseeTablet from "../src/assets/media/sportsee/imageB.Sportsee.jpg";
import sportseeMobile from "../src/assets/media/sportsee/imageC.Sportsee.jpg";

export const dataList = [{
        id: "001",
        name: "Reservia",
        entreprise: "Reservia est une petite entreprise qui propose un outil de planification pour leur vacances.",
        subject1: `Le site de Reservia permet à ces usagers de trouver des hébergements et des activités dans un large choix de ville, 
            en ayant la possibilité de filtrer ces hébergements par thématique, par ambiance  ou selon le budget.`,
        subject2: `Un nouveau design basé sur les principes du Material Design venait d'être proposé par Loïc, designer UI.`,
        objectif: `Mon travail sur ce projet, était de réaliser un site web responsive en suivant la maquette réalisé par Loïc.
            La contrainte de ce projet etait qu'il devait etre réalisé en utilisant uniquement HTML et CSS.`,
        realisation: `Le parcours utilisateur commence par l'affichage de la page d'accueil de Reservia,
            qui propose des hébergements et des activités.
            Depuis cette page d'accueil, l'usager pourra par la suite faire une saisie dans la barre 
            de rechercghe pour trouver un hébergement dans la ville souhaitée, puis affiner sa recherche en utilisant les filtres proposés. 
            Les liens dans le menu sont des ancres qui emmenent aux sections de la page.`,
        pictures: [reserviaDesktop, reserviaTablet, reserviaMobile],
        tagsTechno: ["html", "css"],
        tagsSkills: ["maquette", "responsive", "versionning"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_2_06052021",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_2_06052021/"
    },
    {
        id: "002",
        name: "Oh my food",
        entreprise: "Ohmyfood! est une jeune startup qui voudrait s'imposer sur le marché de la restauration.",
        subject1: `Cette entreprise de commande de repas en ligne, permet aux utilisateurs de composer leur propre menu 
                et de réduire leur temps d'attente dans les restaurants car leur menu est préparé à l'avance.`,
        subject2: `En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que 
                les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !.`,
        objectif: `L'objectif est de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques.
                Ohmyfood! souhaite se positionner sur un marché de niche, avec les restaurants luxueux des villes
                dans lesquelles ils sont établis. 
                Souhaitant être identifié comme une entreprise qui propose des services haut de gamme, l'équipe a réalisé une maquette 
                et des animations CSS avancées qui ont su respect cette demande.`,
        realisation: `Le parcours utilisateur commence par l' affichage d'un spinner qui reprends l'A.D.N de la marque, puis direction la page d'accueil qui 
                offre la possibilité de choisir les menus de 4 restaurants parisiens.
                Une fois le choix du restaurant réalisé, l' utilisateur peut alors composer son menu en sélection les différentes propositions, dans les entrées,
                les plats et les desserts.
                A chaque sélection faite par l' utilisateur, une animation Css marque le choix.`,
        pictures: [ohmyfoodDesktop, ohmyfoodTablet, ohmyfoodMobile],
        tagsTechno: ["html", "css"],
        tagsSkills: ["maquette", "responsive", "versionning", "animationCSS", "navigation"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_3_06052021",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_3_06052021/"
    },
    {
        id: "003",
        name: "Game On",
        entreprise: "GameOn, spécialisée dans les conférences et les concours de jeux.",
        subject1: `Cette PME spécialisée dans le domaine du jeux vidéo, propose aux utilisateurs dans cette landing page
                via un formulaire de s'inscrire au Marathon national du jeux vidéo.`,
        subject2: ` `,
        objectif: `Après avoir reçu des commentaires négatifs de la part de certains utilisateurs, la nouvelle page d'accueil ainsi que les
                inscriptions aux concours ont été simplifié.
                Mon travail dans ce projet consistait d'abord à vérifier et tester le code déja réalisé et à ajouter une fonctionnalité manquante,
                le formulaire d' inscription.`,
        realisation: `Le parcours utilisateur commence par l' affichage de la landing page qui propose aux utilisateurs/gameurs de s' inscrire
                au concours.
                Le bouton s'inscrire offre une fenêtre pop up, qui est le formulaire d' inscription.
                Plusieurs champs de saisi sont présents, du texte, une date, des boutons radio et des checkbox. Avant la validation du formulaire, tous les champs
                du formulaire doivent être correctemnt saisi.
                La barre de navigation n'a pas encore été implémenté.`,
        pictures: [gameonDesktop, gameonTablet, gameonMobile],
        tagsTechno: ["html", "css", "javascript"],
        tagsSkills: ["responsive", "versionning", "formulaire", "navigation", "landingPage"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_4_06052021",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_4_06052021/"
    },
    {
        id: "004",
        name: "Fisheye",
        entreprise: "FishEye est un site web qui permet aux photographes frelance de présenter leurs meilleurs travaux.",
        subject1: `Ces photographes prennent de super photos, mais ils n'y connaissent rien en développement web. C'est
                pourquoi Fisheye propose une plateforme unique pour montrer leurs photos sur une belle page
                et de permettre aux visiteurs de les contacter pour des événements ou des tirages.`,
        subject2: `Fisheye posséde un énorme réseau de photographes, aprés une récente levé de fonds, l'entreprise souhaite faire une mise à niveau
                vers un site dynamique.`,
        objectif: `L' objectif est de construire un prototype fonctionnel d'un nouveau site web, en adéquation avec les maquettes au préalablement validées.
                J'ai été uniquement en charge de la partie front-end de ce site web en respectant les différentes fonctionnalités et exigences techniques,
                notamment celle en matière d'accessibilité.`,
        realisation: ``,
        pictures: [fisheyeDesktop, fisheyeTablet, fisheyeMobile],
        tagsTechno: ["html", "css", "sass", "javascript"],
        tagsSkills: ["responsive", "versionning", "desinPattern", "navigation", "accessibilite"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_6_06052021",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_6_06052021/"
    },
    {
        id: "005",
        name: "Les petits plats",
        //     entreprise: "",
        //     subject1: ``,
        //     subject2: ` `,
        //     objectif: ``,
        //     realisation: ``,
        pictures: [lespetitsplatsDesktop, lespetitsplatsTablet],
        tagsTechno: ["html", "css", "sass", "javascript"],
        //     tagsSkills: ["versionning","navigation", "algoythme", "tri"],
        gitLink: "https://github.com/VanesMP/VanesMP-MacedopintoVanessa_7_06052021",
        gitWebsite: "https://vanesmp.github.io/VanesMP-MacedopintoVanessa_7_06052021/"
    },
    {
        id: "006",
        name: "Learn more",
        //     entreprise: "",
        //     subject1: ``,
        //     subject2: ` `,
        //     objectif: ``,
        //     realisation: ``,
        pictures: [learnmoreDesktop, learnmoreTablet, learnmoreMobile],
        tagsTechno: ["figma"],
        tagsSkills: ["maquette", "userstories"],
        gitLink: " ",
        gitWebsite: " "
    },
    {
        id: "007",
        name: "Kasa",
        //     entreprise: "",
        //     subject1: ``,
        //     subject2: ` `,
        //     objectif: ``,
        //     realisation: ``,
        pictures: [kasaDesktop, kasaTablet, kasaMobile],
        tagsTechno: ["html", "css", "javascript", "react"],
        tagsSkills: ["versionning", "composant", "framework", "navigation"],
        gitLink: " ",
        gitWebsite: " "
    },
    {
        id: "008",
        name: "Sportsee",
        //     entreprise: "",
        //     subject1: ``,
        //     subject2: ` `,
        //     objectif: ``,
        //     realisation: ``,
        pictures: [sportseeDesktop, sportseeTablet, sportseeMobile],
        tagsTechno: ["html", "css", "javascript", "react", "recharts"],
        tagsSkills: ["versionning", "composant", "framework", "connexion", "charts"],
        gitLink: "https://github.com/VanesMP/MacedoPintoVanessa_12_06052021",
        gitWebsite: " "
    },

]