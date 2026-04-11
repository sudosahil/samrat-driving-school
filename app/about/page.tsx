import type { Metadata } from "next";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "About Us — Samrat Motor Driving School Since 2000",
  description:
    "Samrat Motor Driving School in Chhatrapati Sambhajinagar has been training drivers since 2000. Founded by Vijay Rode and Gayatri Rode. Learn about our experienced team and approach.",
  openGraph: {
    title: "About Samrat Motor Driving School — Aurangabad",
    description: "25+ years of trusted car driving training in Chhatrapati Sambhajinagar. Founded by Vijay Rode.",
    type: "website",
    url: "https://samratdrivingschool.in/about/",
  },
  alternates: { canonical: "https://samratdrivingschool.in/about/" },
};

const services = [
  "Professional Trainers",
  "Free Mechanical Training",
  "Driving License Assistance",
  "RTO Consultancy",
  "Vehicle Documentation Consultation",
  "Defensive Driving Lessons",
];

const whyChooseUs = [
  {
    title: "Experienced Instructors",
    desc: "Our trainers have years of on-road teaching experience and are patient, professional, and communicative.",
  },
  {
    title: "Flexible Timings",
    desc: "We're open from 5:00 AM to 9:00 PM, Monday to Saturday. Choose the slot that fits your schedule.",
  },
  {
    title: "Structured Curriculum",
    desc: "A clear 15-day, 120 km program with daily goals — so you always know where you stand.",
  },
  {
    title: "Patient Teaching Style",
    desc: "We understand every learner is different. Our instructors adapt to your pace, not the other way around.",
  },
  {
    title: "Full RTO Support",
    desc: "From paperwork to exam prep, we guide you through every step of the license process.",
  },
];

const mediaItems = [
  { label: "School Entrance", aspectRatio: "4/3" as const },
  { label: "Instructor with Student", aspectRatio: "4/3" as const },
  { label: "Training Session", aspectRatio: "4/3" as const },
  { label: "Car Fleet Photo", aspectRatio: "4/3" as const },
  { label: "Car Fleet Video", aspectRatio: "16/9" as const, isVideo: true },
  { label: "RTO Success", aspectRatio: "4/3" as const },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-surface border-b border-border px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="font-body text-xs tracking-widest text-muted uppercase mb-2">
            Our Story
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        {/* School history */}
        <section aria-label="School history">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-6 text-center">
              25+ Years of Excellence
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <div
              className="rounded-md bg-white border border-border p-6 md:p-8 max-w-3xl mx-auto"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <p className="font-body text-body-text leading-relaxed mb-4">
                Samrat Motor Driving School was established in 2000 with a single
                goal: to produce safe, confident, and skilled drivers in
                Chhatrapati Sambhajinagar. Over 25 years later, we remain one of
                Aurangabad&rsquo;s most trusted names in driving education.
              </p>
              <p className="font-body text-body-text leading-relaxed mb-4">
                Founded and run by <strong className="text-ink">Vijay Rode</strong> and{" "}
                <strong className="text-ink">Gayatri Rode</strong>, the school
                has helped thousands of students across the region earn their
                driving license and take to the roads with confidence.
              </p>
              <p className="font-body text-body-text leading-relaxed">
                Our training combines real-road experience with structured
                technical sessions, RTO guidance, and a patient, student-first
                teaching approach that has kept families and individuals coming
                back to us for over two decades.
              </p>
            </div>
          </FadeIn>
        </section>

        <hr className="border-[#e8a020]/30" />

        {/* Why choose us */}
        <section aria-label="Why choose Samrat">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-6 text-center">
              Why Choose Us
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 70}>
                <article
                  className="rounded-md bg-white border border-border p-5 card-hover h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <h3 className="font-heading text-base uppercase tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {item.desc}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <hr className="border-[#e8a020]/30" />

        {/* Services */}
        <section aria-label="Services offered">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-6 text-center">
              Services We Offer
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <FadeIn key={service} delay={i * 60}>
                <div
                  className="rounded-md bg-white border border-border px-5 py-4 flex items-center gap-3 card-hover"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <span className="h-2 w-2 rounded-sm bg-accent shrink-0" aria-hidden="true" />
                  <span className="font-body text-sm text-ink font-medium">{service}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <hr className="border-[#e8a020]/30" />

        {/* Media grid */}
        <section aria-label="Photo and video gallery">
          <FadeIn>
            <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-6 text-center">
              Gallery
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems.map((item, i) => (
              <FadeIn key={item.label} delay={i * 60}>
                <MediaPlaceholder
                  label={item.label}
                  aspectRatio={item.aspectRatio}
                  showPlayIcon={item.isVideo}
                />
              </FadeIn>
            ))}
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-surface border-y border-border">
        <Testimonials />
      </section>
    </>
  );
}
