import { Code2, Server, Database, Brain, Wrench } from 'lucide-react';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { skills, type SkillCategory } from '@/data/skills';

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  'AI & Machine Learning': Brain,
  'Tools & DevOps': Wrench,
};

interface SkillCategoryProps {
  category: string;
  skills: SkillCategory;
  index: number;
}

function SkillCategory({ category, skills: categorySkills, index }: SkillCategoryProps) {
  const Icon = categoryIcons[category] || Code2;

  return (
    <AnimatedCard delay={index * 100}>
      <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {category}
          </h3>
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          {categorySkills.items.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {skill.name}
              </span>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                {skill.years} {skill.years === 1 ? 'year' : 'years'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}

export function Skills() {
  const skillCategories = Object.values(skills) as SkillCategory[];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Technical Expertise">Skills & Technologies</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category.category}
              skills={category}
              index={index}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedCard delay={500} className="mt-12">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">4+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
                <div className="text-sm text-blue-100">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">20+</div>
                <div className="text-sm text-blue-100">Technologies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">1</div>
                <div className="text-sm text-blue-100">Companies</div>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
