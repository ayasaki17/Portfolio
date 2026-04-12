import { useInView } from '@/hooks/useInView';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  className?: string;
}

export function SectionTitle({ children, subtitle, align = 'center', className = '' }: SectionTitleProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'} mb-12 md:mb-16 ${className}`}
    >
      {subtitle && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-3 transition-all duration-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight transition-all duration-500 delay-100 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </h2>
      <div
        className={`mt-4 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-700 delay-200 ${
          align === 'center' ? 'mx-auto' : ''
        } ${isInView ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}
      />
    </div>
  );
}
