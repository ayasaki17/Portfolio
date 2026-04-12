import { MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { workExperience } from '@/data/workExperience';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  dateRange: string;
  description: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  totalCount: number;
}

function ExperienceCard({ experience, index, totalCount }: ExperienceCardProps) {
  return (
    <AnimatedCard delay={index * 100}>
      <div className="relative pl-8 md:pl-0">
        {/* Timeline connector */}
        {index < totalCount - 1 && (
          <div className="absolute left-[11px] md:left-[calc(50%-1px)] top-12 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden sm:block" />
        )}

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
          {/* Date - Left side on desktop */}
          <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
            <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
              <Calendar className="w-4 h-4 md:hidden" />
              <span>{experience.dateRange}</span>
            </div>
            <div className="hidden md:flex items-center gap-2 justify-end mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-950" />
            </div>
          </div>

          {/* Content - Right side on desktop */}
          <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark">
              {/* Mobile timeline dot */}
              <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center sm:hidden">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>

              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {experience.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}

export function WorkExperience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Career Journey">Work Experience</SectionTitle>

        <div className="max-w-4xl mx-auto space-y-8">
          {workExperience.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
              totalCount={workExperience.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
