export const profile = {
  name: "Saravanan S",
  role: "Front End Engineer | React.js | TypeScript",
  location: "Chennai, Tamil Nadu, India",
  email: "saravananvijay005@gmail.com",
  phone: "+91 8344781938",
  github: "https://github.com/Saravananshankar98",
  linkedin: "https://www.linkedin.com/in/saravanan-s-frontend-engineer/",
  photo: `${process.env.PUBLIC_URL}/profile.png`,
  summary:
    "Front End Engineer with 4 years of experience building responsive, production web applications with React.js, TypeScript, and modern UI libraries. Experienced in reusable components, REST API integration, testing, performance optimization, and end-to-end feature delivery with Agile teams. Immediate joiner.",
  availability: "Available immediately",
  portfolio: "https://saravananshankar98.github.io/portfolio",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export const heroRoles = [
  "Frontend Developer",
  "React.js Specialist",
  "TypeScript Engineer",
  "Frontend Engineer",
];

export const stats = [
  { value: "4", label: "Years experience" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Product projects" },
  { value: "2", label: "Live products" },
];

export const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Next.js",
    ],
    description:
      "Semantic markup, responsive layouts, CSS Grid/Flexbox, animations, and clean JavaScript fundamentals.",
  },
  {
    title: "UI and Component Development",
    items: ["Material UI", "PrimeReact", "Tailwind CSS", "Reusable Components"],
    description:
      "Component-driven UIs, typed props and state, reusable hooks, and maintainable frontend architecture.",
  },
  {
    title: "State and API",
    items: ["React Hooks", "Context API", "Redux", "REST APIs"],
    description:
      "API integration, form workflows, app state, loading states, and real user interaction handling.",
  },
  {
    title: "Testing and Quality",
    items: ["Jest", "Unit Testing", "Component Testing", "Code Reviews"],
    description:
      "Component and unit tests, QA collaboration, and code reviews to improve reliability and reduce production defects.",
  },
  {
    title: "Engineering and Delivery",
    items: ["Code Splitting", "Lazy Loading", "Git", "Jira", "Agile/Scrum", "CI/CD"],
    description:
      "Performance optimization, release pipelines, sprint planning, branching, and dependable delivery.",
  },
];

export const companies = [
  {
    id: "lapis",
    company: "Lapis Data Analytics Pvt. Ltd.",
    role: "Software Engineer",
    period: "Nov 2024 - Jul 2026",
    current: false,
    summary:
      "Owned frontend delivery for the Account Platform across 3+ core modules, from reusable React and TypeScript components and REST API integration through testing, deployment, and production support.",
    projects: [
      {
        name: "Account Platform",
        status: "Account management UI",
        overview:
          "An internal account management platform used to manage account records, account status, and related system configuration data.",
        contribution:
          "Owned frontend development across 3+ core modules, building 10+ reusable React and TypeScript components, integrating REST APIs, and delivering features through testing, deployment, and production release.",
        tech: ["React.js", "TypeScript", "Material UI", "Admin UI"],
      },
      {
        name: "ChainEdge UI",
        liveUrl: "https://app.chainedge.io/",
        status: "Live product",
        overview:
          "A production blockchain analytics and portfolio tracking platform with real-time wallet and asset insights.",
        contribution:
          "Resolved 15+ responsive layout and component alignment issues, improving UI consistency across screen sizes.",
        tech: ["React.js", "TypeScript", "Material UI", "Responsive CSS"],
      },
      {
        name: "Talentron",
        liveUrl: "https://talentron.org/",
        status: "Basic frontend fixes",
        overview:
          "A technology leadership and mentoring platform focused on supporting upcoming developers.",
        contribution:
          "Fixed UI and responsive layout issues across 5+ screens for consistent mobile, tablet, and desktop experiences.",
        tech: ["React.js", "CSS", "UI Fixes"],
      },
    ],
  },
  {
    id: "bloomlync",
    company: "Bloomlync Technology Pvt Ltd",
    role: "Front-End Developer",
    period: "Sep 2022 - May 2024",
    current: false,
    summary:
      "Enhanced production features across Prism-Web, Prism-Terminal, and Mentor ERP, with a focus on responsive reusable UI, Jest testing, performance, and reliable releases.",
    projects: [
      {
        name: "Prism-Web and Prism-Terminal",
        status: "Product UI",
        overview:
          "Connected frontend products for the global racing industry, including browser workflows and specialized display interfaces.",
        contribution:
          "Enhanced 5+ production features across Prism-Web and Prism-Terminal using React.js, TypeScript, and Material UI, including component development, refactoring, and bug fixes. Maintained CI/CD pipelines across 3+ projects.",
        tech: ["React.js", "TypeScript", "Material UI", "CSS", "Git"],
      },
      {
        name: "Mentor ERP",
        status: "Enterprise UI",
        overview:
          "An ERP frontend with forms, tables, dashboards, and responsive layouts for business operations.",
        contribution:
          "Built mobile-first layouts for 8+ screens. Implemented Jest tests across 15+ components with 80%+ coverage, wrote 20+ unit tests, and used code splitting and lazy loading to reduce page load time by 30%.",
        tech: ["React.js", "Material UI", "Jest", "Responsive Design"],
      },
    ],
  },
];

