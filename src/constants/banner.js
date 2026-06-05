import { BUTTON_VARIANTS } from "./buttonVariants";
import { FileUser } from "lucide-react";
import { ROUTES } from "./routes";

export const BANNER_PALETTE = [
  "155,176,168",
  "17,136,86",
  "10,68,87",
  "162,206,59",
  "24,49,57",
  "232,237,222",
  "29,53,48",
];

export const WIRE_COLOR = { main: "#2a7a55", low: "#1a5c40", dim: "#0d3d28" };
export const BULB_COLOR = "#6a9e58";
export const FILAMENT = "#4a7a3a";
export const CONN_COLOR = "#1a4a30";
export const BASE_Y = 0.62;
export const NODE_COUNT = 9;
export const FIREFLY_COUNT = 90;

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

export const OPTIONS_BUTTONS_CTASECTION = [
  {
    labelKey: "section.cta.buttonCV",
    path: ROUTES.MYCV,
    iconName: FileUser,
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
