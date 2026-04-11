"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, PlayFilledAlt } from "@carbon/icons-react";

const avatars = ["A", "B", "C", "D"];

export default function Hero() {
  return (
    <section className="pt-[80px] bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-6 md:px-10 lg:px-[58px] py-16 lg:py-20">
        <div className="flex-1 flex flex-col gap-4">
          <motion.div
            className="flex items-center gap-2 px-4 py-1.5 w-fit bg-[#09B309]/10 border border-[#09B309]/20 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.17v11.66M1.17 7h11.66" stroke="#09B309" strokeWidth="1.17" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.3px] uppercase text-[#09B309]">
              Now Live in Port Harcourt
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-[40px] lg:text-[60px] font-extrabold leading-[1] text-[#171C1A] font-[family-name:var(--font-rethink)]">
              Smart Waste{"\n"}Management for a
            </h1>
            <div className="relative w-fit mt-2">
              <span className="text-[40px] lg:text-[60px] font-extrabold leading-[1] text-[#09B309] font-[family-name:var(--font-rethink)]">
                Cleaner Future
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="17" viewBox="0 0 432 17" fill="none">
                <path d="M3 10C100 3 330 3 429 10" stroke="#09B309" strokeWidth="4.3" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.p
            className="max-w-[512px] text-lg leading-[29px] text-[#6D7873] mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WasteWise connects households and businesses with verified waste vendors for reliable, eco-friendly collection and recycling.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 px-8 h-12 bg-[#09B309] text-white text-base font-semibold rounded-full shadow-[0px_10px_15px_-3px_rgba(9,179,9,0.25),0px_4px_6px_-4px_rgba(9,179,9,0.25)]"
            >
              Join Vendor Waitlist
              <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 px-8 h-12 bg-transparent border border-[#E3E8E3] text-[#171C1A] text-base font-medium rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            >
              <PlayFilledAlt size={16} className="text-[#171C1A]" />
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            className="flex items-center gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#171C1A] rounded-xl"
            >
              <Image src="/images/ww-apple.png" alt="Apple" width={20} height={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-white/80 leading-[10px]">Download on the</span>
                <span className="text-sm font-semibold text-white leading-[18px]">App Store</span>
              </div>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#171C1A] rounded-xl"
            >
              <Image src="/images/ww-playstore.png" alt="Google Play" width={20} height={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-white/80 leading-[10px]">Get it on</span>
                <span className="text-sm font-semibold text-white leading-[18px]">Google Play</span>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              {avatars.map((letter, i) => (
                <div
                  key={letter}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white"
                  style={{
                    background: "linear-gradient(135deg, rgba(9,179,9,0.3) 0%, rgba(9,179,9,0.6) 100%)",
                    marginLeft: i > 0 ? "-12px" : 0,
                  }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#171C1A]">2,000+ Early Users</span>
              <span className="text-xs text-[#6D7873]">Joined the waitlist</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full max-w-[448px]">
            <div
              className="absolute -inset-4 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(9,179,9,0.2) 0%, rgba(9,179,9,0.05) 100%)",
                filter: "blur(20px)",
              }}
            />
            <Image
              src="/images/hero-app.png"
              alt="WasteWise App Interface"
              width={448}
              height={614}
              className="relative z-10 rounded-3xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
