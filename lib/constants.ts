export const APP_NAME = process.env.APP_NAME || "MedIntel";
export const APP_SLOGAN =
  process.env.APP_SLOGAN || "AI Insights for Early Disease Detection";
export const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION ||
  "MedIntel is a research-backed application designed to analyze symptoms and predict potential diseases with AI accuracy.";

export const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

export const genotypeOptions = [
  { value: "AA", label: "AA" },
  { value: "AS", label: "AS" },
  { value: "SS", label: "SS" },
  { value: "AC", label: "AC" },
  { value: "SC", label: "SC" },
];

export const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
