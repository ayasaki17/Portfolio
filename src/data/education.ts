export interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  dateRange: string;
  details: string[];
}

export const education: Education[] = [
  {
    id: 1,
    institution: "Technological Institute of the Philippines",
    degree: "Bachelor of Science in Information Technology",
    location: "Quezon City, Philippines",
    dateRange: "2019 - 2023",
    details: [
      "Graduated with Latin Honors",
      "Capstone: AR Food Garage: A Mobile Application for Food Ordering and Web-based Order Management in Alfonso, Cavite",
    ],
  },
  {
    id: 2,
    institution: "Technological Institute of the Philippines",
    degree:
      "Science Technology Engineering and Mathematics (STEM) Senior High School",
    location: "Quezon City, Philippines",
    dateRange: "2017 - 2019",
    details: [
      "Completed a STEM-focused curriculum covering advanced mathematics, physics, and basic programming",
      "Developed analytical and problem-solving skills through hands-on projects and experiments",
    ],
  },
];
