import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Samrat Motor Driving School Aurangabad",
  description:
    "Contact Samrat Motor Driving School in Chhatrapati Sambhajinagar. Call 9422264916, visit Garkheda or enquire via WhatsApp. Open Monday–Saturday, 5AM–9PM.",
  openGraph: {
    title: "Contact Samrat Motor Driving School — Chhatrapati Sambhajinagar",
    description:
      "Reach us by phone, WhatsApp, or visit our school in Garkheda, Chhatrapati Sambhajinagar.",
    type: "website",
    url: "https://samratdrivingschool.in/contact/",
  },
  alternates: {
    canonical: "https://samratdrivingschool.in/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
