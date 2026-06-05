import { HIDE_SHELL_ROUTES } from "@/constants/routes";

export const shouldHideShell = (pathname) => {
  return HIDE_SHELL_ROUTES.some((route) => pathname === route);
};
