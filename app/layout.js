// app/layout.js
import "../styles/global.css";
import { Header, Footer } from "../components-widgets";

export const metadata = {
  title: "Mon PortFolio",
  description: "Portfolio personnel créé avec Next.js et React.js",
  icons: {
    icon: "/logovmp.jpg",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Baskervville:ital@0;1&family=Buda&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
