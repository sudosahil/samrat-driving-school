import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Car Driving Courses — 4-Wheeler Training in Aurangabad",
  description:
    "Enroll in Samrat Motor Driving School's 15-day 4-Wheeler car driving course in Chhatrapati Sambhajinagar. 120km on-road training, RTO guidance, flexible timings 5AM–9PM.",
  openGraph: {
    title: "Car Driving Courses — Samrat Motor Driving School",
    description: "15-day car driving course in Aurangabad. 120km on-road training, RTO support, flexible timings.",
    type: "website",
    url: "https://samratdrivingschool.in/courses/",
  },
  alternates: { canonical: "https://samratdrivingschool.in/courses/" },
};

const WHATSAPP_URL =
  "https://wa.me/919422264916?text=Hi%2C%20I%27m%20interested%20in%20joining%20Samrat%20Motor%20Driving%20School";

const services = [
  "Professional Trainers",
  "Free Mechanical Training",
  "Driving License Assistance",
  "RTO Consultancy",
  "Vehicle Documentation Consultation",
  "Defensive Driving Lessons",
];

const WaIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function CoursesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-surface border-b border-[#e5e5e5] px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-2">
            What We Offer
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Courses &amp; Training
          </h1>
        </div>
      </section>

      {/* Course card */}
      <section className="bg-white border-b border-[#e5e5e5] px-6 py-12 md:py-20" aria-label="4-Wheeler Car Training course details">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-3 text-center">
              Our Program
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
              4-Wheeler (Car) Training
            </h2>
          </FadeIn>

          <FadeIn delay={80}>
            <div
              className="rounded-md bg-white border border-border p-6 md:p-8"
              style={{ borderTop: "3px solid #3a6b35", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Course details */}
                <div>
                  <h3 className="font-heading text-lg uppercase tracking-wide mb-4 border-b border-border pb-2">
                    Course Details
                  </h3>
                  <ul className="space-y-3">
                    {[
                      ["Total Training Distance", "120 km on-road"],
                      ["Daily Distance", "Approx. 8 km per day"],
                      ["Course Duration", "15 days"],
                      ["Timings", "5:00 AM – 9:00 PM (choose your slot)"],
                      ["Practice Type", "Manual driving practice every day"],
                      ["Final Day", "Special technical session + reverse gear practice"],
                      ["RTO Support", "Exam guidance included"],
                    ].map(([label, value]) => (
                      <li key={label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-body text-sm font-semibold text-ink shrink-0 sm:min-w-[180px]">
                          {label}
                        </span>
                        <span className="font-body text-sm text-body-text">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Policies */}
                <div>
                  <h3 className="font-heading text-lg uppercase tracking-wide mb-4 border-b border-border pb-2">
                    Enrollment Policy
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Fee is non-refundable once paid.",
                      "One student per enrollment — not transferable to another person.",
                      "Choose any time slot between 5:00 AM and 9:00 PM.",
                      "Training conducted on real roads under expert supervision.",
                      "RTO license exam paperwork and test preparation included.",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 font-body text-sm text-body-text">
                        <span className="text-[#3a6b35] mt-0.5 shrink-0 font-bold">→</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 rounded-md bg-[#3a6b35] px-6 py-3 font-heading text-sm font-semibold text-white tracking-wide hover:bg-[#2d5229]"
                  >
                    <WaIcon />
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-surface px-6 py-12 md:py-20" aria-label="Services offered">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#3a6b35] uppercase mb-3 text-center">
              Beyond Training
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
              Services We Offer
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <FadeIn key={service} delay={i * 60}>
                <div
                  className="rounded-md bg-white border border-border px-5 py-4 flex items-center gap-3 card-hover"
                  style={{ borderTop: "3px solid #3a6b35", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <span className="h-2 w-2 rounded-sm bg-accent shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-ink font-medium">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
