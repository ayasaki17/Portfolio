import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Send, Clock, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { SectionTitle } from '@/components/custom/SectionTitle';
import { AnimatedCard } from '@/components/custom/AnimatedCard';
import { socialLinks, contactInfo } from '@/data/socialLinks';
import type { SocialLink } from '@/data/socialLinks';

const socialIconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Twitter: Send,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionTitle subtitle="Get In Touch">Contact Me</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <AnimatedCard delay={0}>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  Let's work together
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                </p>
              </div>
            </AnimatedCard>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <AnimatedCard delay={100}>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                    <p className="text-slate-900 dark:text-white font-medium">{contactInfo.email}</p>
                  </div>
                </a>
              </AnimatedCard>

              <AnimatedCard delay={150}>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-slate-900 dark:text-white font-medium">{contactInfo.phone}</p>
                  </div>
                </a>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-slate-900 dark:text-white font-medium">{contactInfo.location}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{contactInfo.timezone}</p>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={250}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">{contactInfo.availability}</p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Social Links */}
            <AnimatedCard delay={300}>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Connect on social media</p>
                <div className="flex flex-wrap gap-3">
                  {(Object.values(socialLinks) as SocialLink[]).map((link) => {
                    const Icon = socialIconMap[link.icon] || Send;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-soft dark:hover:shadow-soft-dark"
                        aria-label={link.label}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Direct Action CTAs — replaces the non-functional form */}
          <AnimatedCard delay={200}>
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Let's talk
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Choose your preferred way to reach me — I'll respond as quickly as I can.
              </p>

              <div className="space-y-3">
                {/* Primary: Email — pre-filled mailto */}
                <a
                  href={`mailto:${contactInfo.email}?subject=Portfolio%20Inquiry&body=Hi%20Kobe%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">Send me an email</p>
                    <p className="text-sm text-blue-100 truncate">{contactInfo.email}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>

                {/* Secondary: LinkedIn */}
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white">Connect on LinkedIn</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Let's connect professionally</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>

                {/* Tertiary: Facebook */}
                <a
                  href={socialLinks.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 dark:text-white">Message on Facebook</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Quick and casual chat</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              </div>

              {/* Copy email fallback */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-green-500">Email copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy my email address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
