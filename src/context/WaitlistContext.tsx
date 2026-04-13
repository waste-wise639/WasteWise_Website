"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface WaitlistFormData {
  // Step 1 — Personal Info
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
  businessType: string;
  country: string;
  state: string;
  lga: string;
  referralCode: string;
  // Step 2 — Business Details
  registrationStatus: "registered" | "not-registered" | "";
  cacNumber: string;
  yearsOfExperience: string;
  numberOfStaff: string;
  operationalCoverageArea: string;
  idDocument: File | null;
  businessDocument: File | null;
  // Step 3 — Operations
  wasteTypes: string[];
  ownsVehicles: "yes" | "no" | "";
  numberOfVehicles: string;
  dailyWeeklyCapacity: string;
  availability: "full-time" | "part-time" | "";
  // Step 4 — Banking & Agreement
  bankName: string;
  accountNumber: string;
  accountName: string;
  preferredPaymentMethod: string;
  agreedToTerms: boolean;
}

const defaultFormData: WaitlistFormData = {
  fullName: "",
  phone: "",
  email: "",
  businessName: "",
  businessType: "",
  country: "",
  state: "",
  lga: "",
  referralCode: "",
  registrationStatus: "",
  cacNumber: "",
  yearsOfExperience: "",
  numberOfStaff: "",
  operationalCoverageArea: "",
  idDocument: null,
  businessDocument: null,
  wasteTypes: [],
  ownsVehicles: "",
  numberOfVehicles: "",
  dailyWeeklyCapacity: "",
  availability: "",
  bankName: "",
  accountNumber: "",
  accountName: "",
  preferredPaymentMethod: "",
  agreedToTerms: false,
};

interface WaitlistContextType {
  formData: WaitlistFormData;
  updateFormData: (data: Partial<WaitlistFormData>) => void;
}

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<WaitlistFormData>(defaultFormData);

  const updateFormData = (data: Partial<WaitlistFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <WaitlistContext.Provider value={{ formData, updateFormData }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
