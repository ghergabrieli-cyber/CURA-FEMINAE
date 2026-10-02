import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CURA FEMINAE — Centru pentru sănătatea femeii",
  description:
    "CURA FEMINAE este un proiect medical în dezvoltare în Constanța, dedicat sănătății femeii și continuității îngrijirii.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
