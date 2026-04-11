import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samratdrivingschool.in"),
  title: {
    default:
      "Samrat Motor Driving School — Car Driving Classes in Chhatrapati Sambhajinagar",
    template: "%s | Samrat Motor Driving School",
  },
  description:
    "Learn car driving at Samrat Motor Driving School in Chhatrapati Sambhajinagar (Aurangabad). Trusted since 2000, professional trainers, RTO support. Call: 9422264916.",
  openGraph: {
    siteName: "Samrat Motor Driving School",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
