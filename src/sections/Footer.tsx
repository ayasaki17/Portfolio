import { personalInfo } from '@/data/socialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              {personalInfo.name}
            </span>
            <span className="text-slate-400 dark:text-slate-600">|</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              {personalInfo.role}
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <span>&copy; {currentYear}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
            Kobe Bryan Kobayashi. All Right Reserved
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
