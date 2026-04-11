"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Email, Phone, Location } from "@carbon/icons-react";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const contactInfo = [
  { icon: Email, label: "Email Us", value: "support@wastewiseinc.com" },
  { icon: Phone, label: "Call Us", value: "+234 902 501 3289" },
  { icon: Location, label: "Visit Us", value: "19B Ada George Road, Port Harcourt" },
];

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    console.log("Contact form:", data);
    await new Promise((r) => setTimeout(r, 1500));
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-white border-t border-[#F1F5F9] px-6 md:px-10 lg:px-[58px]">
      <div className="max-w-[1280px] mx-auto py-24 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-10">
          <motion.div
            className="flex-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-3 py-1 w-fit bg-[#09B309]/10 border border-[#0BAE0B]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#09B309]" />
              <span className="text-xs font-bold tracking-[1.2px] uppercase text-[#09B309] font-[family-name:var(--font-rethink)]">
                Support Center
              </span>
            </div>

            <h2 className="text-[32px] lg:text-[48px] font-extrabold leading-[60px] tracking-[-1.2px] text-[#171C1A] font-[family-name:var(--font-rethink)]">
              Ready to make a <span className="text-[#09B309]">difference?</span>
            </h2>

            <div className="flex flex-col gap-6 pt-2">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-5"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#09B309]/10 rounded-xl shrink-0">
                      <Icon size={20} className="text-[#09B309]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold uppercase tracking-[0.35px] text-[#0F172A] font-[family-name:var(--font-rethink)]">
                        {info.label}
                      </span>
                      <span className="text-base text-[#64748B] font-[family-name:var(--font-rethink)]">
                        {info.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[580px] shrink-0 bg-[#F8FAFC] border border-[#F1F5F9] rounded-[40px] p-12 shadow-[0px_25px_50px_-12px_rgba(226,232,240,0.5)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#64748B] pl-1 font-[family-name:var(--font-rethink)]">
                    Full Name
                  </label>
                  <input
                    {...register("fullName", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`h-14 w-full bg-white rounded-xl px-4 text-base font-medium text-[#171C1A] placeholder:text-[#9CA3AF] outline-none font-[family-name:var(--font-rethink)] shadow-[0px_0px_0px_1px_#E2E8F0] focus:shadow-[0px_0px_0px_2px_#09B309] transition-shadow ${errors.fullName ? "shadow-[0px_0px_0px_1px_#ef4444]" : ""}`}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase text-[#64748B] pl-1 font-[family-name:var(--font-rethink)]">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })}
                    placeholder="john@example.com"
                    className={`h-14 w-full bg-white rounded-xl px-4 text-base font-medium text-[#171C1A] placeholder:text-[#9CA3AF] outline-none font-[family-name:var(--font-rethink)] shadow-[0px_0px_0px_1px_#E2E8F0] focus:shadow-[0px_0px_0px_2px_#09B309] transition-shadow ${errors.email ? "shadow-[0px_0px_0px_1px_#ef4444]" : ""}`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase text-[#64748B] pl-1 font-[family-name:var(--font-rethink)]">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="How can we help you?"
                  rows={4}
                  className={`w-full bg-white rounded-xl px-4 py-4 text-base text-[#171C1A] placeholder:text-[#9CA3AF] outline-none resize-none font-[family-name:var(--font-rethink)] shadow-[0px_0px_0px_1px_#E2E8F0] focus:shadow-[0px_0px_0px_2px_#09B309] transition-shadow ${errors.message ? "shadow-[0px_0px_0px_1px_#ef4444]" : ""}`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 bg-[#09B309] text-white text-base font-bold rounded-full disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mx-auto"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
