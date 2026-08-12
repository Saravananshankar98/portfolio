export const profile = {
  name: "Saravanan S",
  role: "Frontend React Developer",
  location: "Thiruvannamalai, Tamil Nadu, India",
  email: "saravananvijay005@gmail.com",
  phone: "+91 8344781938",
  github: "https://github.com/Saravananshankar98",
  linkedin: "https://www.linkedin.com/in/saravanan-s-aa257124a/",
  photo: `${process.env.PUBLIC_URL}/profile.jpg`,
  summary:
    "Frontend React Developer with 3+ years of full-time experience building responsive, maintainable web applications with React, TypeScript, Material UI, and modern CSS.",
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
  "UI Builder",
];

export const stats = [
  { value: "3+", label: "Years experience" },
  { value: "2", label: "Companies" },
  { value: "5+", label: "Product projects" },
  { value: "2", label: "Live products" },
];

export const skills = [
  {
    title: "Core Web",
    items: ["HTML5", "CSS3", "JavaScript ES6+"],
    description:
      "Semantic markup, responsive layouts, CSS Grid/Flexbox, animations, and clean JavaScript fundamentals.",
  },
  {
    title: "React Stack",
    items: ["React.js", "TypeScript", "Hooks"],
    description:
      "Component-driven UIs, typed props and state, reusable hooks, and maintainable frontend architecture.",
  },
  {
    title: "UI Libraries",
    items: ["Material UI", "PrimeReact", "Tailwind CSS"],
    description:
      "Production UI implementation with consistent components, polished states, and accessible patterns.",
  },
  {
    title: "State and API",
    items: ["Context API", "REST APIs", "Forms"],
    description:
      "API integration, form workflows, app state, loading states, and real user interaction handling.",
  },
  {
    title: "Testing",
    items: ["Jest", "JUnit", "Unit Testing"],
    description:
      "Focused tests for components and business logic so releases are easier to trust.",
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "Jira", "Agile"],
    description:
      "Branching, build management, sprint work, QA collaboration, and clear delivery communication.",
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
      "Working on data analytics and blockchain products with a focus on responsive UI fixes, layout reliability, and production frontend quality.",
    projects: [
      {
        name: "Account Platform",
        status: "Account management UI",
        overview:
          "An internal account management platform used to manage account records, account status, and related system configuration data.",
        contribution:
          "Worked on account listing, create and update flows, CRUD screens, and account status actions such as active, suspend, and terminate. Also contributed to system configuration pages including account client, contact reason, flag, permission rule, and preference type modules.",
        tech: ["React.js", "TypeScript", "Material UI", "Admin UI"],
      },
      {
        name: "ChainEdge UI",
        liveUrl: "https://app.chainedge.io/",
        status: "Live product",
        overview:
          "A production blockchain analytics and portfolio tracking platform with real-time wallet and asset insights.",
        contribution:
          "Audited responsive layouts, fixed mobile and tablet breakpoints, corrected alignment issues, and improved cross-device reliability.",
        tech: ["React.js", "TypeScript", "Material UI", "Responsive CSS"],
      },
      {
        name: "Talentron",
        liveUrl: "https://talentron.org/",
        status: "Basic frontend fixes",
        overview:
          "A technology leadership and mentoring platform focused on supporting upcoming developers.",
        contribution:
          "Handled basic frontend changes and small UI fixes based on project requirements.",
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
      "First full-time frontend role, working across racing industry products and growing from implementation work into full ownership of a product module.",
    projects: [
      {
        name: "Prism-Web and Prism-Terminal",
        status: "Product UI",
        overview:
          "Connected frontend products for the global racing industry, including browser workflows and specialized display interfaces.",
        contribution:
          "Built UI features, managed branches and builds, collaborated with QA, and supported sprint delivery through Jira.",
        tech: ["React.js", "TypeScript", "Material UI", "CSS", "Git"],
      },
      {
        name: "Mentor ERP",
        status: "Enterprise UI",
        overview:
          "An ERP frontend with forms, tables, dashboards, and responsive layouts for business operations.",
        contribution:
          "Developed responsive components, wrote Jest tests, and improved performance with lazy loading and code splitting patterns.",
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
    title: "Led Prism Account Platform",
    detail: "Design to deployment ownership",
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
    body: "At Bloomlync, I worked as a Front-End Developer across Prism-Web, Prism-Terminal, Mentor ERP, and the Prism Account Platform. The strongest highlight was taking ownership of the Prism Account Platform end to end.",
  },
  {
    title: "Current Role - Lapis Data Analytics",
    body: "At Lapis Data Analytics, I work on more complex production UIs including ChainEdge, a live blockchain analytics product. My focus is responsive quality, reliable layouts, and clean frontend code.",
  },
  {
    title: "How I Work",
    body: "I care about ownership, clear communication, readable code, testing, and improving the user experience through small careful details.",
  },
];
