import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Driving Courses — Two-Wheeler & Four-Wheeler Training in Aurangabad",
  description:
    "Enroll at Samrat Motor Driving School in Chhatrapati Sambhajinagar. Two-wheeler, four-wheeler, and 2+4 combo courses with RTO guidance. Flexible morning & evening batches, instruction in Hindi/Marathi.",
  openGraph: {
    title: "Driving Courses — Samrat Motor Driving School",
    description: "Two-wheeler, four-wheeler & combo driving courses in Aurangabad. On-road training, RTO support, flexible batches.",
    type: "website",
    url: "https://samratdrivingschool.in/courses/",
  },
  alternates: { canonical: "https://samratdrivingschool.in/courses/" },
};

const WHATSAPP_URL =
  "https://wa.me/917499862746?text=Hi%2C%20I%27m%20interested%20in%20joining%20Samrat%20Motor%20Driving%20School";

const courses = [
  {
    title: "2-Wheeler Training",
    badge: "Bikes & Scooters",
    details: [
      ["Vehicles", "Geared & gearless two-wheelers"],
      ["Course Duration", "On enquiry"],
      ["Batches", "Morning 6 AM–12 PM · Evening 3 PM–8 PM"],
      ["Focus", "Balance, road sense & traffic handling"],
      ["RTO Support", "Exam guidance included"],
    ],
  },
  {
    title: "4-Wheeler Car Training",
    badge: "Most Popular",
    details: [
      ["Total Training Distance", "120 km on-road"],
      ["Daily Distance", "Approx. 8 km per day"],
      ["Course Duration", "15 days"],
      ["Batches", "Morning 6 AM–12 PM · Evening 3 PM–8 PM"],
      ["Practice Type", "Manual driving practice every day"],
      ["Final Day", "Technical session + reverse gear practice"],
      ["RTO Support", "Exam guidance included"],
    ],
  },
  {
    title: "2 + 4 Wheeler Combo",
    badge: "Best Value",
    details: [
      ["Includes", "Two-wheeler + four-wheeler training"],
      ["Course Duration", "On enquiry"],
      ["Batches", "Morning 6 AM–12 PM · Evening 3 PM–8 PM"],
      ["Licenses", "Support for both two & four wheeler"],
      ["RTO Support", "Full guidance for both"],
    ],
  },
];

const enrollmentPolicy = [
  "One student per enrollment — not transferable to another person.",
  "Choose a morning (6 AM–12 PM) or evening (3 PM–8 PM) batch.",
  "Training conducted on real roads under expert supervision.",
  "Instruction available in Hindi and Marathi.",
  "RTO license exam paperwork and test preparation included.",
];

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
          <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-2">
            What We Offer
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Courses &amp; Training
          </h1>
        </div>
      </section>

      {/* Course cards */}
      <section className="bg-white border-b border-[#e5e5e5] px-6 py-12 md:py-20" aria-label="Driving course details">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-3 text-center">
              Our Programs
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
              Choose Your Course
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {courses.map((course, i) => (
              <FadeIn key={course.title} delay={i * 80}>
                <div
                  className="h-full flex flex-col rounded-md bg-white border border-border p-6"
                  style={{ borderTop: "3px solid #0f3d3a", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-border">
                    <h3 className="font-heading text-lg uppercase tracking-wide">
                      {course.title}
                    </h3>
                    <span className="shrink-0 rounded-md bg-accent/10 border border-accent/30 px-2 py-0.5 font-body text-xs text-accent font-semibold">
                      {course.badge}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {course.details.map(([label, value]) => (
                      <li key={label} className="flex flex-col gap-0.5">
                        <span className="font-body text-xs font-semibold text-ink uppercase tracking-wide">
                          {label}
                        </span>
                        <span className="font-body text-sm text-body-text">{value}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-[#0f3d3a] px-5 py-2.5 font-heading text-sm font-semibold text-white tracking-wide hover:bg-[#0a2c2a]"
                  >
                    <WaIcon />
                    Book via WhatsApp
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment policy */}
      <section className="bg-surface border-b border-[#e5e5e5] px-6 py-12 md:py-20" aria-label="Enrollment policy">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-3 text-center">
              Good to Know
            </p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
              Enrollment Policy
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div
              className="rounded-md bg-white border border-border p-6 md:p-8"
              style={{ borderTop: "3px solid #0f3d3a", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <ul className="space-y-3">
                {enrollmentPolicy.map((point) => (
                  <li key={point} className="flex items-start gap-2 font-body text-sm text-body-text">
                    <span className="text-[#0f3d3a] mt-0.5 shrink-0 font-bold">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-white px-6 py-12 md:py-20" aria-label="Services offered">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-3 text-center">
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
                  style={{ borderTop: "3px solid #0f3d3a", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
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
