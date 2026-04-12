export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface SocialLinks {
  github: SocialLink;
  linkedin: SocialLink;
  facebook: SocialLink;
  instagram: SocialLink;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  email: string;
}

export const socialLinks: SocialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/ayasaki17",
    icon: "Github",
    label: "View my code repositories",
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kobe-bryan-kobayashi-9a0608283/",
    icon: "Linkedin",
    label: "Connect professionally",
  },
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/KbBrynKbyshi7",
    icon: "Facebook",
    label: "Message me on Facebook",
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/kbbrynkbyshi/",
    icon: "Instagram",
    label: "Follow me on Instagram",
  },
};

export const contactInfo: ContactInfo = {
  email: "kobebryankobayashi@gmail.com",
  phone: "+63 921 553 4654",
  location: "San Mateo, Rizal, Philippines",
  timezone: "GMT+8 (PHT)",
  availability: "Open to Onsite, Hybrid, Remote opportunities worldwide",
};

export const personalInfo: PersonalInfo = {
  name: "Kobe Bryan Kobayashi",
  role: "Full Stack Web Developer",
  tagline:
    "Building practical digital solutions for businesses and government systems",
  shortBio:
    "Full-stack developer focused on web systems, database-driven applications, and clean user interfaces. I build reliable, efficient, and user-friendly solutions for real-world operations.",
  fullBio: [
    "I'm a full-stack web developer focused on building real-world systems for business and government use. My experience includes inventory and operations management, POS systems, document routing, public service platforms, and project monitoring systems.",
    "I work with PHP, Laravel, Vanilla PHP, MySQL, and modern frontend tools such as React, Vite, Tailwind CSS, Bootstrap, and JavaScript. I also have experience developing a MERN stack application for mobile and web-based food ordering and order management.",
    "My approach combines clean structure, maintainable code, and practical user experience. I aim to create systems that are fast, organized, scalable, and easy for people to use in everyday workflows.",
    "I continue to expand my skills through modern development practices and AI-related tools, with a strong focus on building systems that solve actual problems and improve productivity.",
  ],
  email: "kobebryankobayashi@gmail.com",
};
