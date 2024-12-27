import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import AddBootstrap from "./components/AddBootstrap";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddBootstrap />
        {children}
      </body>
    </html>
  );
}
