import * as LucideIcons from "lucide-react";
import { ICON_SIZES } from "src";

export const Icon = ({ name, size = ICON_SIZES.md, ...props }) => {
  const SVG = typeof name === "string" ? LucideIcons[name] : name;

  if (!SVG) return null;

  return <SVG size={size} {...props} />;
};
