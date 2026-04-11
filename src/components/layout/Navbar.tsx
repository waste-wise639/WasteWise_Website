"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-[12px]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-[80px] px-6 md:px-10 lg:px-[58px]">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/wastewise-logo.jpg"
            alt="WasteWise"
            width={42}
            height={42}
            className="rounded-full"
          />
          <span className="text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-[#171C1A] font-[family-name:var(--font-rethink)]">
            Waste<span className="text-[#09B309]">Wise</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.name;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                whileHover={{ backgroundColor: isActive ? undefined : "rgba(11,174,11,0.05)" }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#09B309]/10 text-[#09B309]"
                    : "text-[#6D7873]"
                }`}
              >
                {link.name}
              </motion.a>
            );
          })}
        </div>

        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-[7.6px] bg-[#09B309] text-white text-xs font-medium rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
        >
          Join Waitlist
        </motion.a>
      </div>
    </motion.nav>
  );
}
