import "./global.scss";
import { Inter } from "next/font/google";

import AddBootstrap from "./components/AddBootstrap";
import "bootstrap/dist/css/bootstrap.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramen Paul | Cellist and a Sound Engineer",
  description:
    "Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S.",
  icons: {
    icon: "/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