export const personalProjects = [
  {
    name: "MoneyFlow",
    status: "Personal Project | React Native",
    overview:
      "A local-first personal finance app for managing multiple accounts, tracking income and expenses, transferring money, and maintaining balances automatically.",
    contribution:
      "Designed and developed the app independently with reusable components, centralized state management, transaction balance logic, form validation, and local data persistence.",
    reason:
      "Built to strengthen React Native and TypeScript skills through a practical application with real-world business logic.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "AsyncStorage",
    ],
    // github: "https://github.com/Saravananshankar98/MoneyFlow",
  },
  {
    name: "TVS Bike Details",
    status: "Code on GitHub",
    github: "https://github.com/Saravananshankar98/TVSBikeDetails",
    overview:
      "A personal React and TypeScript app that displays detailed information about TVS motorcycles.",
    contribution:
      "Designed and developed the frontend independently with typed data structures, reusable components, and iterative GitHub commits.",
    reason:
      "Built to deepen React and TypeScript skills through a practical project instead of only tutorials.",
    tech: ["React.js", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "Cashbook App",
    status: "Built, not published",
    overview:
      "A React Native mobile app for tracking cash income, expenses, balances, and categories.",
    contribution:
      "Built core screens, transaction entry forms, balance views, and mobile UI patterns while learning React Native.",
    reason:
      "A self-learning project that helped connect web React experience with mobile app development.",
    tech: ["React Native", "JavaScript", "Mobile UI"],
  },
];

export const timeline = [
  {
    year: "2015",
    title: "Started BSc Computer Science",
    detail: "Thiruvalluvar University",
  },
  { year: "2018", title: "Graduated", detail: "Computer Science foundation" },
  {
    year: "2022",
    title: "Joined Bloomlync",
    detail: "First full-time frontend role",
  },
  {
    year: "2023",
    title: "Delivered production frontend features",
    detail: "Prism-Web, Prism-Terminal, and Mentor ERP",
  },
  {
    year: "2024",
    title: "Joined Lapis Data Analytics",
    detail: "Software Engineer",
  },
  {
    year: "Now",
    title: "Learning and building",
    detail: "React Native, Next.js, Python",
  },
];

export const learning = [
  { name: "React Native", progress: 65 },
  { name: "Next.js", progress: 50 },
  { name: "Python", progress: 40 },
  { name: "Angular", progress: 30 },
];

export const aboutStories = [
  {
    title: "The Beginning",
    body: "I am originally from Thiruvannamalai, Tamil Nadu. I completed my BSc Computer Science at Thiruvalluvar University from 2015 to 2018, where I built my programming foundation.",
  },
  {
    title: "First Role - Bloomlync",
    body: "At Bloomlync, I worked as a Front-End Developer across Prism-Web, Prism-Terminal, and Mentor ERP, delivering production features, responsive screens, component tests, and performance improvements.",
  },
  {
    title: "Lapis Data Analytics",
    body: "At Lapis Data Analytics, I owned frontend delivery for the Account Platform across 3+ core modules, building reusable components, integrating REST APIs, and supporting testing and releases. I also resolved responsive UI issues across ChainEdge and Talentron.",
  },
  {
    title: "How I Work",
    body: "I care about ownership, clear communication, readable code, testing, and improving the user experience through small careful details.",
  },
];
