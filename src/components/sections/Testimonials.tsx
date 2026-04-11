"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { StarFilled } from "@carbon/icons-react";

const testimonials = [
  {
    quote: "WasteWise made it easy for our estate to keep the environment clean. Pickups are on time and reliable",
    initials: "GO",
    name: "Grace O.",
    role: "Resident",
  },
  {
    quote: "We gained 50 new clients in one month through WasteWise. The platform is a game changer for local vendors.",
    initials: "GE",
    name: "GreenEarth Waste Ltd.",
    role: "Waste Vendor",
  },
  {
    quote: "The recycling rewards keep me motivated. Every time I recycle, I feel like I'm making a real difference.",
    initials: "AM",
    name: "Amina M.",
    role: "University Student",
  },
  {
    quote: "Before, I used to miss collection days. Now with WasteWise reminders, everything is on schedule. Huge relief!",
    initials: "AM",
    name: "Tunde A.",
    role: "Civil Engineer",
  },
  {
    quote: "This is more than just an app — it feels like a community. Seeing my neighborhood's progress makes me proud.",
    initials: "AM",
    name: "Ngozi L.",
    role: "Community Organizer",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <motion.div
      className="flex flex-col w-[389px] h-[288px] p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shrink-0 mx-3"
      whileHover={{ y: -4, borderColor: "rgba(9,179,9,0.3)" }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-4">
        <path d="M4 4H12V20H4V4Z" stroke="rgba(9,179,9,0.4)" strokeWidth="2.67" />
        <path d="M20 4H28V20H20V4Z" stroke="rgba(9,179,9,0.4)" strokeWidth="2.67" />
      </svg>

      <p className="text-base leading-[26px] text-white/85 flex-1">
        {t.quote}
      </p>

      <div className="flex items-center gap-3 pt-6 mt-auto border-t border-white/10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-[#09B309]"
          style={{ background: "linear-gradient(135deg, rgba(9,179,9,0.2) 0%, rgba(9,179,9,0.4) 100%)" }}
        >
          {t.initials}
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-white">{t.name}</span>
          <span className="text-xs text-white/50">{t.role}</span>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <StarFilled key={i} size={14} className="text-[#09B309]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ background: "linear-gradient(124.11deg, #111714 0%, #172617 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#09B309]">
            Testimonials
          </span>
          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1] text-center text-white font-[family-name:var(--font-jakarta)]">
            Trusted by Early <span className="text-[#09B309]">Adopters</span>
          </h2>
          <p className="text-lg leading-7 text-center text-white/60">
            Real stories from the people shaping a cleaner Nigeria with us
          </p>
        </motion.div>
      </div>

      <Marquee speed={40} pauseOnHover gradientColor="transparent" gradientWidth={0}>
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </Marquee>
    </section>
  );
}
