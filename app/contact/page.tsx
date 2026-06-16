"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP = "917499862746";

const MAP_SRC =
  "https://www.google.com/maps?q=Samrat+Motor+Driving+School,+53+Jay+Vishw+Bharti+Colony,+Chetak+Ghoda+Chowk,+Garkheda+Rd,+Kasliwal+Nagar,+Aurangabad,+Maharashtra+431005&output=embed";

const WaIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("4-Wheeler Car Training");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      `Hi, my name is ${name}.`,
      `My number is ${phone}.`,
      `I'm interested in the ${course} course.`,
      message.trim() ? message.trim() : "",
    ]
      .filter(Boolean)
      .join(" ");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-md bg-white border border-form-border px-4 py-2.5 font-body text-sm text-ink placeholder-[#aaaaaa] focus:outline-none focus:border-[#0f3d3a] transition-colors";

  return (
    <>
      {/* Page header */}
      <section className="bg-surface border-b border-[#e5e5e5] px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-2">
            Get In Touch
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact info + map */}
            <div className="space-y-8">
              <div>
                <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-2">
                  Our Location
                </p>
                <h2 className="font-heading text-xl uppercase tracking-wide mb-4">
                  Visit Us
                </h2>
                <address
                  className="not-italic font-body text-sm text-body-text space-y-3 rounded-md bg-white border border-border p-5"
                  style={{ borderTop: "3px solid #0f3d3a", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <div>
                    <p className="text-ink font-semibold text-xs uppercase tracking-wide mb-1">
                      Address
                    </p>
                    <p>
                      53 Jay Vishw Bharti Colony, Chetak Ghoda Chowk,
                      Garkheda Rd, Kasliwal Nagar, Garkheda,
                      Chhatrapati Sambhajinagar, Maharashtra 431005
                    </p>
                    <p className="text-muted text-xs mt-1">
                      Landmark: Infront of SBI Bank
                    </p>
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-xs uppercase tracking-wide mb-1">
                      Phone (Enquiries)
                    </p>
                    <a href="tel:+919422264916" className="hover:text-[#0f3d3a] transition-colors">
                      +91 94222 64916
                    </a>
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-xs uppercase tracking-wide mb-1">
                      WhatsApp
                    </p>
                    <a href="https://wa.me/917499862746" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f3d3a] transition-colors">
                      +91 74998 62746
                    </a>
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-xs uppercase tracking-wide mb-1">
                      Batch Timings
                    </p>
                    <p>Morning: 6:00 AM – 12:00 PM</p>
                    <p>Evening: 3:00 PM – 8:00 PM</p>
                    <p className="text-muted text-xs mt-1">Office: 6:00 PM – 8:00 PM &middot; Monday to Saturday</p>
                  </div>
                  <div>
                    <p className="text-ink font-semibold text-xs uppercase tracking-wide mb-1">
                      Languages
                    </p>
                    <p>Hindi &amp; Marathi</p>
                  </div>
                </address>
              </div>

              {/* Map */}
              <div>
                <h2 className="font-heading text-xl uppercase tracking-wide mb-3">
                  Find Us on Map
                </h2>
                <div className="rounded-md overflow-hidden border border-border">
                  <iframe
                    src={MAP_SRC}
                    width="100%"
                    className="h-[250px] md:h-[400px] block"
                    style={{ border: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Samrat Motor Driving School location map"
                  />
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div>
              <p className="font-body text-xs font-semibold tracking-widest text-[#0f3d3a] uppercase mb-2">
                Quick Enquiry
              </p>
              <h2 className="font-heading text-xl uppercase tracking-wide mb-4">
                Send an Enquiry
              </h2>
              <form
                onSubmit={handleSubmit}
                className="rounded-md bg-white border border-border p-6 space-y-5"
                style={{ borderTop: "3px solid #0f3d3a", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                noValidate
              >
                <div>
                  <label htmlFor="name" className="block font-body text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name" type="text" required value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="phone" type="tel" required value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    placeholder="Your mobile number"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block font-body text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                    Course Interest
                  </label>
                  <select
                    id="course" value={course}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCourse(e.target.value)}
                    className={inputClass}
                  >
                    <option value="2-Wheeler Training">2-Wheeler Training</option>
                    <option value="4-Wheeler Car Training">4-Wheeler Car Training</option>
                    <option value="2 + 4 Wheeler Combo">2 + 4 Wheeler Combo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-body text-xs font-semibold text-ink uppercase tracking-wide mb-1.5">
                    Message{" "}
                    <span className="text-muted font-normal normal-case tracking-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message" rows={4} value={message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                    placeholder="Any questions or preferred timing?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 rounded-md bg-[#0f3d3a] px-6 py-3 font-heading text-sm font-semibold text-white tracking-wide hover:bg-[#0a2c2a]"
                >
                  <WaIcon />
                  Send via WhatsApp
                </button>

                <p className="font-body text-xs text-muted text-center">
                  Clicking the button will open WhatsApp with your message pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
