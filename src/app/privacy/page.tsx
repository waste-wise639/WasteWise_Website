"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>

            <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white/80 text-center max-w-[303px] lg:max-w-[577px] pt-1 lg:pt-2">
              How we collect, use, and protect your information at WasteWise Inc. Ltd.
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
                WasteWise Inc. Ltd. (&quot;WasteWise&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services.
              </p>
              <p>By using our platform, you agree to the terms outlined in this policy.</p>
            </PolicySection>

            <PolicySection number="2" title="Information We Collect">
              <SubSection title="a. Personal Information">
                <p>We may collect the following:</p>
                <BulletList items={["Full name", "Email address", "Phone number", "Residential or business address", "Company or vendor details"]} />
              </SubSection>
              <SubSection title="b. Usage Data">
                <BulletList items={["IP address", "Browser type and device information", "Pages visited and session duration", "Interaction with features and services"]} />
              </SubSection>
              <SubSection title="c. Transactional Data">
                <BulletList items={["Service requests", "Payment records (where applicable)", "Vendor engagement details"]} />
              </SubSection>
            </PolicySection>

            <PolicySection number="3" title="How We Use Your Information">
              <p>We use collected data to:</p>
              <BulletList items={[
                "Provide and manage waste collection services",
                "Match users with verified vendors",
                "Process payments and transactions",
                "Improve platform performance and user experience",
                "Send notifications, updates, and service alerts",
                "Provide customer support",
                "Comply with legal obligations",
              ]} />
            </PolicySection>

            <PolicySection number="4" title="Data Sharing & Disclosure">
              <p>We may share your information with:</p>
              <BulletList items={[
                "Licensed Waste Vendors (to fulfill service requests)",
                "Payment Service Providers (for transactions)",
                "Technology Partners (hosting, analytics, email services)",
                "Regulatory Authorities (when legally required)",
              ]} />
              <p className="font-semibold text-[#09B309]">We do not sell personal data to third parties.</p>
            </PolicySection>

            <PolicySection number="5" title="Data Security">
              <p>We implement industry-standard security measures including:</p>
              <BulletList items={[
                "Secure servers and encryption (SSL)",
                "Access control systems",
                "Data monitoring and protection protocols",
              ]} />
              <p className="italic text-[13px]">However, no system is completely secure, and we cannot guarantee absolute protection.</p>
            </PolicySection>

            <PolicySection number="6" title="Data Retention">
              <p>We retain user data only for as long as necessary to:</p>
              <BulletList items={["Provide services", "Meet legal and regulatory requirements", "Resolve disputes"]} />
            </PolicySection>

            <PolicySection number="7" title="Your Rights">
              <p>You have the right to:</p>
              <BulletList items={[
                "Access your personal data",
                "Request corrections",
                "Request deletion (subject to legal obligations)",
                "Opt-out of marketing communications",
              ]} />
              <p>
                Requests can be sent to:{" "}
                <a href="mailto:support@wastewiseinc.com" className="text-[#09B309] hover:underline font-medium">support@wastewiseinc.com</a>
              </p>
            </PolicySection>

            <PolicySection number="8" title="Cookies & Tracking">
              <p>We use cookies and similar technologies to:</p>
              <BulletList items={["Improve website performance", "Analyze user behavior", "Personalize user experience"]} />
              <p>You can disable cookies via your browser settings.</p>
            </PolicySection>

            <PolicySection number="9" title="Third-Party Links">
              <p>Our platform may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </PolicySection>

            <PolicySection number="10" title="Updates to This Policy">
              <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.</p>
            </PolicySection>

            <PolicySection number="11" title="Contact Us">
              <p>For any privacy-related inquiries:</p>
              <div className="mt-2 p-5 bg-[#F5FAF5] border border-[#E3E8E3] rounded-xl">
                <p className="font-semibold text-[#171C1A] text-[15px]">WasteWise Inc. Ltd.</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p>
                    Email:{" "}
                    <a href="mailto:support@wastewiseinc.com" className="text-[#09B309] hover:underline">support@wastewiseinc.com</a>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[15px] font-semibold text-[#171C1A]">{title}</h3>
      {children}
    </div>
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
