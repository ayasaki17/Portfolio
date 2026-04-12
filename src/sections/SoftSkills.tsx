import { 
  MessageCircle, 
  Users, 
  Lightbulb, 
  RefreshCw, 
  Clock, 
  Eye, 
  Target, 
  Brain 
} from 'lucide-react';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { softSkills } from '@/data/softSkills';

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Users,
  Lightbulb,
  RefreshCw,
  Clock,
  Eye,
  Target,
  Brain,
};

interface SoftSkill {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface SoftSkillCardProps {
  skill: SoftSkill;
  index: number;
}

function SoftSkillCard({ skill, index }: SoftSkillCardProps) {
  const Icon = iconMap[skill.icon] || Lightbulb;

  return (
    <AnimatedCard delay={index * 75}>
      <div className="group h-full p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
          {skill.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {skill.description}
        </p>
      </div>
    </AnimatedCard>
  );
}

export function SoftSkills() {
  return (
    <section id="soft-skills" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Beyond Code">Soft Skills</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <SoftSkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Quote */}
        <AnimatedCard delay={600} className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <blockquote className="text-lg md:text-xl text-slate-600 dark:text-slate-400 italic">
             "Code gets you in the room. Communication and mindset keep you there."
            </blockquote>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
}
