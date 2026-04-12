import { MapPin, Globe, Code2, Motorbike } from "lucide-react";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { AnimatedCard } from "@/components/custom/AnimatedCard";
import { personalInfo } from "@/data/socialLinks";
const highlights = [
  {
    icon: Code2,
    title: "Full Stack Web Developer",
    description: "Building real-world digital solutions",
  },
  {
    icon: Globe,
    title: "Flexible Collaboration",
    description: "Open to local and remote work",
  },
  {
    icon: MapPin,
    title: "San Mateo, Rizal, PH",
    description: "Based in the Philippines",
  },
  {
    icon: Motorbike,
    title: "Ride & Code",
    description: "Passion for both roads and code",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="About Me">Get to Know Me</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <AnimatedCard delay={0}>
              <div className="space-y-4">
                {personalInfo.fullBio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard delay={100}>
              <div className="pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                  Focused on precision, performance, and user experience —
                  delivering systems that are both reliable and meaningful.
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 100}>
                <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:shadow-soft dark:hover:shadow-soft-dark hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
