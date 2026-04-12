import { ExternalLink, Github, Lock, Folder } from 'lucide-react';
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
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isPrivate = !project.demoLink && !project.githubLink;

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
            {isPrivate && (
              <Button
                size="sm"
                variant="outline"
                disabled
                className="flex-1 border-slate-300 dark:border-slate-600 opacity-60 cursor-not-allowed"
              >
                <Lock className="w-4 h-4 mr-2" />
                Private
              </Button>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
