import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SigilLayer from "@/components/Sigillayer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rahman Nor Fauzan — AI Engineer",
  description: "Portofolio pribadi Rahman Nor Fauzan, AI Engineer spesialis Machine Learning dan Deep Learning.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch"],
  authors: [{ name: "Rahman Nor Fauzan" }],
  openGraph: {
    title: "Rahman Nor Fauzan — AI Engineer",
    description: "Membangun sistem kecerdasan buatan yang berdampak nyata.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${cormorant.variable} ${spaceMono.variable} antialiased`}>
        <SigilLayer />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}