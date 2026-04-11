"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Recycle, Earth } from "@carbon/icons-react";

const tags = [
  { label: "Eco-Friendly", Icon: Recycle, useImage: false },
  { label: "Sustainable", Icon: Earth, useImage: false },
  { label: "Community Driven", Icon: null, useImage: true },
];

export default function Manifesto() {
  return (
    <section
      className="py-20 px-6 md:px-10 lg:px-[58px]"
      style={{
        background: "radial-gradient(84.85% 70.71% at 60% 50%, rgba(9,179,9,0.35) 0%, rgba(9,179,9,0.22) 30%, rgba(9,179,9,0.12) 50%, #FFFFFF 75%)",
      }}
    >
      <div className="max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex flex-col justify-end w-full lg:w-[53%] h-[356px] rounded-[31px] px-10 lg:px-[77px] pb-[31px]"
          style={{
            backgroundImage: "url('/images/manifesto.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 33px 65px -16px rgba(0,0,0,0.25)",
          }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex justify-center gap-3">
            {[
              { value: "100%", label: "Reliability" },
              { value: "Zero", label: "Landfill Goal" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center px-5 py-3 bg-white/95 border border-[#E3E8E3] backdrop-blur-sm rounded-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] flex-1"
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <span className="text-2xl font-bold text-[#09B309] leading-8 text-center w-full">{stat.value}</span>
                <span className="text-xs font-medium text-[#6D7873] leading-4 text-center w-full">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col gap-[15px] pt-[5px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 px-3 py-1 w-fit bg-white border border-[#0BAE0B]/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#0BAE0B]" />
            <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#0BAE0B] font-[family-name:var(--font-rethink)]">
              The Manifesto
            </span>
          </div>

          <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[1] text-[#171C1A] font-[family-name:var(--font-jakarta)]">
            Changing how Africa <span className="text-[#09B309]">breathes.</span>
          </h2>

          <div className="py-[8px] pb-[17px]">
            <p className="text-sm leading-5 text-[#6D7873]">
              WasteWise is committed to transforming waste management across the continent. We bridge the gap between households and technology to build a circular economy.
            </p>
          </div>

          <div className="relative pl-6 border-l-[3px] border-[#09B309]/20">
            <Image src="/images/globe.png" alt="" width={32} height={32} className="absolute -left-[15px] -top-2 z-10" />
            <p className="text-base italic leading-[26px] text-[#171C1A]">
              &ldquo;We empower households to live cleaner lives and help vendors grow sustainable businesses, reducing landfill waste and protecting our environment for future generations.&rdquo;
            </p>
          </div>

          <div className="flex gap-x-4 py-[17px]">
            {tags.map((tag) => (
              <motion.div
                key={tag.label}
                className="flex items-center gap-2 px-4 py-2 bg-[#EAF6EA] rounded-full h-[36px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {tag.useImage ? (
                  <Image src="/images/globe.png" alt="" width={16} height={16} />
                ) : tag.Icon ? (
                  <tag.Icon size={16} className="text-[#09B309]" />
                ) : null}
                <span className="text-sm font-medium text-[#171C1A] whitespace-nowrap">{tag.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="flex items-center justify-center px-8 h-12 w-[287px] border border-[#09B309]/30 rounded-full text-base font-medium text-[#09B309] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(9,179,9,0.05)" }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More About Our Vision
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
