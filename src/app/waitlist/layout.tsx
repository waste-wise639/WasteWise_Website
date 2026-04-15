"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "@carbon/icons-react";
import { WaitlistProvider } from "@/context/WaitlistContext";

const steps = [
  { number: 1, label: "Personal Info", path: "/waitlist" },
  { number: 2, label: "Business Details", path: "/waitlist/business" },
  { number: 3, label: "Operations", path: "/waitlist/operations" },
  { number: 4, label: "Banking & Agreement", path: "/waitlist/banking" },
];

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const cleanPath = pathname.replace(/\/$/, "") || "/waitlist";
  const currentStep = steps.findIndex((s) => s.path === cleanPath) + 1 || 1;

  return (
    <WaitlistProvider>
      <div className="min-h-screen flex flex-col relative bg-white dark:bg-[#0F1210]">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none dark:opacity-30 hidden sm:block"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(9, 179, 9, 0.15) 30%, rgba(9, 179, 9, 0.35) 60%, rgba(9, 179, 9, 0.5) 100%)",
          }}
        />

        {/* Header */}
        <header className="relative z-50 w-full shrink-0 sticky top-0 bg-white/80 dark:bg-[#0F1210]/80 backdrop-blur-[2px]">
          <div className="max-w-[768px] mx-auto flex items-center justify-between h-[64px] px-5">
            <motion.div whileHover={{ x: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="flex items-center gap-2 text-[14px] font-medium text-[#6D7873] hover:text-[#171C1A] dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </Link>
            </motion.div>

            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/wastewise-logo.jpg" alt="WasteWise" width={42} height={42} className="rounded" />
              <span className="text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-[#171C1A] dark:text-white font-[family-name:var(--font-rethink)]">
                Waste<span className="text-[#09B309]">Wise</span>
              </span>
            </Link>

            <span className="text-[14px] font-medium text-[#6D7873]">
              {currentStep} / 4
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 relative z-10">
          <div className="w-full max-w-[768px] mx-auto px-4 py-10 sm:py-10 flex flex-col gap-8">
            {/* Page Title */}
            <motion.div
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[30px] font-extrabold leading-[36px] text-[#171C1A] dark:text-white font-[family-name:var(--font-jakarta)]">
                Join Vendor Waitlist
              </h1>
              <p className="text-[16px] leading-[24px] text-[#6D7873]">
                Become a verified WasteWise waste management partner.
              </p>
            </motion.div>

            {/* Progress Stepper */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-y-4 gap-x-0">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center w-1/2 sm:w-auto sm:flex-1">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <motion.div
                        className={`w-6 sm:w-8 h-6 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-[12px] font-bold ${
                          currentStep >= step.number
                            ? "bg-[#09B309] text-white"
                            : "bg-[#E3E8E3] dark:bg-[#2A352A] text-[#6D7873]"
                        }`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {step.number}
                      </motion.div>
                      {currentStep === step.number && (
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          style={{ boxShadow: "0px 0px 0px 4px rgba(9, 179, 9, 0.2)" }}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </div>

                    <span
                      className={`text-[10px] sm:text-[12px] font-semibold leading-[16px] whitespace-nowrap ${
                        currentStep >= step.number ? "text-[#171C1A] dark:text-white" : "text-[#6D7873]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`h-[2px] mx-2 w-[42px] sm:w-auto sm:flex-1 rounded-full ${index === 1 ? "hidden sm:block" : ""} ${
                        currentStep > step.number ? "bg-[#09B309]" : "bg-[#E3E8E3] dark:bg-[#2A352A]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            {children}
          </div>
        </main>
      </div>
    </WaitlistProvider>
  );
}
