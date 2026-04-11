import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold text-white tracking-wider">
              SAMRAT
            </p>
            <p className="text-xs font-body text-white/60 mt-0.5">
              Motor Driving School
            </p>
            <p className="font-body text-[#e8a020] text-sm mt-3">
              &ldquo;The Name of Perfection&rdquo;
            </p>
            <p className="font-body text-xs text-white/40 mt-4">
              Est. 2000 &bull; Chhatrapati Sambhajinagar
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-heading text-white text-sm tracking-widest mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-white/65 hover:text-[#3a6b35] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white text-sm tracking-widest mb-4 uppercase">
              Contact
            </h3>
            <address className="not-italic font-body text-sm text-white/65 space-y-2.5">
              <p>
                53 Jay Vishw Bharti Colony, Chetak Ghoda Chowk,
                Garkheda Rd, Kasliwal Nagar, Garkheda,
                Chhatrapati Sambhajinagar, Maharashtra 431005
              </p>
              <p className="text-white/40 text-xs">Infront of SBI Bank</p>
              <p>
                <a href="tel:+919422264916" className="hover:text-[#3a6b35] transition-colors">
                  +91 94222 64916
                </a>
              </p>
              <p>Mon – Sat &nbsp;|&nbsp; 5:00 AM – 9:00 PM</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-white/35">
            &copy; 2025 Samrat Motor Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
