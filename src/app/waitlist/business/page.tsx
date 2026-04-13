"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown, Upload } from "@carbon/icons-react";
import { useWaitlist } from "@/context/WaitlistContext";

const experienceOptions = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "5–10 years",
  "10+ years",
];

const staffOptions = [
  "1–5",
  "6–10",
  "11–25",
  "26–50",
  "50+",
];

interface Step2Fields {
  registrationStatus: "registered" | "not-registered";
  cacNumber: string;
  yearsOfExperience: string;
  numberOfStaff: string;
  operationalCoverageArea: string;
}

export default function WaitlistStep2() {
  const router = useRouter();
  const { formData, updateFormData } = useWaitlist();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Step2Fields>({
    defaultValues: {
      registrationStatus: formData.registrationStatus || undefined,
      cacNumber: formData.cacNumber,
      yearsOfExperience: formData.yearsOfExperience,
      numberOfStaff: formData.numberOfStaff,
      operationalCoverageArea: formData.operationalCoverageArea,
    },
  });

  const registrationStatus = watch("registrationStatus");

  const [idFile, setIdFile] = useState<File | null>(formData.idDocument);
  const [businessFile, setBusinessFile] = useState<File | null>(formData.businessDocument);
  const idInputRef = useRef<HTMLInputElement>(null);
  const businessInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: Step2Fields) => {
    updateFormData({
      ...data,
      idDocument: idFile,
      businessDocument: businessFile,
    });
    router.push("/waitlist/operations");
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
          Business Details
        </h2>
        <p className="text-[14px] leading-[20px] text-[#6D7873]">
          Your business profile
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-5 pb-2">
        {/* Business Registration Status — 2 toggle buttons */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Business Registration Status <span>*</span>
          </label>
          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              onClick={() => setValue("registrationStatus", "registered", { shouldValidate: true })}
              className={`h-[44px] rounded-[12px] text-[14px] font-medium transition-all ${
                registrationStatus === "registered"
                  ? "bg-[#09B309] text-white"
                  : "bg-white border border-[#E3E8E3] text-[#6D7873]"
              }`}
            >
              Registered
            </button>
            <button
              type="button"
              onClick={() => setValue("registrationStatus", "not-registered", { shouldValidate: true })}
              className={`h-[44px] rounded-[12px] text-[14px] font-medium transition-all ${
                registrationStatus === "not-registered"
                  ? "bg-[#09B309] text-white"
                  : "bg-white border border-[#E3E8E3] text-[#6D7873]"
              }`}
            >
              Not Registered
            </button>
          </div>
          <input type="hidden" {...register("registrationStatus", { required: "Select registration status" })} />
          {errors.registrationStatus && (
            <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
              {errors.registrationStatus.message}
            </motion.span>
          )}
        </div>

        {/* CAC Number — full width */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            CAC Number
          </label>
          <input
            {...register("cacNumber")}
            placeholder="e.g. RC12345"
            className="h-[44px] px-4 rounded-[12px] border border-[#E3E8E3] bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
          />
        </div>

        {/* Years of Experience & Number of Staff — 2 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Years of Experience <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("yearsOfExperience", { required: "Select years of experience" })}
                className={`w-full h-[44px] px-4 pr-10 rounded-[12px] border bg-white text-[14px] outline-none appearance-none cursor-pointer transition-all ${
                  errors.yearsOfExperience
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${watch("yearsOfExperience") ? "text-[#171C1A]" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>Select</option>
                {experienceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.yearsOfExperience && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.yearsOfExperience.message}
              </motion.span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
              Number of Drivers/Staff <span>*</span>
            </label>
            <div className="relative">
              <select
                {...register("numberOfStaff", { required: "Select number of staff" })}
                className={`w-full h-[44px] px-4 pr-10 rounded-[12px] border bg-white text-[14px] outline-none appearance-none cursor-pointer transition-all ${
                  errors.numberOfStaff
                    ? "border-red-400 focus:ring-2 focus:ring-red-100"
                    : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
                } ${watch("numberOfStaff") ? "text-[#171C1A]" : "text-[#6D7873]"}`}
              >
                <option value="" disabled>Select</option>
                {staffOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6D7873] pointer-events-none" />
            </div>
            {errors.numberOfStaff && (
              <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
                {errors.numberOfStaff.message}
              </motion.span>
            )}
          </div>
        </div>

        {/* Operational Coverage Area — full width */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Operational Coverage Area <span>*</span>
          </label>
          <input
            {...register("operationalCoverageArea", { required: "Coverage area is required" })}
            placeholder="e.g. Port Harcourt, Obio-Akpor"
            className={`h-[44px] px-4 rounded-[12px] border bg-white text-[14px] text-[#171C1A] placeholder:text-[#6D7873] outline-none transition-all ${
              errors.operationalCoverageArea
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-[#E3E8E3] focus:border-[#09B309] focus:ring-2 focus:ring-[#09B309]/10"
            }`}
          />
          {errors.operationalCoverageArea && (
            <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] text-red-500">
              {errors.operationalCoverageArea.message}
            </motion.span>
          )}
        </div>

        {/* Upload ID */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Upload ID (NIN / Voter&apos;s Card / Driver&apos;s License)
          </label>
          <FileUploadZone
            file={idFile}
            onFileChange={setIdFile}
            inputRef={idInputRef}
          />
        </div>

        {/* Upload Business Documents */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold leading-[20px] text-[#171C1A]">
            Upload Business Documents <span>*</span>
          </label>
          <FileUploadZone
            file={businessFile}
            onFileChange={setBusinessFile}
            inputRef={businessInputRef}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#E3E8E3]">
        <motion.button
          type="button"
          onClick={() => router.push("/waitlist")}
          className="flex items-center gap-4 h-[44px] px-6 rounded-full border border-[#E3E8E3] text-[14px] font-semibold text-[#171C1A] cursor-pointer hover:bg-[#F5F5F5]"
          style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)" }}
          whileTap={{ scale: 0.97 }}
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

/* ─── File Upload Zone ─── */

function FileUploadZone({
  file,
  onFileChange,
  inputRef,
}: {
  file: File | null;
  onFileChange: (file: File | null) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile) onFileChange(droppedFile);
    },
    [onFileChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-[10px] border border-dashed cursor-pointer transition-colors ${
        isDragging
          ? "border-[#09B309] bg-[#09B309]/5"
          : "border-[#E0E1E0] bg-[#FAFAFA] hover:border-[#09B309]/40"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.svg,.pdf"
        className="hidden"
        onChange={(e) => {
          const selected = e.target.files?.[0];
          if (selected) onFileChange(selected);
        }}
      />

      {file ? (
        <div className="flex flex-col items-center gap-1">
          <p className="text-[13px] font-medium text-[#09B309]">{file.name}</p>
          <p className="text-[10px] text-[#6D7873]">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFileChange(null);
              if (inputRef.current) inputRef.current.value = "";
            }}
            className="text-[11px] text-red-500 hover:underline mt-1"
          >
            Remove
          </button>
        </div>
      ) : (
        <>
          <Upload size={20} className="text-[#343330]" />
          <p className="text-[11px] font-bold leading-[16px] text-[#09B309] text-center">
            Click or drag and drop here
          </p>
          <p className="text-[10px] text-[#52525B]">
            .png, .jpg .svg up to 5MB
          </p>
        </>
      )}
    </div>
  );
}
