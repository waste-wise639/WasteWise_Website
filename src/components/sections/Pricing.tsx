"use client";

import { motion } from "framer-motion";
import { ArrowRight, Checkmark } from "@carbon/icons-react";

const householdFeatures = [
  "Weekly waste collection",
  "Real-time tracking",
  "Recycling rewards",
  "24/7 customer support",
];

const vendorFeatures = [
  "Priority customer access",
  "Digital payment processing",
  "Route optimization tools",
  "Marketing & visibility support",
  "Training & onboarding",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-8 pb-28 lg:py-20 lg:pb-28 px-5 md:px-10 lg:px-[58px] isolate bg-gradient-to-b from-white via-[#F5FAF5] to-white dark:from-[#0F1210] dark:via-[#131A14] dark:to-[#0F1210]"
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[72px] lg:-top-4 w-[322px] lg:w-[600px] h-[322px] lg:h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(9,179,9,0.1)", filter: "blur(17px)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-6 lg:gap-14 px-0 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-[15px] lg:gap-4 max-w-[672px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#09B309]">
            Pricing
          </span>
          <h2 className="text-[34px] lg:text-[48px] font-extrabold leading-[34px] lg:leading-[1] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[14px] lg:text-lg leading-[18px] lg:leading-7 text-center text-[#6D7873] max-w-[292px] lg:max-w-none">
            Pay only for the service you need. Whether you&apos;re a household or a waste professional.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-[896px] w-full items-center lg:items-stretch">
          {/* Household Card */}
          <motion.div
            className="flex-1 w-full max-w-[353px] lg:max-w-none flex flex-col p-10 gap-2 bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-3xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 w-fit bg-[#09B309]/10 rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#09B309" strokeWidth="1" />
                <path d="M10 2L7 5M9 1L11 3" stroke="#09B309" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold text-[#09B309]">Early Bird</span>
            </div>

            <h3 className="text-[20px] font-bold leading-7 text-[#171C1A] dark:text-white mt-4">Household Pickup</h3>

            <div className="flex items-baseline gap-1">
              <span className="text-[48px] font-bold leading-[48px] text-[#171C1A] dark:text-white">&#8358;2,500</span>
              <span className="text-base text-[#6D7873]">/week</span>
            </div>

            <p className="text-sm leading-5 text-[#6D7873] mt-2">
              Perfect for homes looking for reliable waste collection.
            </p>

            <div className="flex flex-col gap-3 py-6">
              {householdFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#09B309]/10 flex items-center justify-center shrink-0">
                    <Checkmark size={12} className="text-[#09B309]" />
                  </div>
                  <span className="text-sm text-[#171C1A] dark:text-white">{f}</span>
                </div>
              ))}
            </div>

            <motion.button
              className="flex items-center justify-center gap-4 w-full h-12 bg-[#171C1A] dark:bg-white text-white dark:text-[#171C1A] text-base font-semibold rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Vendor Card */}
          <motion.div
            className="flex-1 w-full max-w-[353px] lg:max-w-none flex flex-col p-10 gap-2 bg-[#171C1A] border border-[#171C1A] rounded-3xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="flex items-center gap-1.5 px-3 py-1 w-fit bg-[#09B309] rounded-full">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke="#fff" strokeWidth="1" />
                <path d="M10 2L7 5M9 1L11 3" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold text-white">Partner Opportunity</span>
            </div>

            <h3 className="text-[20px] font-bold leading-7 text-white mt-4">Vendor Network</h3>

            <div className="flex items-baseline gap-1">
              <span className="text-[48px] font-bold leading-[48px] text-white">Partner</span>
              <span className="text-base text-white/60">Rate</span>
            </div>

            <p className="text-sm leading-5 text-white/70 mt-2">
              For waste professionals ready to grow their business.
            </p>

            <div className="flex flex-col gap-3 py-6">
              {vendorFeatures.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#09B309] flex items-center justify-center shrink-0">
                    <Checkmark size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-white/90">{f}</span>
                </div>
              ))}
            </div>

            <motion.button
              className="flex items-center justify-center gap-4 w-full h-12 bg-[#09B309] text-white text-base font-semibold rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Join Waitlist
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
