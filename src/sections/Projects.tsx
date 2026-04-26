import { useState } from 'react';
import { ExternalLink, Github, Lock, Folder, Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { projects } from '@/data/projects';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string | null;
  githubLink: string | null;
  image: string | null;
  featured: boolean;
  screenshots?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectGalleryModal({
  project,
  open,
  onClose,
}: {
  project: Project;
  open: boolean;
  onClose: () => void;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!open || !project.screenshots || project.screenshots.length === 0) return null;

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? project.screenshots!.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === project.screenshots!.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white truncate pr-4">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div className="relative bg-slate-100 dark:bg-slate-800">
          <img
            src={project.screenshots![currentSlide]}
            alt={`${project.title} screenshot ${currentSlide + 1}`}
            className="w-full aspect-video object-cover"
          />

          {project.screenshots!.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.screenshots!.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/80 w-2'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 md:p-6">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const isPrivate = !project.demoLink && !project.githubLink;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <AnimatedCard delay={index * 50}>
      <div className="group h-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
        {/* Image/Preview Area */}
        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/50 dark:bg-slate-700/50 flex items-center justify-center">
                <Folder className="w-8 h-8 text-slate-400 dark:text-slate-500" />
              </div>
            </div>
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-blue-600 text-white border-0 text-xs">
                Featured
              </Badge>
            </div>
          )}

          {/* Private Badge */}
          {isPrivate && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="text-xs flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Private
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            {project.demoLink && (
              <Button
                size="sm"
                variant="default"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
            {project.githubLink && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-slate-300 dark:border-slate-600"
                asChild
              >
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}

            {/* Gallery button for private projects with screenshots */}
            {isPrivate && hasScreenshots && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-slate-300 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700"
                onClick={() => setGalleryOpen(true)}
              >
                <Images className="w-4 h-4 mr-2" />
                View Gallery
              </Button>
            )}

            {/* Fallback for private with no screenshots */}
            {isPrivate && !hasScreenshots && (
              <div className="flex-1 flex items-center gap-2 justify-center py-2 text-xs text-slate-400 dark:text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                <span>Private / NDA Project</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {hasScreenshots && (
        <ProjectGalleryModal
          project={project}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </AnimatedCard>
  );
}

/* Compact card for mobile list view */
function CompactProjectCard({ project, index }: ProjectCardProps) {
  return (
    <AnimatedCard delay={index * 50}>
      <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Folder className="w-5 h-5 text-slate-400" />
        </div>
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            {project.title}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const MOBILE_LIMIT = 3;
  const visibleMobileOther = showAllMobile
    ? otherProjects
    : otherProjects.slice(0, MOBILE_LIMIT);
  const hiddenCount = otherProjects.length - MOBILE_LIMIT;

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="My Work">Featured Projects</SectionTitle>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
            More Projects
          </h3>
        </div>

        {/* Mobile: compact list view (< 640px) */}
        <div className="block sm:hidden space-y-3">
          {visibleMobileOther.map((project, index) => (
            <CompactProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* "+N more" button */}
          {!showAllMobile && hiddenCount > 0 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllMobile(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-700 transition-all text-sm font-medium"
              >
                <span>+{hiddenCount} more projects</span>
              </button>
            </div>
          )}
        </div>

        {/* Desktop: grid view (>= 640px) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
