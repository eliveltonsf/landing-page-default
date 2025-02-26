/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const love = Love_Ya_Like_A_Sister({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-love",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
        <script src="https://hammerjs.github.io/dist/hammer.min.js"></script>
      </head>
      <body
        className={`${poppins.variable} ${love.variable} font-poppins bg-green-100 antialiased text-green-900 tracking-tight overflow-x-hidden style-scrollbar-h`}
      >
        {children}
      </body>
    </html>
  );
}
