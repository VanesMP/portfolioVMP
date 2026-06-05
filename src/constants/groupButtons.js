import { BUTTON_VARIANTS } from "./buttonVariants";
import { ROUTES } from "./routes";

export const OPTIONS_BUTTONS_CTASECTION = [
  {
    labelKey: "section.cta.buttonCV",
    path: ROUTES.MYCV,
    iconName: "FileUser",
    openInNewTab: true,
  },
  {
    labelKey: "section.cta.buttonLinkedIn",
    path: "https://www.linkedin.com/in/vanessa-macedopinto/",
    iconName: "/logo/linkedin.svg",
    variant: BUTTON_VARIANTS.OUTLINED,
    openInNewTab: true,
  },
];

export const OPTIONS_BUTTONS_HEROBANNER = [
  {
    labelKey: "heroBanner.buttonProjects",
    path: ROUTES.PROJECTS,
  },
  {
    labelKey: "heroBanner.buttonContact",
    path: ROUTES.CONTACT,
    variant: BUTTON_VARIANTS.OUTLINED,
  },
];

export const OPTIONS_BUTTONS_CV = [
  {
    labelKey: "buttons.formatPdf",
    path: "/images/cv-vanessaMP.pdf",
    iconName: "FileDown",
    nameSpace: "myCv",
  },
  {
    labelKey: "buttons.formatWord",
    path: "/images/cv-vanessaMP.docx",
    iconName: "FileDown",
    nameSpace: "myCv",
  },
];
