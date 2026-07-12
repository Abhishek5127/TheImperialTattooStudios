import type { Metadata } from "next";
import { Anton, Space_Grotesk, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const display = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const body = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Imperial Tattoo Studio | Ahmedabad Tattoo Shop",
  description:
    "The Imperial Tattoo Studio in Odhav, Ahmedabad. Custom tattoo design, personal storytelling through ink, and precise studio craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
