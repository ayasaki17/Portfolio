import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { education } from '@/data/education';

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  location: string;
  dateRange: string;
  details: string[];
}

interface EducationCardProps {
  edu: EducationItem;
  index: number;
}

function EducationCard({ edu, index }: EducationCardProps) {
  return (
    <AnimatedCard delay={index * 100}>
      <div className="group p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {edu.institution}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 md:text-right">
            <Calendar className="w-4 h-4 md:hidden" />
            <span>{edu.dateRange}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4 ml-0 md:ml-16">
          <MapPin className="w-4 h-4" />
          <span>{edu.location}</span>
        </div>

        {/* Details */}
        <ul className="space-y-2 ml-0 md:ml-16">
          {edu.details.map((detail, i) => (
            <li
              key={i}
              className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
            >
              <Award className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedCard>
  );
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Academic Background">Education</SectionTitle>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
