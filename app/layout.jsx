import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import AddBootstrap from "./components/AddBootstrap";
export const metadata = {
  title: "Ramen Paul | Cellist and a Sound Engineer",
  description:
    "Ramen Paul is a Authorized Trinity College, London Teacher | Certified in England, France, and the U.S.",
  icon: "/img/favicon.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icon} type="image/png" />
      </head>
      <body>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
