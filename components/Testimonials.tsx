import FadeIn from "@/components/FadeIn";

const AVATAR_COLORS = ["#1a1a1a", "#e8a020", "#444444"];

const reviews = [
  {
    name: "Rahul Deshmukh",
    location: "Aurangabad, MH",
    initials: "RD",
    text: "It was an amazing experience. It boosted my confidence and made me drive coming out of my comfort zone. I also learnt safe driving techniques. Every trainer was helpful and ready to solve queries every time.",
  },
  {
    name: "Priya Kulkarni",
    location: "Aurangabad, MH",
    initials: "PK",
    text: "Had a great experience while learning. I learnt driving on the scale of 0 to 100 in only 15 days! The staff and teachers are very helpful, polite and patient. They even helped on the final exam day. Overall best class in Aurangabad.",
  },
  {
    name: "Santosh Jadhav",
    location: "Garkheda, Aurangabad",
    initials: "SJ",
    text: "Perfect driving learning school. Staff is very good and very supportive in all aspects — from documentation to final car learning. Giving full concentration on each individual. I strongly recommend this school.",
  },
  {
    name: "Meena Pawar",
    location: "Aurangabad, MH",
    initials: "MP",
    text: "The Name of Perfection tagline truly suits Samrat Driving School. The sir and all the instructors are very helpful and teach driving in a smooth manner. Highly recommended.",
  },
  {
    name: "Akash Shinde",
    location: "Chhatrapati Sambhajinagar",
    initials: "AS",
    text: "Samrat Driving Classes are the best for learning driving properly within a moderate period of time. Trainers are experienced and professional. Enhanced my confidence completely.",
  },
  {
    name: "Vijay Nair",
    location: "Aurangabad, MH",
    initials: "VN",
    text: "Excellent training with real road exposure. The structured 15-day course is well planned and the instructors are very patient with beginners. Got my license on the first attempt.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-accent text-base" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Student testimonials">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <FadeIn>
          <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide mb-8 text-center">
            What Students Say
          </h2>
        </FadeIn>

        {/* Overall rating badge */}
        <FadeIn delay={60}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 rounded-md bg-surface border border-border p-5 max-w-md mx-auto"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <div className="text-center sm:text-left">
                <p className="font-heading text-4xl font-bold text-ink leading-none">4.8</p>
                <StarRating />
              </div>
            </div>
            <div className="text-center sm:text-left sm:border-l sm:border-border sm:pl-4">
              <p className="font-body text-sm font-semibold text-ink">Based on Google Reviews</p>
              <p className="font-body text-xs text-muted mt-0.5">Chhatrapati Sambhajinagar</p>
            </div>
          </div>
        </FadeIn>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 70}>
              <article
                className="rounded-md bg-white border border-border p-5 flex flex-col gap-3 card-hover h-full"
                style={{ borderTop: "3px solid #3a6b35", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                {/* Reviewer info */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-body font-bold text-sm"
                    style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                    aria-hidden="true"
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-ink leading-tight">{review.name}</p>
                    <p className="font-body text-xs text-muted leading-tight">{review.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <StarRating />

                {/* Review text */}
                <p className="font-body text-sm text-body-text leading-relaxed flex-1">
                  {review.text}
                </p>

                {/* via Google badge */}
                <div className="flex items-center justify-end gap-1.5 pt-1 border-t border-border mt-1">
                  <GoogleIcon />
                  <span className="font-body text-xs text-muted">via Google</span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
