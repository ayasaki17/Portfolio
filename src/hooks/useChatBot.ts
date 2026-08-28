import { useState, useCallback } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface UseChatBotReturn {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (userInput: string) => Promise<void>;
  clearMessages: () => void;
}

// ─── Response Builder ─────────────────────────────────────────────────────────

function buildResponse(input: string): string {
  const q = input.toLowerCase();
  const has = (...terms: string[]) => terms.some((t) => q.includes(t));

  // Greetings
  if (has('hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy', "what's up", 'whats up', 'sup')) {
    const greetings = [
      "Hey there! 👋 Thanks for stopping by my portfolio! I'm Kobe — a full-stack developer from San Mateo, Rizal. Feel free to ask me anything about my work, skills, or projects. I'm happy to help!",
      "Hi! 👋 Great to meet you! I'm Kobe Bryan Kobayashi. You can ask me about what I do, the projects I've built, my tech stack, or how to get in touch with me!",
      "Hello! Welcome to my portfolio! 😊 I'm Kobe, a full-stack developer. Ask away — whether it's about my experience, skills, or projects, I'd love to tell you more!",
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Who are you / About
  if (has('who are you', 'who is kobe', 'about kobe', 'about yourself', 'tell me about', 'introduce', 'yourself')) {
    return `Sure! I'm **Kobe Bryan Kobayashi** 👨‍💻, a full-stack web developer based in **San Mateo, Rizal, Philippines**.\n\nI currently work as an **Information System Analyst II** at the Municipality of San Mateo, where I design and implement information systems for local government operations.\n\nI'm passionate about building practical, reliable digital solutions — from government systems to web applications for businesses. I love clean code, good UX, and solving real-world problems through technology.\n\nFeel free to ask about my skills, projects, or anything else! 😊`;
  }

  // Contact
  if (has('contact', 'email', 'reach', 'message', 'hire', 'get in touch', 'call')) {
    return `Of course! Here's the best way to reach me:\n\n📧 **Email:** kobebryankobayashi@gmail.com\n📱 **Phone:** +63 921 553 4654\n📍 **Location:** San Mateo, Rizal, Philippines\n🕒 **Timezone:** GMT+8 (PHT)\n\nI'm currently **open to Onsite, Hybrid, and Remote opportunities** — so don't hesitate to reach out! I'd love to connect. 😊`;
  }

  if (has('phone', 'number', 'mobile')) {
    return `You can reach me on my mobile at **+63 921 553 4654**. Feel free to text or call anytime! 📱`;
  }

  // Social links
  if (has('github', 'linkedin', 'facebook', 'instagram', 'social', 'connect', 'follow')) {
    return `You can find me on these platforms:\n\n🐙 **GitHub:** https://github.com/ayasaki17 — where I keep my code and projects\n💼 **LinkedIn:** https://www.linkedin.com/in/kobe-bryan-kobayashi-9a0608283/ — let's connect professionally!\n👤 **Facebook:** https://www.facebook.com/KbBrynKbyshi7\n📸 **Instagram:** https://www.instagram.com/kbbrynkbyshi/\n\nFeel free to connect on any of these! 😊`;
  }

  // Work experience — specific roles
  if (has('analyst', 'information system analyst', 'is analyst', 'current role', 'current job', 'currently working', 'current position')) {
    return `Right now, I'm working as an **Information System Analyst II** at the **Municipality of San Mateo, Rizal** — a role I started on **June 17, 2026**.\n\nIn this role, I:\n• Analyze, design, and implement information systems for municipal operations\n• Evaluate existing systems and recommend improvements\n• Coordinate with different departments to understand their tech needs\n• Oversee data integrity and system security in line with government ICT standards\n• Provide technical guidance and training to staff\n\nIt's a great opportunity to make a real impact on how local government services are delivered through technology. 💻🏛️`;
  }

  if (has('it programmer', 'programmer role')) {
    return `Before my current role, I worked as an **IT Programmer** at the **Municipality of San Mateo, Rizal** from **2024 to June 2026**.\n\nDuring that time, I:\n• Led the development and maintenance of internal government web systems\n• Built scalable backend features using **PHP and Laravel**\n• Optimized database queries for faster performance\n• Collaborated with cross-functional teams to ship reliable solutions\n• Maintained version control and improved deployment workflows\n\nIt's where I really sharpened my backend and systems development skills! 🛠️`;
  }

  if (has('freelance', 'self-employed', 'freelancer')) {
    return `Aside from my government work, I also do **freelance web development** — and I've been doing it since **2023**!\n\nAs a freelancer, I've:\n• Built custom web apps for small businesses and individual clients\n• Designed responsive, user-friendly interfaces\n• Handled full backend development including databases and API integration\n• Maintained client systems for performance and security\n• Worked closely with clients to deliver exactly what they need\n\nI use a wide stack for freelance work — **Node.js, React, Laravel, PHP, MongoDB, MySQL**, and more. 🚀`;
  }

  if (has('it staff', 'staff role')) {
    return `I actually started my professional journey as an **IT Staff** at the **Municipality of San Mateo, Rizal** back in **2023**.\n\nEven then, I was already hands-on with:\n• Building and maintaining internal government systems\n• Writing features in HTML, CSS, JavaScript, and MySQL\n• Providing technical support — hardware, software, and network troubleshooting\n• Helping improve the UI and overall user experience of existing systems\n\nThat role gave me a solid foundation and a deep understanding of government system workflows. 💪`;
  }

  // Work experience — general
  if (has('work', 'experience', 'job', 'career', 'employment', 'position', 'role', 'worked')) {
    return `Sure! Here's a quick rundown of my work history:\n\n1. 🏛️ **Information System Analyst II** — Municipality of San Mateo, Rizal *(June 2026 – Present)*\n2. 💻 **IT Programmer** — Municipality of San Mateo, Rizal *(2024 – June 2026)*\n3. 🌐 **Freelance Web Developer** — Self-Employed *(2023 – Present)*\n4. 🖥️ **IT Staff** — Municipality of San Mateo, Rizal *(2023 – 2024)*\n\nI've been building things in government and private sector alike since 2023. Want to know more about any specific role?`;
  }

  // Skills — specific
  if (has('frontend', 'front-end', 'front end', 'html', 'css', 'react', 'vue', 'tailwind', 'bootstrap', 'javascript', 'typescript', 'ui')) {
    return `On the frontend side, I'm comfortable with a solid range of tools:\n\n• **HTML & CSS** — 4 years, it's where everything starts\n• **JavaScript (ES6+)** — 4 years, my bread and butter\n• **Vue.js** — 3 years, great for reactive UIs\n• **React** — 1 year, including TypeScript and state management\n• **Bootstrap** — 3 years for rapid, responsive layouts\n• **Tailwind CSS** — 1 year, loving the utility-first approach\n• **Responsive Design & Component-Based UI** — always a priority in everything I build\n\nI enjoy making interfaces that are clean, intuitive, and fast. 🎨`;
  }

  if (has('backend', 'back-end', 'back end', 'php', 'laravel', 'node', 'express', 'api', 'rest', 'server')) {
    return `Backend is where I feel most at home! Here's my stack:\n\n• **PHP** — 4 years, still my go-to for government and legacy systems\n• **Laravel** — 3 years, love the structure and ecosystem\n• **Node.js & Express.js** — 1 year, great for API-first projects\n• **REST APIs** — 2 years, designing and consuming them\n• **Authentication & Authorization** — 3 years\n• **MVC Architecture & CRUD Operations** — fundamental to everything I build\n\nI focus a lot on writing clean, maintainable backend code that actually scales. ⚙️`;
  }

  if (has('database', 'db', 'mysql', 'sql', 'mongodb', 'postgresql', 'postgres')) {
    return `Databases are a core part of my work — especially in government systems where data integrity is critical:\n\n• **MySQL & SQL** — 4 years, my most-used database\n• **Database Design** — 3 years, including relational modeling and normalization\n• **Query Optimization & Indexing** — 2 years, making slow queries fast\n• **PostgreSQL** — 1 year\n• **MongoDB** — 1 year, for more flexible document-based data\n\nI'm big on clean schema design and efficient queries. 🗄️`;
  }

  if (has('ai', 'chatgpt', 'claude', 'deepseek', 'grok', 'cursor', 'prompt', 'ai tool')) {
    return `I'm actually pretty into AI-assisted development! I regularly use:\n\n• **ChatGPT** — 3 years, great for brainstorming and debugging\n• **Claude** — 2 years, especially for longer reasoning tasks\n• **DeepSeek** — 2 years, solid for coding tasks\n• **Cursor & Windsurf** — 1 year each, AI-powered code editors\n• **Grok & Kimi** — 1 year each\n• **Prompt Engineering** — 2 years of crafting effective prompts\n\nI think knowing how to work *with* AI tools is a major productivity boost for any developer. 🤖`;
  }

  if (has('tools', 'devops', 'git', 'docker', 'figma', 'vercel', 'postman', 'vs code', 'vscode', 'linux')) {
    return `Here's what's in my toolbox:\n\n• **Git/GitHub** — 4 years, version control is non-negotiable\n• **VS Code** — 4 years, my main editor\n• **npm** — 4 years, package management\n• **Figma** — 2 years, for UI design and prototyping\n• **Postman** — 1 year, API testing\n• **Vercel** — 1 year, for deploying frontend projects\n• **Docker** — 1 year, containerization basics\n• **Linux** — 1 year\n• **CI/CD Basics** — 1 year\n\nI'm always picking up new tools that make development smoother! 🔧`;
  }

  // Skills — general
  if (has('skill', 'tech', 'technology', 'stack', 'language', 'framework', 'expertise', 'proficient', 'know', 'can you')) {
    return `Great question! My tech stack covers the full web development spectrum:\n\n🖥️ **Frontend:** HTML/CSS, JavaScript, Vue.js, React, TypeScript, Tailwind CSS, Bootstrap\n⚙️ **Backend:** PHP, Laravel, Node.js, Express.js, REST APIs\n🗄️ **Database:** MySQL, PostgreSQL, MongoDB\n🤖 **AI Tools:** ChatGPT, Claude, DeepSeek, Cursor, Windsurf\n🔧 **DevOps/Tools:** Git, Docker, Figma, Vercel, Postman, VS Code\n\nI've been doing this since 2023, and I'm always learning something new. 💪 Want to dig deeper into any specific area?`;
  }

  // Projects — specific
  if (has('food', 'ordering', 'mern', 'restaurant', 'food ordering')) {
    return `That's one of my favorite projects! 🍔 The **Mobile and Web Food Ordering System** is a full-stack app I built using the **MERN stack** (MongoDB, Express.js, React, Node.js).\n\nIt features:\n• Mobile-friendly ordering interface\n• Real-time order tracking\n• Web-based order management dashboard for restaurant staff\n• Admin dashboard for managing the menu and workflow\n\nIt was a great challenge — coordinating the mobile UX with the backend logic and making real-time updates work smoothly. Really proud of how it turned out! 🚀`;
  }

  if (has('inventory', 'vape', 'operations management')) {
    return `This was a freelance project — the **Customized Inventory and Operations Management System** for a vape business. 💨\n\nBuilt with **Laravel, PHP, MySQL, Bootstrap, and AJAX**, it handles:\n• Stock and inventory tracking\n• Order processing\n• Business reporting and analytics\n• Workflow automation\n\nThe client needed something tailored specifically to their business operations, so I custom-built the whole thing from scratch. It really streamlined how they run their day-to-day operations!`;
  }

  if (has('pos', 'point of sale', 'poultry')) {
    return `The **POS and Inventory System** was built for a poultry business using **Vanilla PHP** — no framework, just clean, efficient code. 🐔\n\nIt handles:\n• Sales transactions at the point of sale\n• Real-time inventory tracking\n• Reporting and analytics\n\nI kept the architecture lightweight and fast because the client needed something that worked reliably even on older hardware. Sometimes simplicity wins! 💡`;
  }

  if (has('official website', 'government website', 'lgu website')) {
    return `The **Official Government Website** was one of my bigger projects — a public-facing site for the municipality providing:\n• Public information and announcements\n• Online services for citizens\n• A content management interface for staff\n\nBuilt with **PHP, MySQL, JavaScript, and Bootstrap**, it needed to be accessible, reliable, and easy for non-technical staff to update. It's live and serving the community! 🏛️`;
  }

  if (has('hr', 'human resource', 'hrms', 'attendance', 'leave')) {
    return `The **Human Resource Management System** is a government HR system I built for managing:\n• Employee records and profiles\n• Attendance tracking\n• Leave request and approval workflows\n• Administrative HR processes\n\nBuilt with **PHP, MySQL, JavaScript, Bootstrap, and AJAX**. Government HR workflows can be complex, so I put a lot of thought into making the system both thorough and easy to use for the staff. 🏢`;
  }

  if (has('legislative', 'ordinance', 'resolution', 'sanggunian')) {
    return `The **Legislative Information System** is a document management system designed for legislative processes. It tracks:\n• Ordinances and resolutions\n• Legislative document workflows\n• Records and archives\n\nBuilt with **PHP, MySQL, DataTables, JavaScript, and Bootstrap**. Document management sounds simple, but getting the tracking and search right took careful design! 📜`;
  }

  if (has('project monitoring', 'engineering project', 'monitoring system')) {
    return `The **Project Monitoring System** was built to help the engineering office track their infrastructure projects. It includes:\n• Project progress tracking with timelines\n• Visual reports and charts using **Chart.js**\n• Data for decision-making and audit trails\n\nBuilt with **PHP, MySQL, JavaScript, and Bootstrap**. It really helped the team move from manual tracking to a centralized, visual system. 📊`;
  }

  if (has('material management', 'materials', 'materials management')) {
    return `The **Material Management System** helps the engineering office manage their physical inventory and materials:\n• Stock level tracking\n• Material movement history\n• Issuance and receiving workflows\n\nBuilt with **PHP, MySQL, JavaScript, Bootstrap, and AJAX**. Small but impactful — it eliminated a lot of manual record-keeping for the team. 📦`;
  }

  if (has('document management', 'routing', 'document routing')) {
    return `The **Document Management and Routing System** is a workflow system that handles how documents move through an organization:\n• Document routing between offices\n• Approval tracking\n• Status monitoring and history\n\nBuilt with **PHP, MySQL, JavaScript, Bootstrap**. Getting the routing logic right was the trickiest part — every office has its own process! 📁`;
  }

  if (has('public concern', 'citizen', 'concern system')) {
    return `The **Public Concern System** is a citizen-facing platform that lets people submit and track concerns to the local government. 🗣️\n\nIt features:\n• Concern submission form for citizens\n• Status tracking so people know their concern is being addressed\n• Admin dashboard for staff to manage and respond to concerns\n\nBuilt with **PHP, MySQL, JavaScript, Bootstrap, and AJAX**. It's one of those projects that directly improves how the community interacts with their local government — really meaningful work! 🏙️`;
  }

  // Projects — general
  if (has('project', 'built', 'build', 'developed', 'portfolio', 'work sample', 'app', 'application', 'system', 'what have you')) {
    return `I've worked on quite a few projects over the years! Here's the full list:\n\n1. 🍔 **Mobile & Web Food Ordering System** — MERN Stack\n2. 📦 **Inventory & Operations Management System** — Laravel, PHP, MySQL\n3. 🏪 **POS & Inventory System** — Vanilla PHP, MySQL\n4. 🏛️ **Official Government Website** — PHP, MySQL, Bootstrap\n5. 👥 **Human Resource Management System** — PHP, MySQL, AJAX\n6. 📜 **Legislative Information System** — PHP, MySQL, DataTables\n7. 📊 **Project Monitoring System** — PHP, MySQL, Chart.js\n8. 📦 **Material Management System** — PHP, MySQL, AJAX\n9. 📁 **Document Management & Routing System** — PHP, MySQL\n10. 🗣️ **Public Concern System** — PHP, MySQL, AJAX\n\nAsk me about any one of them and I'll give you the full story! 😊`;
  }

  // Education
  if (has('education', 'study', 'college', 'university', 'degree', 'school', 'graduate', 'bachelor', 'bsit', 'stem', 'tip', 'technological institute', 'latin honors', 'capstone', 'thesis')) {
    return `I took my **Bachelor of Science in Information Technology** at the **Technological Institute of the Philippines** in Quezon City, graduating in **2023** — and I'm proud to say I graduated **with Latin Honors**! 🎓\n\nFor my capstone, I built **"AR Food Garage"** — a mobile application for food ordering with an augmented reality feature, paired with a web-based order management system.\n\nBefore that, I completed my **Senior High School (STEM strand)** at the same school from **2017 to 2019**, which gave me a strong math and science foundation that definitely helps with problem-solving in dev! 💡`;
  }

  // Certifications
  if (has('certif', 'civil service', 'csc', 'eligibility', 'license', 'credential', 'eligible')) {
    return `Yes! I passed the **Civil Service Eligibility (Professional Level)** exam administered by the **Civil Service Commission of the Philippines** in **2024**. 🏅\n\nThis is a government eligibility certification required for professional positions in Philippine government service.\n\nYou can verify my eligibility here: https://csevs.csc.gov.ph/user/eligibility`;
  }

  // Location / timezone / availability
  if (has('location', 'where', 'based', 'timezone', 'country', 'philippines', 'rizal', 'san mateo', 'available', 'availability', 'remote', 'onsite', 'hybrid')) {
    return `I'm based in **San Mateo, Rizal, Philippines** 🇵🇭, operating in **GMT+8 (Philippine Time)**.\n\nI'm currently **open to opportunities** — whether that's Onsite, Hybrid, or fully Remote. I'm flexible and happy to work with teams locally and internationally. If you have something in mind, feel free to reach out! 😊`;
  }

  // Years of experience
  if (has('how many year', 'years of experience', 'how long', 'how experienced', 'experience in')) {
    return `I've been professionally working in tech since **2023**, so about **3+ years** of hands-on experience!\n\nIn terms of specific technologies:\n• **PHP, MySQL, HTML/CSS, JavaScript** — 4 years each\n• **Laravel, Vue.js, Bootstrap** — 3 years each\n• **REST APIs, Database Design** — 2–3 years\n• **React, TypeScript, Node.js** — around 1 year each\n\nI started early — I was already building things while still in college, and I haven't stopped since! 💪`;
  }

  // Fallback
  return `Hmm, I'm not quite sure what you mean by that, but I'm happy to help! 😊 You can ask me about:\n\n• 💼 My current job and work history\n• 🛠️ My tech skills and stack\n• 🚀 Projects I've built\n• 🎓 My education and background\n• 🏅 My certifications\n• 📬 How to contact me\n• 🔗 My social media profiles\n\nTry something like *"What's your current role?"* or *"What projects have you built?"* 😄`;
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

const TYPING_DELAY_MS = 900; // simulate a natural reply pause

export function useChatBot(): UseChatBotReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState<string | null>(null);

  const sendMessage = useCallback(async (userInput: string) => {
    if (!userInput.trim()) return;

    const userMessage: Message = { role: 'user', content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, TYPING_DELAY_MS));

    const response = buildResponse(userInput);
    const assistantMessage: Message = { role: 'assistant', content: response };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, error, sendMessage, clearMessages };
}
