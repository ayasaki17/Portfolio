export interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialLink?: string;
  badge: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Civil Service Eligibility (Professional)",
    organization: "Civil Service Commission (Philippines)",
    date: "2024",
    credentialLink: "https://csevs.csc.gov.ph/user/eligibility",
    badge: "Government Eligibility",
  },
];
