export interface Training {
  id: number;
  title: string;
  organization: string;
  date: string;
  duration: string;
  topics: string[];
}

export const trainings: Training[] = [
  {
    id: 1,
    title: "Cloud and DevOps Basics",
    organization: "DICT - CAR",
    date: "11/18/2025",
    duration: "4 hours",
    topics: ["Cloud Computing", "DevOps Fundamentals", "Infrastructure Basics"],
  },
  {
    id: 2,
    title: "Executive Briefing for Digital Leaders 2024",
    organization: "DICT and ILCDB",
    date: "12/04/2024 - 12/05/2024",
    duration: "14 hours",
    topics: ["Digital Leadership", "ICT Governance", "Digital Transformation"],
  },
  {
    id: 3,
    title: "NIST Cybersecurity Framework 2.0 Briefer",
    organization: "DICT and USAID",
    date: "11/20/2024",
    duration: "4 hours",
    topics: ["Cybersecurity Framework", "Risk Management", "Security Standards"],
  },
  {
    id: 4,
    title: "National Cybersecurity Plan 2023–2028 Primer",
    organization: "DICT and USAID",
    date: "10/23/2024",
    duration: "4 hours",
    topics: ["Cybersecurity Policy", "National Security Strategy", "Digital Protection"],
  },
  {
    id: 5,
    title: "Data Privacy Compliance Checklist",
    organization: "Interglic Consultancy OPC",
    date: "06/26/2024",
    duration: "6 hours",
    topics: ["Data Privacy Act", "Compliance", "Information Security"],
  },
  {
    id: 6,
    title: "Web Development for Web Developers",
    organization: "DICT Region IV-A",
    date: "11/06/2023 - 11/17/2023",
    duration: "40 hours",
    topics: ["Frontend Development", "Backend Development", "Web Development"],
  },
  {
    id: 7,
    title: "Cybersecurity Against Cyber Attacks",
    organization: "DICT Region V - Sorsogon",
    date: "10/25/2022",
    duration: "3 hours",
    topics: ["Cyber Threats", "Malware Protection", "Cyber Defense"],
  },
  {
    id: 8,
    title: "Technical Webinar on Security and Privacy",
    organization: "DICT Region V - Catanduanes",
    date: "10/20/2022",
    duration: "2 hours",
    topics: ["Security Awareness", "Privacy Protection", "Best Practices"],
  },
  {
    id: 9,
    title: "Protecting One’s Digital Identity",
    organization: "DICT Region V - Catanduanes",
    date: "10/14/2022",
    duration: "1 hour",
    topics: ["Digital Identity", "Account Security", "Online Safety"],
  },
  {
    id: 10,
    title: "Your Path to Cyberspace: Embracing a Career in Cybersecurity",
    organization: "DICT Region V - Camarines Sur",
    date: "10/11/2022",
    duration: "3 hours",
    topics: ["Cybersecurity Careers", "Industry Pathways", "Digital Skills"],
  },
  {
    id: 11,
    title: "WiFi Campaign: Basic Information and Troubleshooting of WiFi and Internet for Online Learning",
    organization: "Quezon City University",
    date: "10/08/2022",
    duration: "3 hours",
    topics: ["Network Troubleshooting", "WiFi Setup", "Internet Connectivity"],
  },
  {
    id: 12,
    title: "Generative Artificial Intelligence",
    organization: "Universidad de Manila",
    date: "10/07/2022",
    duration: "3 hours",
    topics: ["Generative AI", "Machine Learning Basics", "AI Applications"],
  },
  {
    id: 13,
    title: "Cybersecurity Trends and Certifications for Developers",
    organization: "AWS",
    date: "10/07/2022",
    duration: "1.5 hours",
    topics: ["Cybersecurity Trends", "Developer Security", "Certifications"],
  },
];
