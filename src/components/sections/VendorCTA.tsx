"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, UserMultiple, Locked, Growth } from "@carbon/icons-react";

const stats = [
  { label: "More Customers", Icon: UserMultiple },
  { label: "Secure Payments", Icon: Locked },
  { label: "Grow Revenue", Icon: Growth },
];

export default function VendorCTA() {
  return (
    <section className="relative py-20 lg:py-28 px-6 md:px-10 lg:px-[58px] bg-[#171C1A] overflow-hidden isolate">
      <div
        className="absolute right-[-25px] -top-20 w-[384px] h-[384px] rounded-full pointer-events-none z-0"
        style={{ background: "rgba(9,179,9,0.2)", filter: "blur(32px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <motion.div
          className="lg:w-[40%] flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[50px] text-white font-[family-name:var(--font-rethink)] max-w-[424px]">
            Grow Your <span className="text-[#09B309]">Waste Business</span> with WasteWise
          </h2>

          <p className="text-xl leading-[29px] text-white/70 max-w-[463px]">
            Join a network of verified waste vendors. Access more customers, automated digital payments, and tools built to boost your daily earnings
          </p>

          <div className="flex items-start gap-4 py-2">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-3 flex-1"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#09B309]/20 rounded-xl">
                  <stat.Icon size={20} className="text-[#09B309]" />
                </div>
                <span className="text-xs font-medium text-white/80 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="flex items-center justify-center gap-4 px-10 h-14 w-fit bg-[#09B309] text-white text-base font-bold rounded-full shadow-[0px_20px_25px_-5px_rgba(9,179,9,0.3),0px_8px_10px_-6px_rgba(9,179,9,0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Join Vendor Network
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        <motion.div
          className="lg:w-[55%] relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="absolute -inset-7 rounded-[29px] pointer-events-none z-0"
            style={{ background: "rgba(9,179,9,0.1)", filter: "blur(24.5px)" }}
          />
          <Image
            src="/images/vendor-operations.png"
            alt="WasteWise vendor operations"
            width={668}
            height={403}
            className="relative z-10 rounded-[27px] w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
