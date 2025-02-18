import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ProviderClient } from "./ProviderClient";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "logHozion app ",
  description: "Generated by create next app",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderClient locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </ProviderClient>
      </body>
    </html>
  );
}
