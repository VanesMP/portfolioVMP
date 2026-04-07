// app/layout.js
import "../styles/global.css";
import { Header, Footer } from "../components-widgets";
import { dmSans } from "../styles/font";

export const metadata = {
  title: "My PortFolio",
  description: "Personal portfolio created with Next.js and React.js",
  icons: {
    icon: "/logovmp.jpg",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
