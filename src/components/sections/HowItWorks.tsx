"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@carbon/icons-react";

const steps = [
  {
    step: "Step 01",
    title: "Book Pickup",
    description: "Schedule waste collection right from your phone at your convenience.",
  },
  {
    step: "Step 02",
    title: "Track in Real Time",
    description: "Know exactly when your vendor is on the way with live GPS tracking.",
  },
  {
    step: "Step 03",
    title: "Get Rewarded",
    description: "Earn points for consistent recycling and eco-friendly practices.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 px-5 md:px-10 lg:px-[58px] pb-20 overflow-hidden bg-[#F4FAF4] dark:bg-[#131A14]"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(9,179,9,0.25) 0%, rgba(9,179,9,0.15) 40%, rgba(9,179,9,0.06) 70%, transparent 100%)",
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center gap-10 lg:gap-14">
        <motion.div
          className="flex flex-col items-center gap-3 max-w-[672px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-[#0BAE0B] border border-[#0BAE0B]/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs font-bold tracking-[1.2px] uppercase text-white font-[family-name:var(--font-rethink)]">
              Process
            </span>
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[34px] lg:leading-[1] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)] max-w-[297px] lg:max-w-none">
            Simple waste management in three easy steps
          </h2>
        </motion.div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[30px] lg:gap-[48px]">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative flex-1 w-full max-w-[353px] lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <motion.div
                className="relative flex flex-col items-start gap-2 bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[15px] lg:rounded-2xl"
                style={{ padding: "38px 30px 30px" }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
              >
                <div className="absolute left-[31px] -top-[15px] px-3 py-[5.3px] bg-[#09B309] rounded-full z-10">
                  <span className="text-[11px] lg:text-xs font-bold text-white">{step.step}</span>
                </div>

                <div className="w-[53px] h-[53px] lg:w-14 lg:h-14 flex items-center justify-center bg-[#09B309]/10 rounded-[15px] lg:rounded-2xl">
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" className="lg:w-6 lg:h-6">
                    {index === 0 && (
                      <>
                        <path d="M8 2V5M16 2V5" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#09B309" strokeWidth="2" />
                        <path d="M3 10H21" stroke="#09B309" strokeWidth="2" />
                        <path d="M12 14V18" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <circle cx="12" cy="12" r="8" stroke="#09B309" strokeWidth="2" />
                        <path d="M12 7V12" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <path d="M3 8H21" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 8V20" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 12H19" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5 3H19" stroke="#09B309" strokeWidth="2" strokeLinecap="round" />
                      </>
                    )}
                  </svg>
                </div>

                <h3 className="text-[19px] lg:text-[20px] font-bold leading-[26px] lg:leading-[28px] text-[#171C1A] dark:text-white mt-3">
                  {step.title}
                </h3>
                <p className="text-[15px] lg:text-base leading-[25px] lg:leading-[26px] text-[#6D7873]">
                  {step.description}
                </p>
              </motion.div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-[24px] top-1/2 w-[48px] border-t-[1.6px] border-dashed border-[#09B309]/30 z-10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.a
          href="/waitlist"
          className="flex items-center gap-4 px-8 h-12 bg-[#09B309] text-white text-base font-semibold rounded-full shadow-[0px_10px_15px_-3px_rgba(9,179,9,0.2),0px_4px_6px_-4px_rgba(9,179,9,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Your First Pickup
          <ArrowRight size={16} />
        </motion.a>
      </div>
    </section>
  );
}
