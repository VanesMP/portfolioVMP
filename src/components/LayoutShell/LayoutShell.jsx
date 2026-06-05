"use client";

import { usePathname } from "next/navigation";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Header, Footer } from "@components";
import { ROUTES } from "@/constants/routes";

export function LayoutShell({ children }) {
  const pathname = usePathname();
  const hideShell = pathname === ROUTES.PRIVACY_POLICY;

  return (
    <I18nProvider>
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </I18nProvider>
  );
}
