import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Koulen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${koulen.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
