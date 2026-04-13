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

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index?: number }) {
  return (
    <motion.div
      className="flex flex-col w-full md:w-[389px] p-[22px] md:p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[15px] md:rounded-2xl shrink-0 md:mx-3"
      whileHover={{ y: -4, borderColor: "rgba(9,179,9,0.3)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index ? index * 0.1 : 0 }}
    >
      <svg width="29" height="29" viewBox="0 0 32 32" fill="none" className="mb-[15px] md:mb-4 md:w-8 md:h-8">
        <path d="M4 4H12V20H4V4Z" stroke="rgba(9,179,9,0.4)" strokeWidth="2.42" />
        <path d="M20 4H28V20H20V4Z" stroke="rgba(9,179,9,0.4)" strokeWidth="2.42" />
      </svg>

      <p className="text-[15px] md:text-base leading-[24px] md:leading-[26px] text-white/85 flex-1">
        {t.quote}
      </p>

      <div className="flex items-center gap-[11px] md:gap-3 pt-[15px] md:pt-6 mt-auto border-t border-white/10">
        <div
          className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-[13px] md:text-sm font-bold text-[#09B309]"
          style={{ background: "linear-gradient(135deg, rgba(9,179,9,0.2) 0%, rgba(9,179,9,0.4) 100%)" }}
        >
          {t.initials}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] md:text-sm font-semibold text-white">{t.name}</span>
          <span className="text-[11px] md:text-xs text-white/50">{t.role}</span>
        </div>
        <div className="ml-auto flex gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <StarFilled key={i} size={13} className="text-[#09B309] md:w-[14px] md:h-[14px]" />
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
      className="py-9 pb-20 md:py-20 px-5 md:px-0"
      style={{ background: "linear-gradient(124.11deg, #111714 0%, #172617 100%)" }}
    >
      <div className="max-w-[1280px] mx-auto md:px-10 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-1 md:gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#09B309]">
            Testimonials
          </span>
          <h2 className="text-[24px] md:text-[32px] lg:text-[48px] font-extrabold leading-[48px] md:leading-[1] text-center text-white font-[family-name:var(--font-rethink)]">
            Trusted by Early Adopters
          </h2>
          <p className="text-base md:text-lg leading-5 md:leading-7 text-center text-white/60">
            Real stories from the people shaping a cleaner Nigeria with us
          </p>
        </motion.div>
      </div>

      {/* Desktop: Marquee */}
      <div className="hidden md:block">
        <Marquee speed={40} pauseOnHover gradientColor="transparent" gradientWidth={0}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>

      {/* Mobile: Stacked cards */}
      <div className="flex md:hidden flex-col gap-[15px]">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
