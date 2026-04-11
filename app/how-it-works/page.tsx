import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "How It Works — Learn Driving in 4 Simple Steps",
  description:
    "See how Samrat Motor Driving School works — enroll, train daily on real roads, prepare for RTO exam, and get your driving license. Simple process in Chhatrapati Sambhajinagar.",
  openGraph: {
    title: "How It Works — Samrat Motor Driving School",
    description: "Four simple steps: enroll, train, RTO prep, get licensed. Car driving classes in Aurangabad.",
    type: "website",
    url: "https://samratdrivingschool.in/how-it-works/",
  },
  alternates: { canonical: "https://samratdrivingschool.in/how-it-works/" },
};

const steps = [
  {
    number: "01",
    title: "Enroll",
    description:
      "Visit us or call/WhatsApp to register. Simple process, no hassle. Just bring yourself — we handle the rest.",
  },
  {
    number: "02",
    title: "Training Begins",
    description:
      "Daily sessions with experienced, patient instructors on real roads. Approx. 8 km per day, 15 days total. You choose your preferred time slot between 5 AM and 9 PM.",
  },
  {
    number: "03",
    title: "RTO Preparation",
    description:
      "We guide you through the license exam paperwork and test process. Our team has helped hundreds of students clear their RTO exam with confidence.",
  },
  {
    number: "04",
    title: "Get Your License",
    description:
      "Drive confidently with your official government-issued license. By the end of 15 days, you'll have the skill and the paperwork to get on the road legally.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/919422264916?text=Hi%2C%20I%27m%20interested%20in%20joining%20Samrat%20Motor%20Driving%20School";

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-surface border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="font-body text-xs tracking-widest text-muted uppercase mb-2">
            The Process
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
            How It Works
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <FadeIn>
          <p className="font-body text-body-text mb-12 text-center max-w-2xl mx-auto">
            Getting your driving license with Samrat Motor Driving School is
            straightforward. Here&rsquo;s exactly what to expect from day one to
            the day you hold your license.
          </p>
        </FadeIn>

        {/* Steps */}
        <ol className="relative space-y-0" aria-label="Process steps">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 100}>
              <li className="flex gap-5 md:gap-8">
                {/* Number column */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink">
                    <span className="font-heading text-base font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="mt-2 w-0.5 flex-1 min-h-[40px] bg-border"
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`${index < steps.length - 1 ? "pb-10" : "pb-0"}`}>
                  <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wide mb-2">
                    {step.title}
                  </h2>
                  <p className="font-body text-sm md:text-base text-body-text leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        {/* CTA */}
        <FadeIn delay={200}>
          <div
            className="mt-12 rounded-md bg-white border border-border p-6 text-center"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <h2 className="font-heading text-xl uppercase tracking-wide mb-2">
              Ready to Start?
            </h2>
            <p className="font-body text-sm text-body-text mb-5">
              Enroll today and be on the road within 15 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 font-heading text-sm font-semibold text-white tracking-wide hover:bg-[#333333]"
              >
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-md border border-ink px-6 py-3 font-heading text-sm font-semibold text-ink hover:bg-ink hover:text-white tracking-wide transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
