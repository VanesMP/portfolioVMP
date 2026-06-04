import * as LucideIcons from "lucide-react";
import { ICON_SIZES } from "src";

export const Icon = ({ name, size = ICON_SIZES.md, ...props }) => {
  const SVG = typeof name === "object" ? name : LucideIcons[name];

  if (SVG) return <SVG size={size} {...props} />;

  if (typeof name === "string" && name.startsWith("/")) {
    return <img src={name} width={size} height={size} aria-hidden="true" {...props} />;
  }

  return null;
};
