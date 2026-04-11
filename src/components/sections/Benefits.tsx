"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const householdBenefits = [
  {
    title: "Clean, reliable waste pickup",
    description: "Never miss a collection day with scheduled reminders.",
  },
  {
    title: "Transparent pricing",
    description: "Know exactly what you're paying with no hidden fees.",
  },
  {
    title: "Recycle and earn rewards",
    description: "Get points for every recyclable item you collect.",
  },
];

const vendorBenefits = [
  {
    title: "Grow your customer base",
    description: "Get connected to households and businesses in your area.",
  },
  {
    title: "Manage pickups easily",
    description: "Track routes, schedules, and earnings from one dashboard.",
  },
  {
    title: "Get paid faster",
    description: "Receive payments directly to your account after each pickup.",
  },
];

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<"households" | "vendors">("households");
  const benefits = activeTab === "households" ? householdBenefits : vendorBenefits;

  return (
    <section id="benefits" className="py-20 lg:py-28 px-6 md:px-10 lg:px-[58px]" style={{ background: "linear-gradient(180deg, #F5FAF5 0%, #F0F5F0 100%)" }}>
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 px-0 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-4 max-w-[672px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-[#0BAE0B]/10 border border-[#0BAE0B]/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#0BAE0B]" />
            <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#0BAE0B] font-[family-name:var(--font-rethink)]">
              Our Value
            </span>
          </div>
          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1] text-center text-[#171C1A] font-[family-name:var(--font-jakarta)]">
            Benefits for <span className="text-[#09B309]">Everyone</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-[896px] w-full flex flex-col items-center gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center p-2 bg-white/80 border border-[#E3E8E3] rounded-full w-[384px] max-w-full h-[52px]">
            <motion.button
              onClick={() => setActiveTab("households")}
              className="flex-1 flex items-center justify-center gap-2 h-[36px] rounded-full text-sm font-semibold cursor-pointer"
              animate={{
                backgroundColor: activeTab === "households" ? "#09B309" : "transparent",
                color: activeTab === "households" ? "#FFFFFF" : "#6D7873",
                boxShadow: activeTab === "households" ? "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)" : "none",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 14V22M15 14V22M3 22H21" stroke={activeTab === "households" ? "#fff" : "#6D7873"} strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 10L12 2L21 10" stroke={activeTab === "households" ? "#fff" : "#6D7873"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Households
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("vendors")}
              className="flex-1 flex items-center justify-center gap-2 h-[36px] rounded-full text-sm font-semibold cursor-pointer"
              animate={{
                backgroundColor: activeTab === "vendors" ? "#09B309" : "transparent",
                color: activeTab === "vendors" ? "#FFFFFF" : "#6D7873",
                boxShadow: activeTab === "vendors" ? "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)" : "none",
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M3 7L12 4L21 7M3 7V17L12 20M3 7L12 10M21 7V17L12 20M21 7L12 10M12 10V20" stroke={activeTab === "vendors" ? "#fff" : "#6D7873"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Vendors
            </motion.button>
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      className="flex items-start gap-4 p-5 rounded-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ backgroundColor: "rgba(9,179,9,0.05)", x: 4, transition: { duration: 0.2 } }}
                    >
                      <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-[#09B309]/10 rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          {index === 0 && (
                            <>
                              <path d="M12 21V12" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" />
                              <path d="M3 7L12 2L21 7" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <rect x="2" y="5" width="20" height="14" rx="2" stroke="#09B309" strokeWidth="1.67" />
                              <path d="M2 10H22" stroke="#09B309" strokeWidth="1.67" />
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <path d="M12 8L15 11L12 14L9 11Z" stroke="#09B309" strokeWidth="1.67" strokeLinejoin="round" />
                              <path d="M12 2V8M12 14V22M2 12H8M16 12H22" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" />
                            </>
                          )}
                        </svg>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-[#171C1A] leading-[24px]">
                          {benefit.title}
                        </h4>
                        <p className="text-sm leading-[23px] text-[#6D7873]">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              className="flex-1 relative cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute -inset-3 rounded-3xl pointer-events-none"
                style={{
                  background: "rgba(9,179,9,0.05)",
                  filter: "blur(12px)",
                }}
              />
              <Image
                src="/images/benefits-household.png"
                alt="Happy household with clean environment"
                width={432}
                height={324}
                className="relative z-10 rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
