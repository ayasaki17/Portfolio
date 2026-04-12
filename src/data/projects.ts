export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string | null;
  githubLink: string | null;
  image: string | null;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AR Food Garage",
    description:
      "A full-stack food ordering platform using the MERN stack, featuring a mobile-friendly interface and a web-based order management system. Includes real-time order tracking, admin dashboard, and efficient restaurant workflow handling.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: true,
  },
  {
    id: 2,
    title: "LiquidoPH",
    description:
      "A Laravel-based inventory and operations management system for a vape business. Provides stock tracking, order processing, reporting, and business workflow automation with a clean admin interface.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap", "AJAX"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: true,
  },
  {
    id: 3,
    title: "Pechies POS and Inventory System",
    description:
      "A custom-built POS and inventory system developed using Vanilla PHP. Handles sales transactions, inventory tracking, and reporting for a poultry business with a lightweight and efficient architecture.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: true,
  },
  {
    id: 4,
    title: "San Mateo, Rizal Official Website",
    description:
      "An official government website providing public information, announcements, and online services for citizens.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 5,
    title: "Human Resource Management System",
    description:
      "A government HR system for managing employee records, attendance, leave requests, and administrative processes.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 6,
    title: "San Mateo Rizal Legislative Information System",
    description:
      "A document and records management system for legislative processes, including ordinances, resolutions, and tracking.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "DataTables"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 7,
    title: "Project Monitoring System",
    description:
      "A system for tracking engineering projects, monitoring progress, timelines, and generating reports for decision-making.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Chart.js"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 8,
    title: "Material Management System",
    description:
      "A system for managing inventory and materials in the engineering office, including stock levels and movement tracking.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 9,
    title: "Document Routing System",
    description:
      "A workflow-based system for routing, tracking, and approving documents within an organization.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
  {
    id: 10,
    title: "San Mateo Rizal Public Concern",
    description:
      "A citizen engagement platform for submitting and tracking public concerns, improving transparency and response time.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "AJAX"],
    demoLink: null,
    githubLink: null,
    image: null,
    featured: false,
  },
];