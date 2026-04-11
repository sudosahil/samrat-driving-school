import type { Metadata } from "next";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title:
    "Samrat Motor Driving School — Car Driving Classes in Chhatrapati Sambhajinagar",
  description:
    "Samrat Motor Driving School — trusted driving school in Chhatrapati Sambhajinagar (Aurangabad) since 2000. Learn car driving with experienced instructors. Enquire now.",
  openGraph: {
    title:
      "Samrat Motor Driving School — Car Driving Classes in Chhatrapati Sambhajinagar",
    description:
      "Learn car driving in Aurangabad with professional instructors. Established 2000. RTO support included.",
    type: "website",
    url: "https://samratdrivingschool.in/",
  },
  alternates: { canonical: "https://samratdrivingschool.in/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Samrat Motor Driving School",
  description:
    "Professional car driving school in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. Established in 2000.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "53 Jay Vishw Bharti Colony, Chetak Ghoda Chowk, Garkheda Rd, Kasliwal Nagar, Garkheda",
    addressLocality: "Chhatrapati Sambhajinagar",
    addressRegion: "Maharashtra",
    postalCode: "431005",
    addressCountry: "IN",
  },
  telephone: "+919422264916",
  openingHours: "Mo-Sa 05:00-21:00",
  geo: { "@type": "GeoCoordinates", latitude: 19.8762, longitude: 75.3433 },
  founder: { "@type": "Person", name: "Vijay Rode" },
  url: "https://samratdrivingschool.in",
};

const WHATSAPP_URL =
  "https://wa.me/919422264916?text=Hi%2C%20I%27m%20interested%20in%20joining%20Samrat%20Motor%20Driving%20School";

const WaIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-white border-b border-[#e5e5e5] px-6 flex items-center min-h-[60vh] md:min-h-[90vh]">
        <div className="mx-auto max-w-6xl w-full py-16">
          <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-4 text-center md:text-left">
            Established 2000 &bull; Chhatrapati Sambhajinagar
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide leading-tight mb-5 text-center md:text-left">
            The Name of Perfection
          </h1>
          <p className="font-body text-base md:text-lg text-body-text mb-8 max-w-xl mx-auto md:mx-0 text-center md:text-left">
            Chhatrapati Sambhajinagar&rsquo;s trusted driving school since 2000.
            Learn to drive with confidence.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-md bg-[#3a6b35] px-7 py-3.5 font-heading text-base font-semibold text-white tracking-wide hover:bg-[#2d5229]"
            >
              <WaIcon />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#3a6b35]" aria-label="Quick facts">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center" role="list">
            <li className="font-heading text-sm font-semibold tracking-wide uppercase text-white">
              Est. <span className="text-[#e8a020]">2000</span>
            </li>
            <li className="font-heading text-sm font-semibold tracking-wide uppercase text-white">
              <span className="text-[#e8a020]">25+</span> Years Experience
            </li>
            <li className="font-heading text-sm font-semibold tracking-wide uppercase text-white">
              Car Driving Training
            </li>
            <li className="font-heading text-sm font-semibold tracking-wide uppercase text-white">
              <span className="text-[#e8a020]">5AM</span> – 9PM
            </li>
          </ul>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white border-b border-[#e5e5e5] px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-3 text-center">
              Who We Are
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-5 text-center">
              Aurangabad&rsquo;s Most Trusted Driving School
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="font-body text-body-text leading-relaxed text-center max-w-3xl mx-auto">
              Samrat Motor Driving School has been shaping confident drivers in
              Chhatrapati Sambhajinagar since 2000. With over 25 years of
              experience, our professional trainers follow a structured curriculum
              that takes you from zero to road-ready in just 15 days.
              We combine real-road practice with RTO exam guidance — everything
              you need to get your driving license, done right.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Course teaser ── */}
      <section className="bg-surface border-b border-[#e5e5e5] px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-3 text-center">
              Training Program
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
              Our Course
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div
              className="rounded-md bg-white border border-border p-6 max-w-md mx-auto card-hover"
              style={{ borderTop: "3px solid #3a6b35", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-heading text-xl uppercase tracking-wide">
                  4-Wheeler Car Training
                </h3>
                <span className="shrink-0 rounded-md bg-accent/10 border border-accent/30 px-2 py-0.5 font-body text-xs text-accent font-semibold">
                  Only Course
                </span>
              </div>
              <ul className="space-y-1.5 mb-6">
                {[
                  "120 km total on-road training",
                  "15-day structured course",
                  "Flexible timings: 5AM – 9PM",
                  "RTO exam guidance included",
                  "Manual driving practice daily",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 font-body text-sm text-body-text">
                    <span className="text-[#3a6b35] mt-0.5 shrink-0 font-bold">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="btn-primary inline-block rounded-md border border-[#3a6b35] px-5 py-2.5 font-heading text-sm font-semibold text-[#3a6b35] hover:bg-[#3a6b35] hover:text-white tracking-wide transition-colors"
              >
                View Details
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white border-b border-[#e5e5e5] py-12 md:py-20">
        <Testimonials />
      </section>

      {/* ── Footer CTA ── */}
      <section className="bg-surface px-6 py-12 md:py-20 text-center">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-3">
              Take the First Step
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-3">
              Ready to Learn Driving?
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="font-body text-body-text mb-7">
              Contact us today and take the first step toward your driving license.
            </p>
          </FadeIn>
          <FadeIn delay={160}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-[#3a6b35] px-6 py-3 font-heading text-sm font-semibold text-white tracking-wide hover:bg-[#2d5229]"
              >
                <WaIcon />
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-md border border-[#3a6b35] px-6 py-3 font-heading text-sm font-semibold text-[#3a6b35] hover:bg-[#3a6b35] hover:text-white tracking-wide transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
