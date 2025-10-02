import type { Metadata } from "next";

import "./globals.css";
import Head from 'next/head';


import { Inter, Poppins } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
})



export const metadata: Metadata = {
  title: "Oaiss Braces Center",
  description: "Dental Clinic Management System",
  icons: {
    icon: "/images/favicon.ico",        // default favicon
    shortcut: "/images/favicon.ico",    // for legacy browsers
    apple: "/images/favicon.ico", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
