import type { Metadata } from "next";
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakken, Bæck & Barks",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://fav.farm/🐶" />
      </head>
      <body className={`${roboto.variable}`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
