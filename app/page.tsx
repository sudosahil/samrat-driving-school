import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title:
    "Samrat Motor Driving School — Two & Four Wheeler Driving Classes in Chhatrapati Sambhajinagar",
  description:
    "Samrat Motor Driving School — trusted driving school in Chhatrapati Sambhajinagar (Aurangabad) since 2000. Two-wheeler & four-wheeler training in Hindi/Marathi with RTO support. Enquire now.",
  openGraph: {
    title:
      "Samrat Motor Driving School — Two & Four Wheeler Driving Classes in Chhatrapati Sambhajinagar",
    description:
      "Learn two-wheeler & car driving in Aurangabad with professional instructors. Established 2000. RTO support included.",
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
    "Professional two-wheeler and four-wheeler driving school in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. Established in 2000.",
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
  openingHours: ["Mo-Sa 06:00-12:00", "Mo-Sa 15:00-20:00"],
  geo: { "@type": "GeoCoordinates", latitude: 19.8762, longitude: 75.3433 },
  founder: { "@type": "Person", name: "Vijay Rode" },
  url: "https://samratdrivingschool.in",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

const WHATSAPP_URL =
  "https://wa.me/917499862746?text=Hi%2C%20I%27m%20interested%20in%20joining%20Samrat%20Motor%20Driving%20School";
const CALL_URL = "tel:+919422264916";

/* ── Icons ── */
const WaIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const PhoneIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.24 1.05l-2.2 2.19z" />
  </svg>
);

const BikeIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="5.5" cy="16.5" r="3.5" />
    <circle cx="18.5" cy="16.5" r="3.5" />
    <path d="M5.5 16.5l3.2-6.5h4l3.3 6.5M9 10h5M14.7 9l1.8 1.4" />
  </svg>
);

const CarIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 13l1.8-4.6A2.5 2.5 0 017.1 7h9.8a2.5 2.5 0 012.3 1.4L21 13v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1zm3.4-1h11.2l-1.1-2.8a.8.8 0 00-.7-.5H8.2a.8.8 0 00-.7.5z" />
    <circle cx="7.5" cy="15" r="1.3" fill="#0b2624" />
    <circle cx="16.5" cy="15" r="1.3" fill="#0b2624" />
  </svg>
);

const ComboIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 21h8M12 16v5M6 4h12v3.5a6 6 0 01-12 0zM6 6H3.5v.8A3 3 0 006 9.6M18 6h2.5v.8A3 3 0 0118 9.6" />
  </svg>
);

const StarIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const courses = [
  {
    title: "2-Wheeler",
    tag: "Bikes & Scooters",
    Icon: BikeIcon,
    points: [
      "Geared & gearless two-wheelers",
      "Balance, road sense & traffic handling",
      "Morning & evening batches",
      "RTO exam guidance included",
    ],
  },
  {
    title: "4-Wheeler Car",
    tag: "Most Popular",
    featured: true,
    Icon: CarIcon,
    points: [
      "120 km total on-road training",
      "15-day structured course",
      "Manual driving practice daily",
      "RTO exam guidance included",
    ],
  },
  {
    title: "2 + 4 Combo",
    tag: "Best Value",
    Icon: ComboIcon,
    points: [
      "Two-wheeler & car together",
      "One enrollment, both licenses",
      "Morning & evening batches",
      "Full RTO support for both",
    ],
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1000s", label: "Students Trained" },
  { value: "4.8★", label: "Google Rating" },
  { value: "Mon–Sat", label: "6 Days a Week" },
];

const steps = [
  { n: "01", title: "Enroll", desc: "Call or WhatsApp us and pick a batch — we handle the rest." },
  { n: "02", title: "Train Daily", desc: "Real-road practice with patient trainers, in Hindi & Marathi." },
  { n: "03", title: "RTO Prep", desc: "Full guidance for paperwork and the license exam." },
  { n: "04", title: "Get Licensed", desc: "Drive confidently with your official driving license." },
];

const whyUs = [
  "Trusted since 2000 — 25+ years on the road",
  "Patient, professional, experienced trainers",
  "Taught in Hindi & Marathi",
  "Flexible morning & evening batches",
  "Complete RTO & documentation support",
  "Real-road training, not just a yard",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="brand-dark relative overflow-hidden px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text */}
            <FadeIn from="right">
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-widest text-gold-soft">
                  <StarIcon className="h-3.5 w-3.5" /> Since 2000 · Aurangabad
                </span>
                <h1 className="mt-5 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-wide text-cream sm:text-5xl lg:text-6xl">
                  Learn to Drive with{" "}
                  <span className="text-gold">The Name of Perfection</span>
                </h1>
                <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-cream/75 md:mx-0">
                  Two-wheeler &amp; four-wheeler training in Chhatrapati
                  Sambhajinagar — taught in Hindi &amp; Marathi by trainers you
                  can trust.
                </p>

                {/* CTAs */}
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 font-heading text-base font-semibold tracking-wide text-white hover:bg-[#1eb858]"
                  >
                    <WaIcon /> Enquire on WhatsApp
                  </a>
                  <a
                    href={CALL_URL}
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-md border border-gold/50 bg-transparent px-7 py-3.5 font-heading text-base font-semibold tracking-wide text-cream hover:bg-gold hover:text-teal-deep"
                  >
                    <PhoneIcon /> Call Now
                  </a>
                </div>

                {/* trust chips */}
                <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
                  {["★ 4.8 on Google", "25+ Years", "RTO Support", "Hindi · Marathi"].map((chip) => (
                    <span key={chip} className="font-body text-xs font-medium text-cream/60">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Logo badge */}
            <FadeIn from="left" delay={120}>
              <div className="relative mx-auto w-[230px] sm:w-[280px]">
                <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-2xl" aria-hidden="true" />
                <div className="animate-floaty relative rounded-[1.75rem] bg-white p-4 shadow-gold ring-1 ring-gold/40">
                  <Image
                    src="/images/bottom.jpeg"
                    alt="Samrat Motor Driving School logo"
                    width={1600}
                    height={1600}
                    className="h-auto w-full rounded-2xl"
                    priority
                  />
                  <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-teal px-4 py-1.5 shadow-lg ring-1 ring-gold/40">
                    <StarIcon className="h-3.5 w-3.5 text-gold" />
                    <span className="font-heading text-sm font-semibold tracking-wide text-cream">
                      4.8 / 5 Rated
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="bg-gold" aria-label="Key facts">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-teal-deep/15 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-5 text-center">
              <p className="font-heading text-2xl font-bold tracking-wide text-teal-deep sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 font-body text-xs font-medium uppercase tracking-wide text-teal-deep/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="bg-dots border-b border-divider px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal">
                Training Programs
              </p>
              <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide md:text-3xl">
                Choose Your Course
              </h2>
              <div className="gold-rule mx-auto mt-4" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {courses.map((course, i) => (
              <FadeIn key={course.title} delay={i * 90}>
                <div
                  className={`card-hover flex h-full flex-col rounded-xl border bg-white p-6 ${
                    course.featured ? "border-gold ring-1 ring-gold/40" : "border-border"
                  }`}
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal/8 text-teal">
                      <course.Icon />
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 font-body text-xs font-semibold ${
                        course.featured
                          ? "bg-gold text-teal-deep"
                          : "bg-teal/8 text-teal"
                      }`}
                    >
                      {course.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wide">
                    {course.title}
                  </h3>
                  <ul className="mt-4 mb-6 flex-1 space-y-2">
                    {course.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 font-body text-sm text-body-text">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/courses"
                    className="btn-primary inline-flex items-center justify-center rounded-md border border-teal px-5 py-2.5 font-heading text-sm font-semibold tracking-wide text-teal transition-colors hover:bg-teal hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ── */}
      <section className="bg-dots-surface border-b border-divider px-6 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <FadeIn from="right">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal">
                Why Samrat
              </p>
              <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide md:text-3xl">
                Trusted by Thousands of Drivers
              </h2>
              <div className="gold-rule mt-4" />
              <p className="mt-5 font-body leading-relaxed text-body-text">
                For over 25 years, families across Chhatrapati Sambhajinagar have
                trusted us to teach their first lessons behind the wheel. We keep
                it simple: patient teaching, real roads, and full support until
                you hold your license.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 font-heading text-sm font-semibold tracking-wide text-white hover:bg-teal-dark"
              >
                <WaIcon /> Book a Free Enquiry
              </a>
            </div>
          </FadeIn>

          <FadeIn from="left" delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {whyUs.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border bg-white p-4 font-body text-sm text-ink"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-teal">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-dots border-b border-divider px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-teal">
                Simple Process
              </p>
              <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide md:text-3xl">
                How It Works
              </h2>
              <div className="gold-rule mx-auto mt-4" />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 80}>
                <div className="card-hover h-full rounded-xl border border-border bg-white p-6" style={{ boxShadow: "var(--shadow-card)" }}>
                  <span className="font-heading text-3xl font-bold text-gold">{step.n}</span>
                  <h3 className="mt-2 font-heading text-lg uppercase tracking-wide">{step.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-body-text">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-dots-surface border-b border-divider py-14 md:py-20">
        <Testimonials />
      </section>

      {/* ── Location + contact CTA ── */}
      <section className="brand-dark px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <FadeIn from="right">
              <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold-soft">
                  Visit Us
                </p>
                <h2 className="mt-2 font-heading text-2xl uppercase tracking-wide text-cream md:text-3xl">
                  Ready to Start Driving?
                </h2>
                <div className="gold-rule mt-4" />
                <p className="mt-5 font-body leading-relaxed text-cream/75">
                  Drop by our school in Garkheda or message us on WhatsApp. We
                  reply quickly and help you pick the right course and batch.
                </p>

                <dl className="mt-6 space-y-3 font-body text-sm text-cream/80">
                  <div>
                    <dt className="font-semibold text-gold-soft">Address</dt>
                    <dd>
                      53 Jay Vishw Bharti Colony, Chetak Ghoda Chowk, Garkheda Rd,
                      Chhatrapati Sambhajinagar 431005 (Infront of SBI Bank)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gold-soft">Batch Timings</dt>
                    <dd>Morning 6 AM–12 PM · Evening 3 PM–8 PM · Mon–Sat</dd>
                  </div>
                </dl>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3 font-heading text-sm font-semibold tracking-wide text-white hover:bg-[#1eb858]"
                  >
                    <WaIcon /> WhatsApp Us
                  </a>
                  <a
                    href={CALL_URL}
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-md border border-gold/50 px-6 py-3 font-heading text-sm font-semibold tracking-wide text-cream hover:bg-gold hover:text-teal-deep"
                  >
                    <PhoneIcon /> +91 94222 64916
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn from="left" delay={100}>
              <div className="overflow-hidden rounded-xl border border-gold/30 shadow-gold">
                <iframe
                  src="https://www.google.com/maps?q=Samrat+Motor+Driving+School,+Garkheda,+Aurangabad,+Maharashtra+431005&output=embed"
                  width="100%"
                  className="block h-[280px] w-full md:h-[360px]"
                  style={{ border: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Samrat Motor Driving School location map"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
