"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "@carbon/icons-react";
import { useWaitlist } from "@/context/WaitlistContext";
import { submitWaitlist } from "@/services/waitlist";

const paymentMethods = [
  "Bank Transfer",
  "Mobile Money",
  "Cash",
  "POS",
];

interface Step4Fields {
  bankName: string;
  accountNumber: string;
  accountName: string;
  preferredPaymentMethod: string;
}

export default function WaitlistStep4() {
  const router = useRouter();
  const { formData, updateFormData } = useWaitlist();
  const [agreedToTerms, setAgreedToTerms] = useState(formData.agreedToTerms);
  const [termsError, setTermsError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step4Fields>({
    defaultValues: {
      bankName: formData.bankName,
      accountNumber: formData.accountNumber,
      accountName: formData.accountName,
      preferredPaymentMethod: formData.preferredPaymentMethod,
    },
  });

  const onSubmit = async (data: Step4Fields) => {
    if (!agreedToTerms) {
      setTermsError("You must agree to the terms and conditions");
      return;
    }

    const updatedData = { ...formData, ...data, agreedToTerms };
    updateFormData({ ...data, agreedToTerms });

    try {
      setIsSubmitting(true);
      await submitWaitlist(updatedData);
      setSubmitResult("success");
    } catch (err: any) {
      console.error("Submission failed:", err?.response?.data || err);
      const apiError = err?.response?.data;
      if (apiError?.errors) {
        const firstError = Object.values(apiError.errors).flat()[0] as string;
        setErrorMessage(firstError || apiError.message || "Submission failed. Please try again.");
      } else {
        setErrorMessage(apiError?.message || "Something went wrong. Please try again.");
      }
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white dark:bg-[#1A211A] border border-[#E3E8E3] dark:border-[#2A352A] rounded-[24px] p-6 sm:p-8 lg:py-10 lg:px-8"
      whileHover={{ boxShadow: "0px 16px 32px -8px rgba(0, 0, 0, 0.1)" }}
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.05), 0px 4px 6px -4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Card Header */}
      <div className="flex flex-col gap-0 mb-6">
        <h2 className="text-[20px] font-bold leading-[28px] text-[#171C1A] dark:text-white">
          Banking & Agreement
        </h2>
        <p className="text-[14px] leading-[20px] text-[#6D7873]">
          Payment & terms
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-4 sm:gap-5 pb-2">
        {/* Bank Name & Account Number — 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
              Bank Name <span>*</span>
            </label>
            <input
              {...register("bankName", { required: "Bank name is required" })}
              placeholder="e.g. Access Bank"
              className={`h-[44px] px-4 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white placeholder:text-[#6D7873] outline-none transition-all ${
                errors.bankName
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.bankName && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.bankName.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
              Account Number <span>*</span>
            </label>
            <input
              {...register("accountNumber", { required: "Account number is required" })}
              placeholder="800 000 0000"
              className={`h-[44px] px-4 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white placeholder:text-[#6D7873] outline-none transition-all ${
                errors.accountNumber
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.accountNumber && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.accountNumber.message}
              </motion.span>
            )}
          </div>
        </div>

        {/* Account Name — full width */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
            Account Name <span>*</span>
          </label>
          <input
            {...register("accountName", { required: "Account name is required" })}
            placeholder="e.g. GreenEarth Waste Ltd."
            className={`h-[44px] px-4 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white placeholder:text-[#6D7873] outline-none transition-all ${
              errors.accountName
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
            }`}
          />
          {errors.accountName && (
            <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
              {errors.accountName.message}
            </motion.span>
          )}
        </div>

        {/* Preferred Payment Method — dropdown */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A] dark:text-white">
            Preferred Payment Method <span>*</span>
          </label>
          <div className="relative">
            <select
              {...register("preferredPaymentMethod", { required: "Select a payment method" })}
              className={`w-full h-[44px] px-4 pr-10 rounded-[12px] border bg-white dark:bg-[#0F1210] text-[14px] text-[#171C1A] dark:text-white outline-none appearance-none cursor-pointer transition-all ${
                errors.preferredPaymentMethod
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] dark:border-[#2A352A] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              } ${formData.preferredPaymentMethod ? "text-[#171C1A] dark:text-white" : "text-[#6D7873]"}`}
            >
              <option value="" disabled>Select</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
          </div>
          {errors.preferredPaymentMethod && (
            <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
              {errors.preferredPaymentMethod.message}
            </motion.span>
          )}
        </div>

        {/* Terms & Conditions Checkbox */}
        <div
          className="flex items-start gap-2 sm:gap-3 p-[10px] sm:p-4 rounded-[10px] bg-[#F4FAF4] dark:bg-[#1A211A] border border-[#E7E7E7] dark:border-[#2A352A]"
        >
          <button
            type="button"
            onClick={() => { setAgreedToTerms(!agreedToTerms); setTermsError(""); }}
            className={`w-5 h-5 mt-0.5 rounded-[4px] border-2 flex-shrink-0 flex items-center justify-center transition-all ${
              agreedToTerms
                ? "bg-[#09B309] border-[#09B309]"
                : "bg-transparent border-[#6D7873] dark:border-[#555]"
            }`}
          >
            {agreedToTerms && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <span className="text-[12px] sm:text-[16px] leading-[16px] sm:leading-[22px] text-[#323332] dark:text-white/80">
            I agree to <a href="/vendor-policy" target="_blank" className="text-[#09B309] font-bold">WasteWise Terms & Conditions</a>{" "}
            and confirm that all information provided is accurate to the best of my knowledge.
          </span>
        </div>
        {termsError && (
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500 -mt-3">
            {termsError}
          </motion.span>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-3 pt-6 mt-6 border-t border-[#E3E8E3] dark:border-[#2A352A]">
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`flex items-center justify-center gap-4 h-[44px] w-full sm:w-auto px-8 rounded-full bg-[#09B309] text-[14px] font-semibold text-white cursor-pointer ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          whileHover={isSubmitting ? {} : { scale: 1.02 }}
          whileTap={isSubmitting ? {} : { scale: 0.97 }}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
          {!isSubmitting && <ArrowRight size={16} />}
        </motion.button>

        <motion.button
          type="button"
          onClick={() => router.push("/waitlist/operations")}
          className="flex items-center justify-center gap-4 h-[44px] w-full sm:w-auto px-6 rounded-full border border-[#E3E8E3] dark:border-[#2A352A] text-[14px] font-semibold text-[#171C1A] dark:text-white cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-white/5"
          style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>
      </div>
    </motion.form>

    {/* Success / Error Modal */}
    <AnimatePresence>
      {submitResult && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => submitResult === "error" && setSubmitResult(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] bg-white dark:bg-[#1A211A] rounded-[16px] z-50 flex flex-col items-center px-4 sm:px-6 py-8"
          >
            {submitResult === "success" ? (
              <>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mb-4">
                  <path d="M30 3.75C15.5025 3.75 3.75 15.5025 3.75 30C3.75 44.4975 15.5025 56.25 30 56.25C44.4975 56.25 56.25 44.4975 56.25 30C56.25 15.5025 44.4975 3.75 30 3.75ZM43.275 24.225L27.525 39.975C27.175 40.325 26.7 40.525 26.2 40.525C25.7 40.525 25.225 40.325 24.875 39.975L16.725 31.825C16 31.1 16 29.9 16.725 29.175C17.45 28.45 18.65 28.45 19.375 29.175L26.2 36L41.625 20.575C42.35 19.85 43.55 19.85 44.275 20.575C45 21.3 45 22.475 44.275 23.225L43.275 24.225Z" fill="#09B309"/>
                </svg>
                <h3 className="text-[24px] font-bold leading-[28px] text-[#09B309] text-center mb-4">
                  Successfully submitted
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium leading-[24px] text-[#4A4A4A] dark:text-white/70 text-center mb-6">
                  Thank you for your request. We are working hard to find the best service and deals for you. Shortly you will find a confirmation in your email.
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="w-full sm:w-[200px] h-[48px] bg-[#09B309] rounded-[8px] text-[16px] font-bold text-white"
                >
                  Go to Home
                </button>
              </>
            ) : (
              <>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="mb-4">
                  <path d="M30 5C16.2 5 5 16.2 5 30C5 43.8 16.2 55 30 55C43.8 55 55 43.8 55 30C55 16.2 43.8 5 30 5ZM40.25 37.75C41 38.5 41 39.7 40.25 40.25C39.875 40.625 39.375 40.825 38.875 40.825C38.375 40.825 37.875 40.625 37.5 40.25L30 32.75L22.5 40.25C22.125 40.625 21.625 40.825 21.125 40.825C20.625 40.825 20.125 40.625 19.75 40.25C19 39.5 19 38.3 19.75 37.75L27.25 30L19.75 22.5C19 21.75 19 20.55 19.75 19.75C20.5 19 21.7 19 22.5 19.75L30 27.25L37.5 19.75C38.25 19 39.45 19 40.25 19.75C41 20.5 41 21.7 40.25 22.5L32.75 30L40.25 37.75Z" fill="#EE393C"/>
                </svg>
                <h3 className="text-[24px] font-bold leading-[28px] text-[#EE393C] text-center mb-4">
                  Submission unsuccessful
                </h3>
                <p className="text-[14px] sm:text-[16px] font-medium leading-[24px] text-[#4A4A4A] dark:text-white/70 text-center mb-6">
                  {errorMessage}
                </p>
                <button
                  onClick={() => { setSubmitResult(null); setErrorMessage(""); }}
                  className="w-full sm:w-[200px] h-[48px] bg-[#09B309] rounded-[8px] text-[16px] font-bold text-white"
                >
                  Retry
                </button>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
