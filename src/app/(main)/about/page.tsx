"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function TeamCard({ member, index }: { member: { name: string; role: string; bio: string }; index: number }) {
  const [hovered, setHovered] = useState(false);
  const initials = member.name.split(" ").map(w => w[0]).join("").slice(0, 2);

  return (
    <motion.div
      className={`flex flex-col gap-1 p-6 rounded-[16px] border shadow-[0px_1px_2px_rgba(0,0,0,0.05)] transition-colors duration-300 ${
        hovered
          ? "bg-[#171C1A] border-[#171C1A]"
          : "bg-white dark:bg-[#1A211A] border-[#E3E8E3] dark:border-[#2A352A]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <div className="w-[60px] h-[60px] rounded-full border border-[#09B309]/30 bg-[#09B309]/10 flex items-center justify-center">
        <span className="text-[16px] font-bold text-[#09B309]">{initials}</span>
      </div>

      <h4 className={`text-[16px] font-bold leading-[24px] mt-3 transition-colors duration-300 ${
        hovered ? "text-white" : "text-[#171C1A] dark:text-white"
      }`}>
        {member.name}
      </h4>

      <span className="text-[12px] font-semibold leading-[16px] text-[#09B309]">
        {member.role}
      </span>

      <p className={`text-[12px] leading-[20px] mt-2 transition-colors duration-300 ${
        hovered ? "text-white/70" : "text-[#6D7873]"
      }`}>
        {member.bio}
      </p>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[144px] pb-[96px] px-5 md:px-10 lg:px-[217px] overflow-hidden bg-white dark:bg-[#0F1210] isolate">
        {/* Green blur blobs */}
        <div
          className="absolute w-[400px] lg:w-[708px] h-[400px] lg:h-[695px] -right-[40px] lg:-right-[80px] -top-[20px] lg:-top-[35px] pointer-events-none z-0"
          style={{ background: "rgba(9,179,9,0.05)", filter: "blur(57px)", borderRadius: "17810px" }}
        />
        <div
          className="absolute w-[400px] lg:w-[727px] h-[400px] lg:h-[725px] right-[50%] lg:right-[756px] -top-[20px] lg:-top-[39px] pointer-events-none z-0"
          style={{ background: "rgba(9,179,9,0.05)", filter: "blur(60px)", borderRadius: "18826px" }}
        />

        <motion.div
          className="relative z-10 max-w-[960px] mx-auto flex flex-col items-center gap-[18px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309] text-center">
            About WasteWise
          </span>

          <h1 className="text-[34px] md:text-[48px] lg:text-[60px] font-extrabold leading-[40px] md:leading-[56px] lg:leading-[70px] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
            Building Smarter Waste Systems for a <span className="text-[#09B309]">Cleaner Future</span>
          </h1>

          <p className="max-w-[756px] text-[14px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-center text-[#6D7873] mt-[5px]">
            WasteWise Inc. Ltd. is a technology-driven waste management and recycling company focused on transforming how waste is collected, managed, and repurposed across urban communities.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="bg-white dark:bg-[#0F1210] px-5 md:px-10 lg:px-[58px] py-10 lg:py-16">
        <div className="max-w-[1216px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Text */}
          <motion.div
            className="flex-1 flex flex-col gap-[14px] pt-[5px] lg:pt-[43px] max-w-[584px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309]">
              Who We Are
            </span>

            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[34px] lg:leading-[40px] text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
              One Efficient <span className="text-[#09B309]">Ecosystem</span>
            </h2>

            <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-[#6D7873] mt-[5px]">
              We are building a smart, scalable platform that connects households, businesses, waste collectors, and regulatory bodies into one efficient ecosystem. By leveraging technology, data, and strategic partnerships, WasteWise is redefining waste as a valuable resource rather than a burden.
            </p>

            <p className="text-[14px] lg:text-[16px] font-medium leading-[22px] lg:leading-[26px] text-[#171C1A]/80 dark:text-white/80 mt-[1.5px]">
              Our goal is simple: cleaner cities, smarter systems, and sustainable impact.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative max-w-[584px] w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="absolute -inset-4 rounded-[24px] pointer-events-none z-0"
              style={{ background: "rgba(9,179,9,0.05)", filter: "blur(20px)" }}
            />
            <Image
              src="/images/wastewise-platform.png"
              alt="WasteWise platform"
              width={584}
              height={329}
              className="relative z-10 w-full h-auto rounded-[24px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Our History */}
      <section className="bg-gradient-to-b from-[#DCF4DC] to-[#F0F5F0] dark:from-[#0F1A0F] dark:to-[#131A14] px-5 md:px-10 lg:px-[58px] py-16 lg:py-20">
        <div className="max-w-[832px] mx-auto flex flex-col items-center gap-[14px]">
          <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309] text-center">
            Our History
          </span>

          <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[34px] lg:leading-[40px] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
            From Vision to Execution
          </h2>

          <p className="max-w-[784px] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-center text-[#6D7873] mt-[5px]">
            WasteWise was born out of a deep understanding of the growing waste management challenges across Nigerian cities — particularly the inefficiencies in collection systems, lack of accountability, and limited recycling structures.
          </p>

          <p className="max-w-[825px] text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-center text-[#6D7873] mt-[1.5px]">
            Recognizing these gaps, the founders set out to build a technology-first solution. Since inception, WasteWise has evolved into a platform-driven solution designed to serve households, empower vendors, and support government agencies in building cleaner and more sustainable environments.
          </p>

          {/* Goal Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full mt-4">
            {[
              { number: "1", text: "Digitize waste collection" },
              { number: "2", text: "Improve coordination between stakeholders" },
              { number: "3", text: "Introduce transparency and accountability" },
              { number: "4", text: "Create economic value from waste" },
            ].map((goal) => (
              <motion.div
                key={goal.number}
                className="flex flex-col gap-3 p-4 bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Number(goal.number) * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#09B309]/10 rounded-[12px]">
                  <span className="text-[14px] font-bold leading-[20px] text-[#09B309]">{goal.number}</span>
                </div>
                <p className="text-[14px] font-medium leading-[20px] text-[#171C1A] dark:text-white">
                  {goal.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white dark:bg-[#0F1210] px-5 md:px-10 lg:px-[58px] py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto flex flex-col gap-8">
          {/* Vision + Mission Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Our Vision */}
            <motion.div
              className="flex flex-col gap-[14px] p-8 lg:p-[38px_32px_64px] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[24px]"
              style={{ background: "linear-gradient(135deg, rgba(9,179,9,0.1) 0%, rgba(9,179,9,0.05) 100%)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309]">
                Our Vision
              </span>
              <h3 className="text-[20px] lg:text-[24px] font-extrabold leading-[28px] lg:leading-[32px] text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
                Shaping the Future of Clean Cities
              </h3>
              <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-[#6D7873] mt-[1.5px]">
                To become Africa&apos;s most trusted and scalable digital waste management platform, enabling cleaner cities, healthier communities, and a circular economy where waste is fully optimized as a resource.
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              className="flex flex-col gap-[14px] p-8 lg:p-[38px_32px_32px] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[24px]"
              style={{ background: "linear-gradient(135deg, #EFF6FF 0%, rgba(239,246,255,0.3) 100%)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309]">
                Our Mission
              </span>
              <h3 className="text-[20px] lg:text-[24px] font-extrabold leading-[28px] lg:leading-[32px] text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
                Driving Sustainable Impact Through Technology
              </h3>
              <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-[#6D7873] mt-[1.5px]">
                To transform waste into value by leveraging technology to create an efficient, transparent, and sustainable waste management ecosystem for households, businesses, and governments.
              </p>
            </motion.div>
          </div>

          {/* We Are Committed To */}
          <motion.div
            className="flex flex-col gap-4 p-6 lg:p-8 bg-[#121A15] rounded-[24px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-[14px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#09B309]">
              We Are Committed To
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-3">
              {[
                "Enhancing waste collection efficiency",
                "Promoting recycling and environmental responsibility",
                "Empowering waste vendors with digital tools",
                "Delivering measurable environmental and economic impact",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#09B309] flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6H9.5M6 2.5L9.5 6L6 9.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[14px] leading-[20px] text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative px-5 md:px-10 lg:px-[58px] py-16 lg:py-20 bg-white dark:bg-[#0F1210]">
        <div className="absolute inset-0 pointer-events-none dark:opacity-40" style={{ background: "radial-gradient(90% 90% at 50% 50%, rgba(9,179,9,0.5) 0%, rgba(9,179,9,0.28) 30%, rgba(9,179,9,0.12) 55%, transparent 85%)" }} />
        <div className="relative z-10 max-w-[1216px] mx-auto flex flex-col items-center gap-12">
          <motion.div
            className="flex flex-col items-center gap-[14px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309] text-center">
              Our Core Values
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[34px] lg:leading-[40px] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
              The Principles That Define Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Sustainability",
                description: "We prioritize environmentally responsible solutions that promote recycling and reduce waste impact.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15 8L8 14M12 2L9 8L16 14" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Innovation",
                description: "We use technology to solve complex waste management challenges in smarter, scalable ways.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#09B309" strokeWidth="1.67" />
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description: "We operate with transparency, accountability, and ethical standards in all we do.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="2" stroke="#09B309" strokeWidth="1.67" />
                    <path d="M8 2V22M2 12H22" stroke="#09B309" strokeWidth="1.67" />
                  </svg>
                ),
              },
              {
                title: "Efficiency",
                description: "We focus on delivering reliable, timely, and optimized waste management services.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M2 7H22M16 7V17L12 15L8 17V7" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description: "We believe in building strong partnerships with vendors, governments, and communities.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M11 15L7 19M7 15L3 19M17 9L21 5M17 5L13 9M7 7L17 17" stroke="#09B309" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Impact-Driven",
                description: "We are committed to creating measurable environmental and social change.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#09B309" strokeWidth="1.67" />
                    <circle cx="12" cy="12" r="6" stroke="#09B309" strokeWidth="1.67" />
                    <circle cx="12" cy="12" r="2" stroke="#09B309" strokeWidth="1.67" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                className="flex flex-col gap-[7px] p-6 bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-11 h-11 flex items-center justify-center bg-[#09B309]/10 rounded-[12px]">
                  {value.icon}
                </div>
                <h4 className="text-[16px] font-bold leading-[24px] text-[#171C1A] dark:text-white mt-[9px]">
                  {value.title}
                </h4>
                <p className="text-[14px] leading-[23px] text-[#6D7873]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Management */}
      <section className="bg-white dark:bg-[#0F1210] px-5 md:px-10 lg:px-[58px] py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto flex flex-col items-center gap-12">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center gap-[14px] max-w-[672px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[12px] font-bold leading-[16px] tracking-[1.2px] uppercase text-[#09B309] text-center">
              Leadership & Management
            </span>
            <h2 className="text-[28px] lg:text-[36px] font-extrabold leading-[34px] lg:leading-[40px] text-center text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
              Driving Vision, Innovation, and Execution
            </h2>
            <p className="text-[14px] lg:text-[16px] leading-[22px] lg:leading-[24px] text-center text-[#6D7873] mt-[1.5px]">
              WasteWise is led by a team of visionary leaders with diverse experience in technology, business, and strategic development.
            </p>
          </motion.div>

          {/* Board of Directors */}
          <div className="w-full flex flex-col gap-8">
            <h3 className="text-[14px] font-bold leading-[20px] tracking-[1.4px] uppercase text-[#6D7873] text-center">
              Board of Directors
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  name: "Mrs. Judith Aiyesan",
                  role: "NDDC Director",
                  bio: "A seasoned public sector leader with deep experience in regional development and government operations. She brings strategic insight into policy alignment, institutional partnerships, and large-scale environmental initiatives.",
                },
                {
                  name: "Nicolas (UK)",
                  role: "Director",
                  bio: "An international business professional with exposure to global markets and investment ecosystems. Nicolas contributes strategic guidance in scaling WasteWise for international relevance and investor alignment.",
                },
                {
                  name: "Afekemor Gift",
                  role: "Founder & Chief Executive Officer",
                  bio: "A technology entrepreneur, software developer, and project strategist with extensive experience in building scalable digital solutions. Gift leads WasteWise with a clear vision to transform waste management through innovation, partnerships, and execution excellence.",
                },
                {
                  name: "Index Afekemor",
                  role: "Co-Founder",
                  bio: "A forward-thinking entrepreneur with a strong passion for innovation and systems development. Index plays a key role in shaping the strategic direction and growth framework of WasteWise.",
                },
              ].map((member, i) => (
                <TeamCard key={member.name} member={member} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
