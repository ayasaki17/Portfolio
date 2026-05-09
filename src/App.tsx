import { useTheme } from '@/hooks/useTheme';
import { Navigation } from '@/components/custom/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Skills } from '@/sections/Skills';
import { WorkExperience } from '@/sections/WorkExperience';
import { Education } from '@/sections/Education';
import { SoftSkills } from '@/sections/SoftSkills';
import { Certifications } from '@/sections/Certifications';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ChatBot } from '@/components/custom/ChatBot';

function App() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950" />
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <WorkExperience />
        <Education />
        <SoftSkills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
