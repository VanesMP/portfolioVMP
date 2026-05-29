import { Code2, Palette, FileUser } from "lucide-react";
import { BUTTON_VARIANTS } from "./buttonVariants";

export const PORTFOLIO_VALUE = {
  DEV: "dev",
  ART: "art",
};

export const OPTIONS_PORTFOLIO = [
  {
    value: PORTFOLIO_VALUE.DEV,
    labelKey: "switchPortfolio.labelDev",
    iconName: Code2,
  },
  {
    value: PORTFOLIO_VALUE.ART,
    labelKey: "switchPortfolio.labelArt",
    iconName: Palette,
  },
];

export const OPTIONS_BUTTONS_HEROBANNER = [
  {
    labelKey: "heroBanner.buttonProjects",
    path: "/",
  },
  {
    labelKey: "heroBanner.buttonContact",
    path: "/",
    variant: BUTTON_VARIANTS.OUTLINED,
  },
];

export const OPTIONS_BUTTONS_CTASECTION = [
  {
    labelKey: "section.cta.buttonCV",
    path: "/",
    iconName: FileUser,
  },
  {
    labelKey: "section.cta.buttonLinkedIn",
    path: "https://www.linkedin.com/in/vanessa-macedopinto/",
    iconName: "/logo/linkedin.svg",
    variant: BUTTON_VARIANTS.OUTLINED,
  },
];
