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

// Learn@Home Media
// import learnhomelogo from "../src/assets/logo/learnhome.png";
// import learnhomeIFrame from "../src/assets/media/learnhome/frame-learnhome.png";
import learnhomeDesktop from "../src/assets/media/learnhome/imageA.learnhome.jpg";
import learnhomeTablet from "../src/assets/media/learnhome/imageB.learnhome.jpg";
import learnhomeMobile from "../src/assets/media/learnhome/imageC.learnhome.jpg";

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
        objectif: `L'objectif était de construire un prototype fonctionnel d'un nouveau site web accessible, en adéquation avec les maquettes au préalablement validées.
                J'ai été uniquement en charge de la partie front-end de ce site web en respectant les différentes fonctionnalités et exigences techniques,
                notamment celle en matière d'accessibilité.`,
        realisation: `Dans cette application axée sur l'accessibilité, tous les médias ont une description textuelle et les commandes du clavier 
                permettent de naviguer sur le sie, comme les touches fléchées pour la lightbox dans la page du photographe.
                Dans la page d'accueil, l'utilisateur peux trier les photographes selon un thême grâce à plusieurs tags que j'ai placé dans le header du site. Aprés la
                sélection d'un photographe, l'utilisateur est redirigé vers la page personnelle du photographe qui affiche une galerie de son travail, photographies et/ou vidéos sous forme de miniature.
                Quelques précision fonctionnelles contenues dans cette page, d'abord les différents média peuvent être triés par populrité ou par titre et chacun d'eux permettent
                d'ouvrir une lightbox où l'utilisateur peux faire défiler les différntes images et fermer cette lightbox à sa convenance.
                Pour contacter un photographe, un bouton de contact affiche une modale sous forme de formulaire qui comprend des champs pour les noms, l'adresse 
                électronique et le message.
                `,
        pictures: [fisheyeDesktop, fisheyeTablet, fisheyeMobile],
        tagsTechno: ["html", "css", "sass", "javascript"],
        tagsSkills: ["responsive", "versionning", "desinPattern", "navigation", "accessibilite"],
        gitLink: "https://github.com/VanesMP/MacedopintoVanessa_6_06052021",
        gitWebsite: "https://vanesmp.github.io/MacedopintoVanessa_6_06052021/"
    },
    {
        id: "005",
        name: "Les petits plats",
        entreprise: "Les petits plats est une entreprise édite des livres de cuisine depuis plusieurs années.",
        subject1: `L'entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine 
                à l'instar de Marmiton ou 750g.`,
        subject2: `Les sites qui proposent des recettes de cuisines sont nombreux et l'équipe a pensé que l'element qui pourrait faire la 
                différences sur ce site serait la fluidité du moteur de recherche.`,
        objectif: `Ma mission dans ce projet, "visez la performance". Je devais d'implémenter une fonctionnalité de recherche, qui offrira aux utilisateurs, 
                un résultat le plus instantané possible.`,
        realisation: `La recherche étant la fonctionnalité principale de ce projet, j'ai commencé par implémenter deux algorithmes différents 
                pour pouvoir comparer leurs performances et choisir le meilleure.
                J'ai réalisé une première version utilisant les boucles natives (while, for...) et une version en programmation fonctionnelle avec 
                les méthodes de l'objet array (foreach, filter, map, reduce) qui peuvent être consulté depuis le lien github.
                J'ai utilisé 2 branches différentes sur Git afin de bien conserver les codes séparés.
                Quelques contraintes fontcionnelles obligatoires, d'abord une recherche qui doit pouvoir se faire via la barre de recherche dés 3 
                caractères saisis par l'utilisateur ou via les tags (ingrédients, ustensiles ou appareil) et chaque recherche actualise la liste des recettes
                qui correspondent dans l'interface. Si il n'y a pas de correspondants, un meessage informe l'utilisateur qu' aucunes recette n'a été trouvé et l'invite a 
                recommencer sa recherche.
                Pour l'instant l'équipe Back-end n'était pas encore formée, nous disposons uniquement d'un fichier JavaScript contenant un tableau JSON de 50 recettes. 
            `,
        pictures: [lespetitsplatsDesktop, lespetitsplatsTablet],
        tagsTechno: ["html", "css", "javascript"],
        tagsSkills: ["versionning", "algorithme", "tri"],
        gitLink: "https://github.com/VanesMP/VanesMP-MacedopintoVanessa_7_06052021",
        gitWebsite: "https://vanesmp.github.io/VanesMP-MacedopintoVanessa_7_06052021/"
    },
    {
        id: "006",
        name: "Learn@Home",
        entreprise: "Learn@Home est une association qui met en relation des enfants en difficulté scolaire avec des tuteurs bénévoles, en ligne",
        subject1: `Chaque élève inscrit sur le site a un tuteur bénévole, qui lui est assigné. Le bénévole a pour objectif de soutenir l'élève 
                dans son apprentissage, à travers de courts rendez-vous prévus chaque semaine. Durant ces rendez-vous, le bénévole
                aide l'élève à réaliser ses devoirs et à s'organiser.`,
        subject2: `Jusqu'alors élèves et bénévoles utilisaient surtout WhatsApp et les SMS pour communiquer, le projet de Learn@Home est la création
                d'un site web.`,
        objectif: `Mon travail a été de concevoir la maquette du site web qui permettra aux éléves et aux bénévoles de faciliter leurs échanges.`,
        realisation: `Dans un premier temps, j'ai dû bien définir les besoins client en réalisant pour chacune des fonctionnalités des diagrammes de 
                cas d'usage pour chaque page (connexion, chat, calendrier, gestionnaire de tâches, tableau de bord) et des
                user stories avec critère(s) d'acceptation.
                Les maquettes responsives de chaques pages ont été réalisé selon les attentes de Learn@Home.
                La page de connexion permet aux éléves et bénévole de se connecter ou de créer un compte et la possibilité de récupérer som mot de passe.
                La page du tableau de bord regroupe un récapitulatif de toutes les informations récentes et importantes en provenance des autres pages :
                chat(messages non lus), calendrier(rendez vous à venir), gestion des tâches(exercices ou correction à effectuer).
                La page de Chat intégre un système de discussion instantané classique entre élèves et bénévoles.
                La page de calendrier affiche les différents événements et rendez-vous d'un éléve ou d'un bénévole.
                L'interface de la page de gestion des tâches  permet à un éléve de se créer des tâches à réaliser et aux bénévoles d'en créer pour lui 
                ou pour ses éléves.`,
        pictures: [learnhomeDesktop, learnhomeTablet, learnhomeMobile],
        tagsTechno: ["figma"],
        tagsSkills: ["maquette", "userstories"],
        gitLink: " ",
        gitWebsite: " "
    },
    {
        id: "007",
        name: "Kasa",
        entreprise: "Kasa est dans le métier de la location d'appartements entre particuliers depuis près de 10 ans maintenant.",
        subject1: `Avec plus de 500 annonces postées chaque jour Kasa fait partie des 
                leaders de la location d'appartements entre particuliers en France.`,
        subject2: `Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. 
                La CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, 
                et React côté Front-end. 
                Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance.`,
        objectif: `Mon travail dans ce prjet était de developper un nouvelle plateforme web avec React et en respectant leurs nouvelles maquettes.`,
        realisation: `En suivant le design d'interface responsive sur Figma, j'ai démarré le projet avec React et travaillé l'ensemble de l'application 
            avec la logique de composants.
            Quelques précision sur une des contraintes fonctionnelles que vous pourrez trouver, dans la page d'un logement selectionné, l'utilisateur 
            peux faire défiler les différentes images dans la galerie qui reste de la hauteur.
            Le back-end n'étant pas terminé, les logements proposés dans l 'application sont extrait d'un fichier JSON.`,
        pictures: [kasaDesktop, kasaTablet, kasaMobile],
        tagsTechno: ["html", "css", "javascript", "react"],
        tagsSkills: ["responsive", "versionning", "composant", "framework", "navigation"],
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