import { Code2, Palette } from "lucide-react";

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
