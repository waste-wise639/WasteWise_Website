"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "@carbon/icons-react";
import { useWaitlist } from "@/context/WaitlistContext";

const businessTypes = [
  "Waste Collection",
  "Recycling",
  "Composting",
  "E-Waste Management",
  "Hazardous Waste",
  "General Waste Management",
];

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
  "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau",
  "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

interface Step1Fields {
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  businessType: string;
  country: string;
  state: string;
  lga: string;
  referralCode: string;
}

export default function WaitlistStep1() {
  const router = useRouter();
  const { formData, updateFormData } = useWaitlist();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1Fields>({
    defaultValues: {
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      businessName: formData.businessName,
      businessType: formData.businessType,
      country: formData.country,
      state: formData.state,
      lga: formData.lga,
      referralCode: formData.referralCode,
    },
  });

  const onSubmit = (data: Step1Fields) => {
    updateFormData(data);
    router.push("/waitlist/business");
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white border border-[#E3E8E3] rounded-[24px] p-8 lg:py-10 lg:px-8"
      style={{
        boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.05), 0px 4px 6px -4px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Card Header */}
      <div className="flex flex-col gap-0 mb-6">
        <h2 className="text-[20px] font-bold leading-[28px] text-[#171C1A]">
          Personal Info
        </h2>
        <p className="text-[14px] leading-[20px] text-[#6D7873]">
          Tell us about yourself
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-5 pb-2">
        {/* Full Name & Phone — 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Full Name <span>*</span>
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              placeholder="e.g. Gift Pepple"
              className={`h-[44px] px-4 rounded-[12px] border bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all ${
                errors.fullName
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.fullName && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.fullName.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Phone Number <span>*</span>
            </label>
            <input
              {...register("phone", { required: "Phone number is required" })}
              type="tel"
              placeholder="+234 800 000 0000"
              className={`h-[44px] px-4 rounded-[12px] border bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all ${
                errors.phone
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.phone && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.phone.message}
              </motion.span>
            )}
          </div>
        </div>

        {/* Email — full width */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Email Address <span>*</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
            type="email"
            placeholder="you@example.com"
            className={`h-[44px] px-4 rounded-[12px] border bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all ${
              errors.email
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
            }`}
          />
          {errors.email && (
            <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
              {errors.email.message}
            </motion.span>
          )}
        </div>

        {/* Business Name & Business Type — 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Business Name <span>*</span>
            </label>
            <input
              {...register("businessName", { required: "Business name is required" })}
              placeholder="e.g. GreenEarth Waste Ltd."
              className={`h-[44px] px-4 rounded-[12px] border bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all ${
                errors.businessName
                  ? "border-red-400 focus:ring-2 focus:ring-red-100"
                  : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
              }`}
            />
            {errors.businessName && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.businessName.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Business Type <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("businessType", { required: "Select a business type" })}
                className={`w-full h-[44px] px-4 pr-10 rounded-[12px] border bg-white text-[14px] text-[#171C1A] outline-none appearance-none cursor-pointer transition-all ${
                  errors.businessType
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                }`}
              >
                <option value="" disabled>Select type...</option>
                {businessTypes.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.businessType && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.businessType.message}
              </motion.span>
            )}
          </div>
        </div>

        {/* Country, State, LGA — 3 col selects */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Country <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("country", { required: "Country is required" })}
                className={`w-full h-[44px] px-4 pr-8 rounded-[12px] border bg-white text-[14px] outline-none appearance-none cursor-pointer transition-all ${
                  errors.country
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${watch("country") ? "text-[#171C1A]" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>e.g. Nigeria</option>
                <option value="Nigeria">Nigeria</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.country && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.country.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              State <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("state", { required: "State is required" })}
                className={`w-full h-[44px] px-4 pr-8 rounded-[12px] border bg-white text-[14px] outline-none appearance-none cursor-pointer transition-all ${
                  errors.state
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${watch("state") ? "text-[#171C1A]" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>e.g. Rivers</option>
                {nigerianStates.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.state && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.state.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              LGA <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("lga", { required: "LGA is required" })}
                className={`w-full h-[44px] px-4 pr-8 rounded-[12px] border bg-white text-[14px] outline-none appearance-none cursor-pointer transition-all ${
                  errors.lga
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${watch("lga") ? "text-[#171C1A]" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>e.g. Obio-Akpor</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.lga && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.lga.message}
              </motion.span>
            )}
          </div>
        </div>

        {/* Referral Code — full width */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Referral Code
          </label>
          <input
            {...register("referralCode")}
            placeholder="e.g. RIWAMA_Rivers"
            className="h-[44px] px-4 rounded-[12px] border border-[#E3E8E3] bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#E3E8E3]">
        <motion.button
          type="button"
          disabled
          className="flex items-center gap-4 h-[44px] px-6 rounded-full border border-[#E3E8E3] text-[14px] font-semibold text-[#171C1A] opacity-50 cursor-not-allowed"
          style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
        >
          <ArrowLeft size={16} />
          Back
        </motion.button>

        <motion.button
          type="submit"
          className="flex items-center gap-4 h-[44px] px-8 rounded-full bg-[#09B309] text-[14px] font-semibold text-white cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Continue
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.form>
  );
}
