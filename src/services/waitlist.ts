import { supabase } from "@/services/supabaseClient";
import { WaitlistFormData } from "@/context/WaitlistContext";

const ID_BUCKET = "vendor-id-documents";
const BUSINESS_BUCKET = "vendor-business-documents";

function extractNumber(str: string): number | null {
  const match = str.match(/\d+/);
  return match ? Number(match[0]) : null;
}

function normalizePhone(phone: string): string {
  const raw = phone.replace(/\s/g, "").replace(/^\+234/, "").replace(/^234/, "").replace(/^0+/, "");
  return `0${raw}`;
}

async function uploadDocument(bucket: string, folder: string, file: File): Promise<string> {
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const path = `${folder}/${Date.now()}-${safeName}`;

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    console.error(`Upload to ${bucket} failed:`, error);
    throw new Error("We couldn't upload your documents. Please try again.");
  }

  return path;
}

export async function submitWaitlist(formData: WaitlistFormData) {
  const folder = crypto.randomUUID();

  const [idDocumentPath, businessDocumentPath] = await Promise.all([
    formData.idDocument ? uploadDocument(ID_BUCKET, folder, formData.idDocument) : null,
    formData.businessDocument ? uploadDocument(BUSINESS_BUCKET, folder, formData.businessDocument) : null,
  ]);

  const { error } = await supabase.from("vendor_waitlist").insert({
    full_name: formData.fullName,
    email: formData.email.trim().toLowerCase(),
    phone_number: normalizePhone(formData.phone),
    business_name: formData.businessName,
    business_type: formData.businessType,
    country: formData.country || "Nigeria",
    state: formData.state,
    lga: formData.lga,
    referral_code: formData.referralCode,

    registration_status: formData.registrationStatus,
    cac_number: formData.cacNumber || null,
    years_of_experience: extractNumber(formData.yearsOfExperience),
    number_of_staff: extractNumber(formData.numberOfStaff),
    operational_coverage_area: formData.operationalCoverageArea,
    id_document_path: idDocumentPath,
    business_document_path: businessDocumentPath,

    waste_types: formData.wasteTypes,
    owns_vehicles: formData.ownsVehicles === "yes",
    number_of_vehicles: formData.ownsVehicles === "yes" ? extractNumber(formData.numberOfVehicles) : 0,
    daily_capacity: formData.dailyCapacity,
    weekly_capacity: formData.weeklyCapacity,
    availability: formData.availability,

    bank_name: formData.bankName,
    account_number: formData.accountNumber,
    account_name: formData.accountName,
    preferred_payment_method: formData.preferredPaymentMethod,
    agreed_to_terms: formData.agreedToTerms,
  });

  if (error) {
    console.error("Waitlist insert failed:", error);
    if (error.code === "23505") {
      throw new Error("This email is already on the waitlist.");
    }
    throw new Error("Submission failed. Please try again.");
  }
}
