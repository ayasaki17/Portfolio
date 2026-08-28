export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string[];
  technologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Information System Analyst II",
    company: "Municipality of San Mateo, Rizal",
    location: "Onsite / PH",
    dateRange: "June 17, 2026 – Present",
    description: [
      "Analyzes, designs, and implements information systems to support municipal operations and services",
      "Evaluates existing systems for efficiency improvements and recommends technology-driven solutions",
      "Coordinates with departments to gather requirements and ensure systems align with organizational needs",
      "Oversees data integrity, system security, and compliance with government ICT standards",
      "Provides technical guidance and training to staff on the use of information systems",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "React",
      "Git",
    ],
  },
  {
    id: 2,
    title: "IT Programmer",
    company: "Municipality of San Mateo, Rizal",
    location: "Onsite / PH",
    dateRange: "2024 – June 2026",
    description: [
      "Led the development and maintenance of internal government systems and web applications",
      "Designed and implemented scalable backend features using PHP and Laravel framework",
      "Optimized database queries and system performance for faster transaction processing",
      "Collaborated with cross-functional teams to deliver reliable and user-friendly solutions",
      "Maintained version control and improved deployment workflows",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote / PH",
    dateRange: "2023 – Present",
    description: [
      "Developed and deployed custom web applications for small businesses and individual clients",
      "Built responsive and user-friendly interfaces using modern frontend technologies",
      "Implemented backend functionality, including database design and API integration",
      "Maintained and updated client systems, ensuring performance, security, and reliability",
      "Collaborated directly with clients to gather requirements and deliver tailored solutions",
    ],
    technologies: [
      "Node.js",
      "React",
      "Express.js",
      "MongoDB",
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "RestAPI",
      "Git",
    ],
  },
  {
    id: 4,
    title: "IT Staff",
    company: "Municipality of San Mateo, Rizal",
    location: "Onsite / PH",
    dateRange: "2023 – 2024",
    description: [
      "Collaborated with the development team in building and maintaining internal government systems and web applications",
      "Developed and enhanced system features using HTML, CSS, JavaScript, and MySQL",
      "Participated in backend and database tasks, including data handling and query optimization",
      "Provided technical support by troubleshooting hardware, software, and network issues",
      "Contributed to UI improvements to enhance usability and overall user experience",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap", "Git"],
  },
];
