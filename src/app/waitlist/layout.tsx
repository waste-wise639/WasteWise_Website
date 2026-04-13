"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const currentStep = steps.findIndex((s) => s.path === pathname) + 1 || 1;

  return (
    <WaitlistProvider>
      <div
        className="min-h-screen flex flex-col"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, rgba(9, 179, 9, 0.15) 30%, rgba(9, 179, 9, 0.35) 60%, rgba(9, 179, 9, 0.5) 100%)",
        }}
      >
        {/* Header */}
        <header
          className="w-full shrink-0 sticky top-0 z-50"
          style={{ background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(2px)" }}
        >
          <div className="max-w-[768px] mx-auto flex items-center justify-between h-[64px] px-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-[14px] font-medium text-[#6D7873] hover:text-[#171C1A] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>

            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/wastewise-logo.jpg" alt="WasteWise" width={42} height={42} className="rounded" />
              <span className="text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-[#171C1A] font-[family-name:var(--font-rethink)]">
                Waste<span className="text-[#09B309]">Wise</span>
              </span>
            </Link>

            <span className="text-[14px] font-medium text-[#6D7873]">
              {currentStep} / 4
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="w-full max-w-[768px] mx-auto px-4 py-10 flex flex-col gap-8">
            {/* Page Title */}
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-extrabold leading-[36px] text-[#171C1A] font-[family-name:var(--font-jakarta)]">
                Join Vendor Waitlist
              </h1>
              <p className="text-[16px] leading-[24px] text-[#6D7873]">
                Become a verified WasteWise waste management partner.
              </p>
            </div>

            {/* Progress Stepper */}
            <div className="flex items-center justify-center gap-0">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold ${
                          currentStep >= step.number
                            ? "bg-[#09B309] text-white"
                            : "bg-[#E3E8E3] text-[#6D7873]"
                        }`}
                      >
                        {step.number}
                      </div>
                      {currentStep === step.number && (
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{ boxShadow: "0px 0px 0px 4px rgba(9, 179, 9, 0.2)" }}
                        />
                      )}
                    </div>

                    <span
                      className={`text-[12px] font-semibold leading-[16px] whitespace-nowrap ${
                        currentStep >= step.number ? "text-[#171C1A]" : "text-[#6D7873]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`h-[2px] mx-2 flex-1 rounded-full ${
                        currentStep > step.number ? "bg-[#09B309]" : "bg-[#E3E8E3]"
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
