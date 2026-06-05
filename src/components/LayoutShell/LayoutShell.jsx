"use client";

import { usePathname } from "next/navigation";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Header, Footer } from "@components";
import { shouldHideShell } from "@/utils";

export function LayoutShell({ children }) {
  const pathname = usePathname();
  const hideShell = shouldHideShell(pathname);

  return (
    <I18nProvider>
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </I18nProvider>
  );
}
