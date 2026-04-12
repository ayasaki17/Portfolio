export interface SoftSkill {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export const softSkills: SoftSkill[] = [
  {
    id: 1,
    name: "Communication",
    description: "Clear and effective communication across technical and non-technical stakeholders",
    icon: "MessageCircle",
  },
  {
    id: 2,
    name: "Teamwork",
    description: "Collaborative approach with experience in diverse, multicultural teams",
    icon: "Users",
  },
  {
    id: 3,
    name: "Problem Solving",
    description: "Analytical thinking with creative solutions to complex technical challenges",
    icon: "Lightbulb",
  },
  {
    id: 4,
    name: "Adaptability",
    description: "Quick learner who thrives in fast-paced, changing environments",
    icon: "RefreshCw",
  },
  {
    id: 5,
    name: "Time Management",
    description: "Efficient prioritization and delivery of multiple concurrent projects",
    icon: "Clock",
  },
  {
    id: 6,
    name: "Attention to Detail",
    description: "Meticulous code review and quality-focused development practices",
    icon: "Eye",
  },
  {
    id: 7,
    name: "Leadership",
    description: "Mentoring junior developers and leading technical initiatives",
    icon: "Target",
  },
  {
    id: 8,
    name: "Critical Thinking",
    description: "Evaluating multiple approaches to find optimal solutions",
    icon: "Brain",
  },
];
