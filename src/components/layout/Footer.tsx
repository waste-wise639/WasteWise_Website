"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LogoTwitter, LogoFacebook, LogoInstagram, LogoLinkedin } from "@carbon/icons-react";

function LogoTiktok({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.31 2.13 1.55 3.63 3.5 3.86v2.63c-1.29.1-2.5-.29-3.5-1v6.06c0 3.4-2.7 5.87-6 5.58-2.66-.23-4.79-2.48-4.79-5.15 0-3.24 3.03-5.62 6.14-4.86v2.79c-.42-.14-.88-.21-1.34-.14-1.16.16-2.02 1.13-1.93 2.29.09 1.09.99 1.96 2.08 1.98 1.28.03 2.34-1 2.34-2.28V3h3.4Z" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download App", href: "#" },
  { label: "About Us", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Vendor Policy", href: "/vendor-policy" },
];

const socials = [
  { Icon: LogoFacebook, href: "https://www.facebook.com/share/18mTEMs5PT/" },
  { Icon: LogoInstagram, href: "https://www.instagram.com/wastewiseinc?igsh=dTIzOG85ZzNia2c=" },
  { Icon: LogoLinkedin, href: "https://www.linkedin.com/company/wastewise-inc/" },
  { Icon: LogoTwitter, href: "https://x.com/WiseWise613415" },
  { Icon: LogoTiktok, href: "https://www.tiktok.com/@wastewise.inc?_r=1&_t=ZS-97cELYp2Ttl" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171C1A] pt-10 lg:pt-16 pb-8 px-5 md:px-10 lg:px-[58px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-full lg:w-[320px] shrink-0">
            <a href="#" className="flex items-center gap-2">
              <Image src="/images/footer-logo.png" alt="WasteWise" width={40} height={40} />
              <span className="text-[20px] font-bold leading-7 text-white font-[family-name:var(--font-rethink)]">
                Waste<span className="text-[#09B309]">Wise</span>
              </span>
            </a>
            <p className="text-[14px] leading-[22px] text-white/60 max-w-[320px]">
              Leading the movement toward sustainable urban living. Join us in building cleaner cities through smart waste management and community action.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full"
                  whileHover={{ scale: 1.1, borderColor: "rgba(9,179,9,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon size={18} className="text-[#09B309]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigations */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white">Navigations</h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold text-white">Support</h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex-1">
            <div className="flex flex-col gap-[11px] lg:gap-3 p-[30px] lg:p-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-[30px] lg:rounded-[32px]">
              <h4 className="text-[19px] lg:text-[20px] font-extrabold leading-[26px] lg:leading-7 text-white font-[family-name:var(--font-rethink)]">
                Let&apos;s Get Started!
              </h4>
              <p className="text-[11px] lg:text-xs font-bold leading-[18px] lg:leading-5 text-white/60 pb-[11px] lg:pb-3 font-[family-name:var(--font-rethink)]">
                Ready to optimize your waste business or start recycling at home? The future is green.
              </p>
              <motion.a
                href="/waitlist"
                className="w-full h-[41px] lg:h-11 flex items-center justify-center bg-[#09B309] text-[11px] lg:text-xs font-extrabold uppercase tracking-[1.1px] lg:tracking-[1.2px] text-white rounded-[22px] lg:rounded-3xl font-[family-name:var(--font-rethink)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Join Waitlist
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center md:flex-row justify-between gap-2 md:gap-4 pt-4 lg:pt-8 border-t border-white/10">
          <span className="text-sm text-white/40">
            &copy; 2026 WasteWise Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#09B309]" />
            <span className="text-sm text-white/40">Protecting our planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
