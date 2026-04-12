export interface SkillItem {
  name: string;
  years: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Skills {
  frontend: SkillCategory;
  backend: SkillCategory;
  database: SkillCategory;
  ai: SkillCategory;
  tools: SkillCategory;
}

export const skills: Skills = {
  frontend: {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", years: 4 },
      { name: "JavaScript (ES6+)", years: 4 },
      { name: "Vue.js", years: 3 },
      { name: "React", years: 1 },
      { name: "TypeScript", years: 1 },
      { name: "Tailwind CSS", years: 1 },
      { name: "Bootstrap", years: 3 },
      { name: "Responsive Design", years: 4 },
      { name: "Component-Based UI", years: 3 },
      { name: "State Management", years: 1 },
    ],
  },
  backend: {
    category: "Backend",
    items: [
      { name: "PHP", years: 4 },
      { name: "Laravel", years: 3 },
      { name: "Node.js", years: 1 },
      { name: "Express.js", years: 1 },
      { name: "REST APIs", years: 2 },
      { name: "Authentication & Authorization", years: 3 },
      { name: "CRUD Operations", years: 4 },
      { name: "MVC Architecture", years: 3 },
      { name: "File Upload Handling", years: 2 },
      { name: "Middleware", years: 1 },
    ],
  },
  database: {
    category: "Database",
    items: [
      { name: "MySQL", years: 4 },
      { name: "PostgreSQL", years: 1 },
      { name: "MongoDB", years: 1 },
      { name: "SQL", years: 4 },
      { name: "Database Design", years: 3 },
      { name: "Query Optimization", years: 2 },
      { name: "Relational Data Modeling", years: 3 },
      { name: "Indexing", years: 2 },
    ],
  },
  ai: {
    category: "AI Coding Assistants",
    items: [
      { name: "ChatGPT", years: 3 },
      { name: "Claude", years: 2 },
      { name: "DeepSeek", years: 2 },
      { name: "Cursor", years: 1 },
      { name: "Kimi", years: 1 },
      { name: "Grok", years: 1 },
      { name: "Prompt Engineering", years: 2 },
      { name: "AI-Assisted Development", years: 2 },
    ],
  },
  tools: {
    category: "Tools & DevOps",
    items: [
      { name: "Git/GitHub", years: 4 },
      { name: "Linux", years: 1 },
      { name: "Vercel", years: 1 },
      { name: "Figma", years: 2 },
      { name: "Docker", years: 1 },
      { name: "Postman", years: 1 },
      { name: "VS Code", years: 4 },
      { name: "npm", years: 4 },
      { name: "CI/CD Basics", years: 1 },
      { name: "Antigravity", years: 1 },
      { name: "Cursor", years: 1 },
      { name: "Windsurf", years: 1 },
    ],
  },
};
