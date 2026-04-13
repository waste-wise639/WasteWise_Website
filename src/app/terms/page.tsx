"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative w-full h-[239px] lg:h-[433px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #09B309 0%, #067A06 50%, #045804 100%)" }}
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <motion.div
            className="flex flex-col items-center gap-[10px] lg:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 lg:gap-3">
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-white/60 rounded-full" />
              <span className="text-[10px] lg:text-[14px] font-semibold leading-[13px] lg:leading-[20px] tracking-[0.88px] lg:tracking-[1.4px] uppercase text-white/80">
                Legal
              </span>
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-white/60 rounded-full" />
            </div>

            <h1 className="text-[24px] lg:text-[48px] font-extrabold leading-[30px] lg:leading-[60px] text-white text-center font-[family-name:var(--font-jakarta)]">
              Terms & Conditions
            </h1>

            <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white/80 text-center max-w-[303px] lg:max-w-[577px] pt-1 lg:pt-2">
              Please read these terms carefully before using the WasteWise platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-white py-12 lg:py-20">
        <div className="max-w-[800px] mx-auto px-5 lg:px-6">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-[#09B309] hover:underline">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <PolicySection number="1" title="Introduction">
              <p>
                These Terms and Conditions govern your use of the WasteWise platform (website, mobile app, and services). By accessing or using our services, you agree to comply with these terms.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Definitions">
              <BulletList items={[
                "\"Platform\" – WasteWise website and mobile application",
                "\"User\" – Any individual or business using the platform",
                "\"Vendor\" – Licensed waste collectors registered on WasteWise",
                "\"Services\" – Waste collection, recycling coordination, and related services",
              ]} />
            </PolicySection>

            <PolicySection number="3" title="Eligibility">
              <p>Users must:</p>
              <BulletList items={[
                "Be at least 18 years old",
                "Provide accurate and complete information",
                "Use the platform in compliance with applicable laws",
              ]} />
            </PolicySection>

            <PolicySection number="4" title="Use of Services">
              <p>Users agree to:</p>
              <BulletList items={[
                "Schedule waste pickups responsibly",
                "Provide accurate location and service details",
                "Not misuse the platform or disrupt operations",
              ]} />
              <p>WasteWise reserves the right to suspend or terminate accounts for misuse.</p>
            </PolicySection>

            <PolicySection number="5" title="Vendor Engagement">
              <BulletList items={[
                "Vendors are independent contractors, not employees of WasteWise",
                "WasteWise facilitates connections but does not directly perform waste collection",
                "Users acknowledge that service delivery depends on vendor availability",
              ]} />
            </PolicySection>

            <PolicySection number="6" title="Payments & Pricing">
              <BulletList items={[
                "Service fees are displayed on the platform",
                "Payments must be made as required for selected services",
                "WasteWise reserves the right to update pricing at any time",
              ]} />
            </PolicySection>

            <PolicySection number="7" title="Cancellations & Refunds">
              <BulletList items={[
                "Users may cancel services within allowed timeframes",
                "Refund eligibility depends on service status and company policy",
                "Completed services are non-refundable unless proven otherwise",
              ]} />
            </PolicySection>

            <PolicySection number="8" title="Limitation of Liability">
              <p>WasteWise shall not be liable for:</p>
              <BulletList items={[
                "Delays caused by vendors or external factors",
                "Improper waste handling by third-party vendors",
                "Indirect, incidental, or consequential damages",
              ]} />
            </PolicySection>

            <PolicySection number="9" title="Intellectual Property">
              <p>
                All content, branding, and technology on the platform are owned by WasteWise Inc. Ltd. Unauthorized use is prohibited.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Data Usage">
              <p>
                By using our services, you agree to our{" "}
                <a href="/privacy" className="text-[#09B309] hover:underline font-medium">Privacy Policy</a>{" "}
                and data handling practices.
              </p>
            </PolicySection>

            <PolicySection number="11" title="Service Availability">
              <p>We aim to provide uninterrupted service but do not guarantee:</p>
              <BulletList items={[
                "Continuous availability",
                "Error-free performance",
                "Immediate vendor response",
              ]} />
            </PolicySection>

            <PolicySection number="12" title="Termination">
              <p>WasteWise reserves the right to:</p>
              <BulletList items={[
                "Suspend or terminate user accounts",
                "Restrict access for violations of these terms",
              ]} />
            </PolicySection>

            <PolicySection number="13" title="Governing Law">
              <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
            </PolicySection>

            <PolicySection number="14" title="Dispute Resolution">
              <p>Disputes shall be resolved through:</p>
              <BulletList items={["Negotiation", "Mediation", "Arbitration (if required)"]} />
            </PolicySection>

            <PolicySection number="15" title="Updates to Terms">
              <p>We may revise these Terms periodically. Continued use of the platform indicates acceptance of updated terms.</p>
            </PolicySection>

            <PolicySection number="16" title="Contact Information">
              <p>For any inquiries regarding these terms:</p>
              <div className="mt-2 p-5 bg-[#F5FAF5] border border-[#E3E8E3] rounded-xl">
                <p className="font-semibold text-[#171C1A] text-[15px]">WasteWise Inc. Ltd.</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p>
                    Email:{" "}
                    <a href="mailto:info@wastewiseinc.com" className="text-[#09B309] hover:underline">info@wastewiseinc.com</a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+2349025013289" className="text-[#09B309] hover:underline">+234 902 501 3289</a>
                  </p>
                </div>
              </div>
            </PolicySection>
          </motion.div>
        </div>
      </section>

      <footer className="w-full h-[85px] bg-[#171C1A] flex items-center justify-center">
        <p className="text-sm text-white/40 text-center">
          &copy; 2026 WasteWise Inc. Ltd. All rights reserved.
        </p>
      </footer>
    </>
  );
}

function PolicySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeIn} transition={{ duration: 0.4 }} className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#09B309]/10 text-[#09B309] text-[13px] font-bold shrink-0">
          {number}
        </span>
        <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#171C1A] leading-tight">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3 pl-11 text-[14px] lg:text-[15px] leading-[1.7] text-[#6D7873]">
        {children}
      </div>
    </motion.div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative before:content-[''] before:absolute before:left-[-16px] before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#09B309]">
          {item}
        </li>
      ))}
    </ul>
  );
}
