"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "@carbon/icons-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function VendorPolicyPage() {
  return (
    <>
      <section className="relative w-full h-[239px] lg:h-[433px] overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #09B309 0%, #067A06 50%, #045804 100%)" }} />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <motion.div className="flex flex-col items-center gap-[10px] lg:gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 lg:gap-3">
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-white/60 rounded-full" />
              <span className="text-[10px] lg:text-[14px] font-semibold tracking-[0.88px] lg:tracking-[1.4px] uppercase text-white/80">Legal</span>
              <div className="w-5 lg:w-8 h-[1.3px] lg:h-[2px] bg-white/60 rounded-full" />
            </div>
            <h1 className="text-[24px] lg:text-[48px] font-extrabold leading-[30px] lg:leading-[60px] text-white text-center font-[family-name:var(--font-jakarta)]">Vendor Partnership Policy</h1>
            <p className="text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[28px] text-white/80 text-center max-w-[303px] lg:max-w-[600px] pt-1 lg:pt-2">
              Comprehensive guidelines for waste management vendor partnerships in Port Harcourt, Rivers State, Nigeria.
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
          <motion.div className="flex flex-col gap-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>

            <S n="1" t="Introduction">
              <Sub t="1.1 Purpose">
                <p>This Vendor Partnership Policy establishes comprehensive guidelines for selecting, onboarding, managing, and evaluating vendors who provide waste collection, transportation, recycling, and disposal services through our mobile application platform in Port Harcourt, Rivers State, Nigeria.</p>
              </Sub>
              <Sub t="1.2 Scope">
                <p>This policy applies to all waste management service providers, independent contractors, collection agents, recycling partners, and disposal facility operators who wish to partner with or are currently partnered with our platform.</p>
              </Sub>
              <Sub t="1.3 Objectives">
                <B items={["Ensure quality, reliable, and professional waste management services", "Maintain regulatory compliance with Nigerian environmental laws", "Promote sustainable and environmentally responsible practices", "Protect the interests of customers, vendors, and the platform", "Foster mutually beneficial long-term partnerships"]} />
              </Sub>
            </S>

            <S n="2" t="Vendor Eligibility Criteria">
              <Sub t="2.1 Legal Requirements">
                <p>All prospective vendors must:</p>
                <B items={["Be registered with the Corporate Affairs Commission (CAC) or possess valid business registration", "Hold valid operational licenses from Rivers State Ministry of Environment", "Possess relevant permits from Rivers State Waste Management Agency (RIWAMA)", "Maintain current Tax Identification Number (TIN) and tax clearance certificates", "Have valid insurance coverage (minimum ₦5,000,000 third-party liability)"]} />
              </Sub>
              <Sub t="2.2 Operational Requirements">
                <p>Vendors must demonstrate:</p>
                <B items={["Minimum 12 months experience in waste management operations", "Ownership or legal access to appropriate waste collection vehicles", "Proper waste handling and disposal equipment", "Capacity to service assigned areas within Port Harcourt metropolis", "Access to licensed disposal facilities or transfer stations"]} />
              </Sub>
              <Sub t="2.3 Environmental Compliance">
                <p>Vendors must:</p>
                <B items={["Comply with NESREA guidelines", "Follow proper waste segregation practices (organic, recyclable, hazardous)", "Maintain environmental impact assessment records", "Implement pollution prevention measures", "Adhere to sustainable waste management practices"]} />
              </Sub>
              <Sub t="2.4 Personnel Requirements">
                <p>Vendors must ensure:</p>
                <B items={["All staff undergo health screening and obtain fitness certificates", "Workers receive proper training in waste handling and safety protocols", "Staff wear appropriate personal protective equipment (PPE)", "Valid driver's licenses for all vehicle operators", "Background verification for all personnel"]} />
              </Sub>
            </S>

            <S n="3" t="Application and Onboarding Process">
              <Sub t="3.1 Application Submission">
                <p>Prospective vendors must submit:</p>
                <B items={["Completed vendor application form", "Company registration documents (CAC certificate)", "Valid operational licenses and permits", "Insurance certificates", "Tax clearance certificates", "Vehicle registration and roadworthiness certificates", "Fleet inventory and equipment list", "Three professional references", "Bank account details and guarantor information"]} />
              </Sub>
              <Sub t="3.2 Verification Process">
                <p>The platform will conduct:</p>
                <B items={["Document authenticity verification", "Physical inspection of vehicles and equipment", "Background checks on the business and principals", "Reference verification", "Site visits to operational facilities", "Compliance audit"]} />
              </Sub>
              <Sub t="3.3 Training and Orientation">
                <p>Approved vendors must complete:</p>
                <B items={["Platform technology and mobile app training", "Customer service excellence program", "Safety and environmental compliance workshop", "Quality standards and procedures briefing", "Payment and billing system orientation"]} />
              </Sub>
              <Sub t="3.4 Onboarding Timeline">
                <B items={["Application review: 5-7 business days", "Verification and inspection: 7-10 business days", "Training completion: 3-5 business days", "Platform activation: 2 business days after successful training"]} />
              </Sub>
            </S>

            <S n="4" t="Vendor Categories and Service Levels">
              <Sub t="4.1 Vendor Categories">
                <p><strong>Category A: Premium Partners</strong> — Full-service waste management operators, multi-vehicle fleet (5+), 24/7 capacity, specialized handling, priority allocation.</p>
                <p><strong>Category B: Standard Partners</strong> — General waste collection, 2-4 vehicles, daytime hours (6 AM - 6 PM), standard handling.</p>
                <p><strong>Category C: Independent Contractors</strong> — Single operator or small team, 1-2 vehicles, specific zone coverage, flexible scheduling.</p>
                <p><strong>Category D: Specialized Partners</strong> — E-waste recyclers, hazardous/industrial/medical waste contractors, organic waste composters.</p>
              </Sub>
              <Sub t="4.2 Service Level Agreements (SLA)">
                <p><strong>Response Time:</strong></p>
                <B items={["Scheduled pickups: 95% on-time performance", "On-demand requests: Within 24 hours", "Emergency services: Within 4 hours", "Complaints resolution: Within 48 hours"]} />
                <p><strong>Quality Standards:</strong></p>
                <B items={["Zero spillage during collection and transportation", "Proper waste segregation compliance: 90% accuracy", "Vehicle cleanliness: Daily maintenance", "Professional appearance and conduct: 100% compliance"]} />
              </Sub>
            </S>

            <S n="5" t="Operational Guidelines">
              <Sub t="5.1 Service Delivery Standards">
                <p>Vendors must:</p>
                <B items={["Accept service requests through the mobile application only", "Arrive within scheduled time windows", "Wear company-issued or branded uniforms", "Display vendor identification badges", "Document service completion with photos/verification", "Handle waste with care to prevent spillage or contamination"]} />
              </Sub>
              <Sub t="5.2 Geographic Coverage">
                <B items={["Vendors assigned to specific zones within Port Harcourt", "Coverage areas: GRA, Trans Amadi, D-Line, Rumuola, Eliozu, etc.", "Minimum service radius of 5km from base location"]} />
              </Sub>
              <Sub t="5.3 Vehicle and Equipment Standards">
                <B items={["Properly covered to prevent waste spillage", "Monthly roadworthiness inspections", "Valid vehicle insurance", "GPS tracking devices equipped", "Emergency spill kits and safety equipment"]} />
              </Sub>
              <Sub t="5.4 Waste Disposal Protocols">
                <B items={["Dispose waste only at approved facilities", "Maintain disposal receipts and documentation", "Never engage in illegal dumping or burning", "Support recycling initiatives when applicable"]} />
              </Sub>
            </S>

            <S n="6" t="Financial Arrangements">
              <Sub t="6.1 Commission Structure">
                <B items={["Category A vendors: 15% platform commission", "Category B vendors: 18% platform commission", "Category C vendors: 20% platform commission", "Category D vendors: Negotiable based on specialization"]} />
              </Sub>
              <Sub t="6.2 Payment Terms">
                <B items={["Payment processing: Weekly or bi-weekly cycles", "Payment method: Direct bank transfer", "Payment timeline: Within 5 business days after cycle close", "Minimum payout threshold: ₦5,000"]} />
              </Sub>
              <Sub t="6.3 Penalties and Deductions">
                <B items={["Customer complaints: ₦1,000 - ₦5,000", "Late service delivery: ₦500 per occurrence", "No-show without notification: ₦2,000 per occurrence", "Safety violations: ₦3,000 - ₦10,000", "Environmental violations: ₦5,000 - ₦20,000", "Illegal dumping: Immediate suspension + ₦50,000 fine"]} />
              </Sub>
            </S>

            <S n="7" t="Technology and Platform Usage">
              <Sub t="7.1 Mobile Application Requirements">
                <B items={["Maintain active smartphone with internet connectivity", "Keep vendor app installed and updated", "Enable GPS location tracking during service hours", "Respond to service requests within 30 minutes", "Maintain 90% app uptime during operational hours"]} />
              </Sub>
              <Sub t="7.2 Data and Privacy">
                <B items={["Protect customer information and maintain confidentiality", "Comply with Nigeria Data Protection Regulation (NDPR)", "Report data breaches within 24 hours"]} />
              </Sub>
              <Sub t="7.3 Rating System">
                <B items={["Customers rate vendors on a 5-star scale", "Minimum acceptable rating: 3.5 stars", "Below 3.0 stars triggers performance review", "Consistently low ratings may result in suspension"]} />
              </Sub>
            </S>

            <S n="8" t="Health, Safety, and Environment (HSE)">
              <Sub t="8.1 Safety Requirements">
                <B items={["Provide PPE for all workers", "Conduct daily vehicle safety checks", "Maintain first aid kits in all vehicles", "Report accidents within 24 hours", "Monthly safety training for staff"]} />
              </Sub>
              <Sub t="8.2 Environmental Protection">
                <B items={["Zero-tolerance for illegal dumping", "Proper handling of hazardous materials", "Reduction of carbon footprint through efficient routing", "Compliance with pollution control measures"]} />
              </Sub>
            </S>

            <S n="9" t="Quality Assurance and Monitoring">
              <Sub t="9.1 Performance Metrics">
                <B items={["On-time delivery rate: ≥95%", "Customer satisfaction: ≥4.0 stars", "Service completion rate: ≥98%", "Complaint resolution: ≥90%", "Safety compliance: 100%"]} />
              </Sub>
              <Sub t="9.2 Monitoring">
                <B items={["GPS tracking and route monitoring", "Random quality inspections", "Monthly performance reviews", "Quarterly compliance audits", "Annual comprehensive evaluation"]} />
              </Sub>
            </S>

            <S n="10" t="Vendor Support and Development">
              <B items={["24/7 technical support hotline", "Dedicated vendor relationship manager", "Regular training and capacity building workshops", "Marketing and promotional support"]} />
              <Sub t="Growth Opportunities">
                <B items={["Expanded service areas for high performers", "Reduced commission rates", "Featured vendor status on platform", "Access to bulk/corporate contracts", "Equipment financing support"]} />
              </Sub>
            </S>

            <S n="11" t="Suspension and Termination">
              <Sub t="11.1 Grounds for Suspension">
                <B items={["Illegal waste dumping", "Fraudulent activities", "Gross misconduct or harassment", "Repeated safety violations", "Operating without valid licenses", "Data privacy breaches"]} />
              </Sub>
              <Sub t="11.2 Termination Conditions">
                <B items={["Repeated policy violations", "Failure to meet minimum standards for 3 consecutive months", "Criminal activities", "Loss of required licenses", "30-day written notice (except gross violations)"]} />
              </Sub>
            </S>

            <S n="12" t="Dispute Resolution">
              <B items={["Submit complaint via vendor portal or email", "Acknowledgment within 24 hours", "Investigation: 5-7 business days", "Unresolved disputes may be escalated to mediation or arbitration", "Last resort: Legal proceedings in Rivers State Courts"]} />
            </S>

            <S n="13" t="Ethical Standards and Code of Conduct">
              <B items={["Operate with integrity and honesty", "Avoid conflicts of interest", "Zero tolerance for bribery or corruption", "Treat employees fairly and pay decent wages", "Ensure child labour is not used", "Support local community initiatives"]} />
            </S>

            <S n="14" t="Intellectual Property and Confidentiality">
              <B items={["Platform name, logo, and brand are proprietary", "Customer data belongs to the platform", "Vendors must not disclose business strategies or pricing structures", "Non-compete clause: 6-12 months after partnership ends"]} />
            </S>

            <S n="15" t="Insurance and Liability">
              <Sub t="Required Insurance">
                <B items={["Third-party liability (minimum ₦5,000,000)", "Comprehensive vehicle insurance", "Workers' compensation/employer's liability", "Professional indemnity for specialized services"]} />
              </Sub>
              <p>Vendors agree to indemnify the platform against claims arising from vendor actions, regulatory violations, or negligence.</p>
            </S>

            <S n="16" t="Regulatory Compliance">
              <Sub t="National">
                <B items={["NESREA Act", "Federal Ministry of Environment guidelines", "Nigeria Data Protection Regulation (NDPR)", "Labour laws and employment regulations"]} />
              </Sub>
              <Sub t="State">
                <B items={["Rivers State Ministry of Environment directives", "RIWAMA regulations", "Rivers State Environmental Sanitation Law", "Port Harcourt City local government bylaws"]} />
              </Sub>
            </S>

            <S n="17" t="Continuous Improvement">
              <B items={["Annual comprehensive policy review", "Quarterly minor adjustments as needed", "30-day notice for significant changes", "Vendor consultation for major revisions", "Support for new technologies and sustainable innovations"]} />
            </S>

            <S n="18" t="Miscellaneous Provisions">
              <Sub t="Force Majeure">
                <p>Neither party liable for failure due to natural disasters, government actions, civil unrest, pandemics, or events beyond reasonable control.</p>
              </Sub>
              <Sub t="Governing Law">
                <p>This policy is governed by the laws of the Federal Republic of Nigeria and Rivers State regulations. Jurisdiction: Rivers State High Courts.</p>
              </Sub>
            </S>

            <S n="19" t="Policy Acknowledgment">
              <p>All vendors must sign an acknowledgment form confirming receipt, understanding, and agreement to comply with all provisions of this policy.</p>
              <div className="mt-2 p-5 bg-[#F5FAF5] border border-[#E3E8E3] rounded-xl">
                <p className="font-semibold text-[#171C1A] text-[15px]">WasteWise Inc. Ltd.</p>
                <div className="flex flex-col gap-1 mt-2">
                  <p>Email: <a href="mailto:vendors@wastewiseinc.com" className="text-[#09B309] hover:underline">vendors@wastewiseinc.com</a></p>
                  <p>Phone: <a href="tel:+2349025013289" className="text-[#09B309] hover:underline">+234 902 501 3289</a></p>
                  <p>Address: Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>
            </S>

          </motion.div>
        </div>
      </section>

      <footer className="w-full h-[85px] bg-[#171C1A] flex items-center justify-center">
        <p className="text-sm text-white/40 text-center">&copy; 2026 WasteWise Inc. Ltd. All rights reserved.</p>
      </footer>
    </>
  );
}

function S({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <motion.div variants={fadeIn} transition={{ duration: 0.4 }} className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#09B309]/10 text-[#09B309] text-[13px] font-bold shrink-0">{n}</span>
        <h2 className="text-[20px] lg:text-[24px] font-semibold text-[#171C1A] leading-tight">{t}</h2>
      </div>
      <div className="flex flex-col gap-3 pl-11 text-[14px] lg:text-[15px] leading-[1.7] text-[#6D7873]">{children}</div>
    </motion.div>
  );
}

function Sub({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-[15px] font-semibold text-[#171C1A]">{t}</h3>
      {children}
    </div>
  );
}

function B({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative before:content-[''] before:absolute before:left-[-16px] before:top-[10px] before:w-[6px] before:h-[6px] before:rounded-full before:bg-[#09B309]">{item}</li>
      ))}
    </ul>
  );
}
