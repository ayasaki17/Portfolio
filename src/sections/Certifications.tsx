import { useState } from 'react';
import { Award, BookOpen, ExternalLink, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { certifications } from '@/data/certifications';
import { trainings } from '@/data/trainings';

interface Certification {
  id: number;
  title: string;
  organization: string;
  date: string;
  credentialLink?: string;
  badge: string;
}

interface Training {
  id: number;
  title: string;
  organization: string;
  date: string;
  duration: string;
  topics: string[];
}

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

interface TrainingCardProps {
  training: Training;
  index: number;
}

function CertificationCard({ cert, index }: CertificationCardProps) {
  return (
    <AnimatedCard delay={index * 100}>
      <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
            <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <Badge className="bg-blue-600 text-white border-0 text-xs">
            {cert.badge}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
          {cert.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
          {cert.organization}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            {cert.date}
          </span>
          {cert.credentialLink && (
            <a
              href={cert.credentialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Verify
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </AnimatedCard>
  );
}

function TrainingCard({ training, index }: TrainingCardProps) {
  return (
    <AnimatedCard delay={index * 75}>
      <div className="group p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:shadow-soft dark:hover:shadow-soft-dark">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1 line-clamp-2">
              {training.title}
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
              {training.organization}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {training.duration}
              </span>
              <span>{training.date}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {training.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="px-2 py-0.5 text-xs rounded-full bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}

export function Certifications() {
  const [showAllTrainings, setShowAllTrainings] = useState(false);
  const TRAININGS_INITIAL = 6;
  const visibleTrainings = showAllTrainings ? trainings : trainings.slice(0, TRAININGS_INITIAL);
  const hiddenTrainingsCount = trainings.length - TRAININGS_INITIAL;

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Continuous Learning">Certifications & Trainings</SectionTitle>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Professional Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Trainings */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Trainings & Courses
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleTrainings.map((training, index) => (
              <TrainingCard key={training.id} training={training} index={index} />
            ))}
          </div>

          {/* Show more / Show less toggle */}
          {hiddenTrainingsCount > 0 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllTrainings(!showAllTrainings)}
                className="border-slate-300 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700"
              >
                {showAllTrainings ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Show All Trainings ({hiddenTrainingsCount} more)
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
