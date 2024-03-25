import NavigationBar from "../components/Navbar/NavigationBar";

import { Inter } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shinefy",
  description: "Shinefy! The Ultimate Content Creator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          type="image/svg+xml"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="description"
          content="Shinefy! The Ultimate Content Creator."
        />

        <title>Shinefy</title>

        <link rel="icon" href="favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
