export interface Project {
  id: string;
  title: string;
  category: "frontend" | "fullstack" | "enterprise";
  tagline: string;
  description: string;
  role: string;
  company?: string;
  period: string;
  technologies: string[];
  metrics: string[];
  keyFeatures: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  color: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location?: string;
  iconType: "college" | "school" | "highschool";
}

export interface CertificateItem {
  title: string;
  issuer: string;
  period: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kannan V",
    fullName: "Kannan V",
    title: "Front End & Full Stack Developer",
    subtitle: "Crafting High-Performance Web Applications & Intuitive User Interfaces",
    bio: "Passionate Front End Developer with hands-on expertise in React.js, Next.js, Node.js, and MongoDB. Proven track record of building production-grade enterprise tools including modern ATS dashboards and IT Asset Management systems with pixel-perfect Shadcn UI, Material UI, and responsive architectures.",
    phone: "+91 9080642004",
    phoneRaw: "9080642004",
    email: "vkannan202@gmail.com",
    location: "Tamil Nadu, India",
    portfolioUrl: "https://kannan-portfolio.dev",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    whatsappUrl: "https://wa.me/919080642004?text=Hi%20Kannan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
    availability: "Available for Full-time & High-Impact Front-End / Full-Stack Roles",
    yearsExperience: "2+",
    stats: [
      { label: "Core Tech Focus", value: "React & Next.js" },
      { label: "Enterprise Projects", value: "3+" },
      { label: "Code Quality & UX", value: "100%" },
      { label: "Cross-Browser Precision", value: "100%" }
    ]
  },

  skills: {
    frontend: [
      { name: "React.js", level: 95, icon: "React", tags: ["Hooks", "Custom Hooks", "Context API", "State Optimization"] },
      { name: "Next.js", level: 90, icon: "Next", tags: ["App Router", "SSR", "SSG", "Server Actions", "API Routes"] },
      { name: "JavaScript (ES6+)", level: 92, icon: "JS", tags: ["Async/Await", "DOM", "Closures", "Modular Architecture"] },
      { name: "TypeScript", level: 85, icon: "TS", tags: ["Type Safety", "Interfaces", "Generics"] },
      { name: "HTML5 & Modern CSS3", level: 95, icon: "CSS", tags: ["Flexbox", "Grid", "Animations", "Responsive Design"] },
      { name: "Shadcn UI & Material UI", level: 92, icon: "UI", tags: ["Design Systems", "Component Libraries", "Theming"] }
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "Node", tags: ["REST APIs", "Express.js", "Middleware", "Backend Logic"] },
      { name: "Express.js", level: 85, icon: "Server", tags: ["Routing", "Controllers", "Authentication", "Validation"] },
      { name: "MongoDB & Mongoose", level: 82, icon: "DB", tags: ["CRUD", "Aggregation", "Schema Design", "Indexing"] },
      { name: "RESTful API Integration", level: 90, icon: "API", tags: ["Axios", "Fetch", "Error Handling", "Pagination"] }
    ],
    toolsAndDevOps: [
      { name: "Git & GitHub", level: 90, icon: "Git", tags: ["Branching", "Pull Requests", "Version Control"] },
      { name: "Cloud & DevOps Basics", level: 78, icon: "Cloud", tags: ["CI/CD Pipelines", "Docker Basics", "Cloud Concepts"] },
      { name: "Cross-Browser Compatibility", level: 95, icon: "Browser", tags: ["Chrome", "Firefox", "Safari", "Edge", "Mobile Viewports"] },
      { name: "Performance & SEO", level: 88, icon: "Zap", tags: ["Lighthouse Optimization", "Code Splitting", "Lazy Loading"] }
    ]
  },

  experiences: [
    {
      id: "kadit-frontend",
      role: "Front End Developer",
      company: "kadit Innovation",
      period: "2025 – Present",
      location: "India",
      type: "Full-Time",
      current: true,
      description: "Leading front-end architecture and interface engineering for enterprise recruitment and asset management software solutions.",
      highlights: [
        "Architected and developed an end-to-end ATS (Applicant Tracking System) Dashboard to streamline recruitment workflows, candidate pipelines, and recruiter analytics.",
        "Engineered an intuitive IT Asset Management Tool to improve organizational tracking, hardware/software inventory, and asset lifecycle management.",
        "Built responsive, accessible web applications using HTML5, CSS3, Material UI, Shadcn UI, and modern JavaScript.",
        "Collaborated closely with UI/UX designers and product managers to translate wireframes into pixel-perfect, accessible user interfaces.",
        "Implemented rigorous cross-browser compatibility solutions ensuring seamless performance across all modern desktop and mobile browsers."
      ],
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Material UI", "Shadcn UI", "HTML5/CSS3", "ATS Development"]
    },
    {
      id: "mobbicare-intern",
      role: "Web Development Intern",
      company: "Mobbicare Software Company",
      period: "2024 – 2025",
      location: "India",
      type: "Internship",
      current: false,
      description: "Engineered responsive web applications and interactive UI components focusing on optimal performance and cross-browser stability.",
      highlights: [
        "Developed and optimized responsive web applications with React.js to enhance functionality, accessibility, and speed.",
        "Implemented interactive UI components that elevated user experience and streamlined operational performance.",
        "Debugged and resolved complex UI issues and layout inconsistencies to achieve 100% cross-browser compatibility and improve user satisfaction.",
        "Participated in agile sprints, daily standups, and rigorous code reviews to maintain clean, reusable codebases."
      ],
      skills: ["React.js", "JavaScript", "Responsive UI", "Component Lifecycle", "Cross-Browser Debugging", "CSS3"]
    },
    {
      id: "kadit-cloud-devops",
      role: "Cloud & DevOps Intern",
      company: "KADIT Innovations",
      period: "12/2023 – 01/2024",
      location: "India",
      type: "Internship & Training",
      current: false,
      description: "Hands-on immersion in fundamental cloud architecture, automated CI/CD workflows, and developer infrastructure.",
      highlights: [
        "Gained hands-on experience with fundamental DevOps tools, version control, and containerization basics.",
        "Configured and implemented simple, automated CI/CD deployment pipelines for web applications.",
        "Mastered fundamental cloud computing concepts, virtualization, server management, and deployment best practices."
      ],
      skills: ["Cloud Computing", "CI/CD Pipelines", "DevOps Fundamentals", "Git Workflows", "Build Automation"]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "ats-dashboard",
      title: "Enterprise ATS Recruitment Dashboard",
      category: "enterprise",
      tagline: "Comprehensive talent pipeline & recruiter workflow management system",
      description: "A full-featured Applicant Tracking System (ATS) dashboard designed at kadit Innovation to streamline end-to-end recruitment pipelines, applicant tracking, interview scheduling, and hiring metrics.",
      role: "Lead Front End Developer",
      company: "kadit Innovation",
      period: "2025",
      technologies: ["React.js", "Next.js", "Shadcn UI", "TypeScript", "REST APIs", "Tailwind/CSS", "Recharts"],
      metrics: [
        "Streamlined hiring workflows by 40%",
        "Real-time candidate status updates",
        "100% responsive data-dense dashboard"
      ],
      keyFeatures: [
        "Kanban-style candidate pipeline management with drag-and-drop stages",
        "Interactive analytics dashboard visualizing applicant metrics & time-to-hire",
        "Automated resume preview and candidate rating rubric",
        "Multi-role access for recruiters, hiring managers, and interviewers"
      ],
      featured: true,
      color: "#00f2fe"
    },
    {
      id: "it-asset-management",
      title: "IT Asset Management Platform",
      category: "enterprise",
      tagline: "Real-time organization asset tracking & lifecycle management tool",
      description: "An enterprise-grade asset management tool built at kadit Innovation to track, audit, and manage organizational IT hardware and software assets from procurement to retirement.",
      role: "Front End & System Developer",
      company: "kadit Innovation",
      period: "2025",
      technologies: ["React.js", "Node.js", "Material UI", "MongoDB", "Express.js", "JavaScript"],
      metrics: [
        "Organized 500+ physical and virtual assets",
        "Reduced asset auditing time by 60%",
        "Automated maintenance & warranty alerts"
      ],
      keyFeatures: [
        "Dynamic asset inventory table with fast filtering, sorting, and search",
        "Asset allocation & department tracking workflows",
        "Warranty expiration notifications and maintenance log history",
        "Exportable asset compliance & depreciation reports"
      ],
      featured: true,
      color: "#7928ca"
    },
    {
      id: "mobbicare-portal",
      title: "Mobbicare Interactive Web Portal",
      category: "frontend",
      tagline: "High-performance responsive portal with seamless UI components",
      description: "An interactive, mobile-optimized web application engineered during internship at Mobbicare Software Company, featuring dynamic component states, smooth transitions, and cross-browser reliability.",
      role: "Web Development Intern",
      company: "Mobbicare Software Company",
      period: "2024–2025",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3 Glassmorphism", "Responsive Design"],
      metrics: [
        "99+ Lighthouse performance score",
        "Zero cross-browser rendering bugs",
        "Optimized mobile-first touch UX"
      ],
      keyFeatures: [
        "Custom reusable interactive component library",
        "Responsive grid systems with fluid typography",
        "Optimized bundle size and lazy loading for instant page loads"
      ],
      featured: true,
      color: "#10b981"
    },
    {
      id: "mern-fullstack-hub",
      title: "MERN Stack Cloud Workspace",
      category: "fullstack",
      tagline: "Collaborative project & task hub with RESTful Node/MongoDB backend",
      description: "A full-stack collaborative workspace application built with Node.js, Express, MongoDB, and Next.js/React frontend with JWT authentication and real-time state synchronization.",
      role: "Full Stack Developer",
      period: "2024",
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "React.js", "Next.js", "JWT"],
      metrics: [
        "Secure JWT authentication & role authorization",
        "CRUD operations with sub-100ms API response time",
        "MongoDB schema with aggregate indexing"
      ],
      keyFeatures: [
        "User authentication and encrypted session management",
        "Task organization board with priority tagging and deadlines",
        "REST API endpoints with validation middleware",
        "Responsive theme system with dark mode support"
      ],
      featured: false,
      color: "#f59e0b"
    }
  ] as Project[],

  education: [
    {
      institution: "Sengunthar College of Engineering",
      degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
      period: "2013 – 2017",
      gpa: "GPA: 6.53",
      location: "Tamil Nadu, India",
      iconType: "college"
    },
    {
      institution: "Masood Thaiks Higher Secondary School",
      degree: "Higher Secondary Education (HSC)",
      period: "2011 – 2013",
      gpa: "GPA: 6.67",
      location: "Tamil Nadu, India",
      iconType: "school"
    },
    {
      institution: "Rathna High School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "Passed",
      gpa: "GPA: 7.82",
      location: "Tamil Nadu, India",
      iconType: "highschool"
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Cloud and DevOps Internship Certification",
      issuer: "KADIT Innovations",
      period: "12/2023 – 01/2024",
      description: "Comprehensive hands-on training on continuous integration/continuous deployment (CI/CD) pipelines, cloud architecture principles, containerization, and modern deployment practices.",
      skills: ["DevOps", "CI/CD", "Cloud Fundamentals", "Git Workflows", "Build Pipelines"]
    }
  ] as CertificateItem[]
};
