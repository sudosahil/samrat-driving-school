import Image from "next/image";
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
            <Image
              src="/images/bottom.jpeg"
              alt="Samrat Motor Driving School"
              width={1600}
              height={1600}
              className="h-28 w-auto object-contain rounded-md"
            />
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
                    className="font-body text-sm text-white/65 hover:text-[#0f3d3a] transition-colors"
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
                Enquiries:{" "}
                <a href="tel:+919422264916" className="hover:text-[#0f3d3a] transition-colors">
                  +91 94222 64916
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/917499862746" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f3d3a] transition-colors">
                  +91 74998 62746
                </a>
              </p>
              <p>Mon – Sat</p>
              <p className="text-white/40 text-xs">
                Morning 6 AM–12 PM &middot; Evening 3 PM–8 PM
              </p>
              <p className="text-white/40 text-xs">Instruction in Hindi &amp; Marathi</p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-white/35">
            &copy; 2026 Samrat Motor Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
