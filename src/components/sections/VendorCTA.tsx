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
    <section className="relative py-9 lg:py-28 px-5 md:px-10 lg:px-[58px] bg-[#171C1A] overflow-hidden isolate">
      {/* Desktop blur */}
      <div
        className="absolute right-[-25px] -top-20 w-[384px] h-[384px] rounded-full pointer-events-none z-0 hidden lg:block"
        style={{ background: "rgba(9,179,9,0.2)", filter: "blur(32px)" }}
      />
      {/* Mobile blur */}
      <div
        className="absolute right-[-10px] -top-4 w-[65px] h-[65px] rounded-full pointer-events-none z-0 lg:hidden"
        style={{ background: "rgba(9,179,9,0.2)", filter: "blur(5.4px)" }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-16">
        {/* Text Content */}
        <motion.div
          className="lg:w-[40%] flex flex-col items-center lg:items-start gap-[23px] lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[34px] lg:text-[48px] font-extrabold leading-[36px] lg:leading-[50px] text-white text-center lg:text-left font-[family-name:var(--font-rethink)] max-w-[353px] lg:max-w-[424px]">
            Grow Your Waste Business with WasteWise
          </h2>

          <p className="text-base lg:text-xl leading-5 lg:leading-[29px] text-white/70 text-center lg:text-left max-w-[353px] lg:max-w-[463px]">
            Join a network of verified waste vendors. Access more customers, automated digital payments, and tools built to boost your daily earnings
          </p>

          <div className="flex justify-center items-start gap-4 py-[9px] lg:py-2">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center gap-[10px] lg:gap-3"
                whileHover={{ y: -4 }}
              >
                <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center bg-[#09B309]/20 rounded-[9px] lg:rounded-xl">
                  <stat.Icon size={15} className="text-[#09B309] lg:w-5 lg:h-5" />
                </div>
                <span className="text-[9px] lg:text-xs font-medium text-white/80 text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/waitlist"
            className="flex items-center justify-center gap-4 px-10 h-14 w-full lg:w-fit bg-[#09B309] text-white text-base font-bold rounded-full shadow-[0px_20px_25px_-5px_rgba(9,179,9,0.3),0px_8px_10px_-6px_rgba(9,179,9,0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Join Vendor Network
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full lg:w-[55%] relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            className="absolute -inset-[14px] lg:-inset-7 rounded-[14px] lg:rounded-[29px] pointer-events-none z-0"
            style={{ background: "rgba(9,179,9,0.1)", filter: "blur(12px)" }}
          />
          <Image
            src="/images/vendor-operations.png"
            alt="WasteWise vendor operations"
            width={668}
            height={403}
            className="relative z-10 rounded-[13px] lg:rounded-[27px] w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
