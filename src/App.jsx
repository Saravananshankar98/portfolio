import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════
  DESIGN TOKENS
═══════════════════════════════════════════════════════ */
const C = {
  bg:          "#07090d",
  surface:     "#0c1017",
  card:        "#101620",
  cardHover:   "#141c27",
  border:      "#1c2a3a",
  borderGlow:  "#00d4ff",
  accent:      "#00d4ff",
  accentDim:   "rgba(0,212,255,0.12)",
  accentGlow:  "rgba(0,212,255,0.22)",
  gold:        "#f0a500",
  goldDim:     "rgba(240,165,0,0.12)",
  green:       "#00e676",
  greenDim:    "rgba(0,230,118,0.12)",
  purple:      "#b06fff",
  purpleDim:   "rgba(176,111,255,0.12)",
  text:        "#dde6ee",
  textSoft:    "#8a9bac",
  muted:       "#4a6070",
};

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const SKILLS = [
  {
    cat: "Core Web", icon: "🌐",
    items: ["HTML5", "CSS3", "JavaScript ES6+"],
    desc: "Strong foundation in semantic HTML, modern CSS (Flexbox, Grid, animations), and clean ES6+ JavaScript.",
  },
  {
    cat: "Frameworks", icon: "⚛️",
    items: ["React.js", "TypeScript"],
    desc: "Primary stack — building component-driven UIs with React and type-safe code using TypeScript.",
  },
  {
    cat: "UI Libraries", icon: "🎨",
    items: ["Material-UI", "PrimeReact", "Tailwind CSS"],
    desc: "Experienced with production-grade component libraries to ship polished, accessible UIs quickly.",
  },
  {
    cat: "State & API", icon: "🔗",
    items: ["React Hooks", "Context API", "REST APIs"],
    desc: "Managing complex UI state with hooks, app-wide state with Context, and seamless backend integration via REST.",
  },
  {
    cat: "Testing", icon: "🧪",
    items: ["Jest", "JUnit", "Unit Testing"],
    desc: "Writing unit and component tests to catch bugs early and ensure reliability before deployment.",
  },
  {
    cat: "Workflow & Tools", icon: "🛠️",
    items: ["Git", "GitHub", "Jira", "MongoDB", "Agile"],
    desc: "Day-to-day tools: Git for version control, Jira for sprint tracking, MongoDB for data, Agile for team delivery.",
  },
];

const COMPANIES = [
  {
    id: "lapis",
    period: "Nov 2024 – Present",
    badge: "Current",
    company: "Lapis Data Analytics Pvt. Ltd.",
    role: "Software Engineer",
    type: "Full-Time",
    color: C.accent,
    summary: "Working as a full-time Software Engineer on two products in the data analytics and blockchain space. My focus is on delivering stable, responsive frontend experiences — identifying UI issues, fixing broken layouts across devices, and ensuring the codebase is clean and maintainable.",
    projects: [
      {
        name: "ChainEdge UI",
        live: true,
        url: "https://app.chainedge.io/",
        color: C.accent,
        what: "What is it?",
        whatDesc: "ChainEdge is a live, production blockchain analytics and portfolio tracking platform. It gives users real-time insights into crypto assets, wallet data, and on-chain activity through a feature-rich web dashboard.",
        myRole: "My Contribution",
        myRoleDesc: "I joined this project to resolve critical responsive design issues that were causing the UI to break on mobile and tablet screen sizes. I audited the entire layout, fixed CSS breakpoints, corrected component alignment bugs, and made sure every screen from 320px to 4K displays correctly. The app is live and actively used by real users.",
        tags: ["React.js", "TypeScript", "Responsive CSS", "Breakpoint Fixes", "Cross-device Testing", "Material-UI"],
      },
      {
        name: "Talentron",
        live: false,
        url: null,
        color: C.gold,
        what: "What is it?",
        whatDesc: "Talentron is a platform focused on empowering the next generation of technology leaders — founded by Solomon, whose 20-year career spans multiple tech domains. The product aims to connect and mentor upcoming developers.",
        myRole: "My Contribution",
        myRoleDesc: "This was a smaller scoped project where I contributed frontend fixes — primarily resolving responsive layout issues that were causing the UI to display incorrectly on different screen sizes. Ensured consistent visual behavior across mobile, tablet, and desktop.",
        tags: ["React.js", "Responsive Fixes", "CSS", "UI Debugging"],
      },
    ],
  },
  {
    id: "bloomlync",
    period: "Sep 2022 – May 2024",
    badge: null,
    company: "Bloomlync",
    role: "Front-End Developer",
    type: "Full-Time",
    color: C.green,
    summary: "My first full-time role as a Frontend Developer. Over roughly 18 months (with two stints), I worked across three different products — taking increasing ownership with each project. This is where I developed my core skills in React, TypeScript, component architecture, testing, and deployment workflows.",
    projects: [
      {
        name: "Prism Account Platform",
        live: false,
        url: null,
        color: C.green,
        what: "What is it?",
        whatDesc: "A comprehensive user account management system built for the global racing industry. The platform handled user authentication, account settings, profile management, and role-based access control across Prism's suite of racing products.",
        myRole: "My Contribution",
        myRoleDesc: "I had full ownership of this project — from UI design to development, testing, and deployment. I designed the user flows using HTML and CSS, built all components using React.js and TypeScript, integrated with backend APIs, and managed the entire release pipeline including build management, Git branching strategy, and deployment. This was my most independent and complete project.",
        tags: ["React.js", "TypeScript", "Material-UI", "Full Ownership", "API Integration", "Jest", "Deployment", "Jira"],
      },
      {
        name: "Prism-Web & Prism-Terminal",
        live: false,
        url: null,
        color: C.accent,
        what: "What is it?",
        whatDesc: "Two connected frontend products serving the global racing industry. Prism-Web was the primary browser-based interface, while Prism-Terminal was a specialized display product — both needed consistent, responsive UIs with real-time data.",
        myRole: "My Contribution",
        myRoleDesc: "Implemented user interfaces using React.js, TypeScript, and Material UI. Managed Git branch creation, build processes, and deployment for organised project execution. Collaborated closely with QA engineers to write test plans and ensure high-quality software releases. Used Jira throughout for sprint management and task tracking.",
        tags: ["React.js", "CSS", "Material-UI", "TypeScript", "Git Branching", "QA Collaboration", "Jira", "Build Management"],
      },
      {
        name: "Mentor ERP",
        live: false,
        url: null,
        color: C.purple,
        what: "What is it?",
        whatDesc: "An Enterprise Resource Planning (ERP) system for business operations management. The frontend required complex forms, data tables, and dashboards that needed to work across multiple device sizes within a corporate environment.",
        myRole: "My Contribution",
        myRoleDesc: "Developed responsive UI components using React.js and Material UI — applying mobile-first design principles to ensure layouts worked correctly across all screen sizes. Wrote unit tests using Jest to validate component functionality and maintain code reliability. Also contributed to performance improvements by applying lazy loading and code splitting techniques.",
        tags: ["React.js", "Material-UI", "Responsive Design", "Jest Testing", "Performance Optimization", "Unit Tests"],
      },
    ],
  },
];

const TIMELINE = [
  { year: "2015", label: "Started BSc Computer Science", sub: "Thiruvalluvar University" },
  { year: "2018", label: "Graduated — BSc Computer Science", sub: "Ready to build things" },
  { year: "2022", label: "Joined Bloomlync", sub: "First full-time Frontend Dev role" },
  { year: "2023", label: "Led Prism Account Platform", sub: "Full ownership — design to deployment" },
  { year: "2024", label: "Joined Lapis Data Analytics", sub: "Software Engineer — blockchain & data" },
  { year: "Now", label: "Building, growing, learning", sub: "React Native · Next.js · Python" },
];

const LEARNING = [
  { name: "React Native", icon: "📱", progress: 65, desc: "Building cross-platform mobile apps" },
  { name: "Next.js", icon: "▲", progress: 50, desc: "SSR & full-stack React" },
  { name: "Python", icon: "🐍", progress: 40, desc: "Scripting & backend basics" },
  { name: "Angular.js", icon: "🅰️", progress: 30, desc: "Exploring alternative frameworks" },
];

/* ═══════════════════════════════════════════════════════
   HOOKS
═══════════════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useTypewriter(words) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setText(word.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIdx > 0) {
        setText(word.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words]);

  return text;
}

/* ═══════════════════════════════════════════════════════
   SMALL COMPONENTS
═══════════════════════════════════════════════════════ */
function GlowCursor() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div style={{
      position: "fixed", pointerEvents: "none", zIndex: 0,
      left: pos.x - 250, top: pos.y - 250,
      width: 500, height: 500,
      background: "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
      borderRadius: "50%", transition: "left 0.08s linear, top 0.08s linear",
    }} />
  );
}

function GridLines() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)
      `,
      backgroundSize: "64px 64px",
    }} />
  );
}

function SectionLabel({ num, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.72rem", color: C.accent, opacity: 0.7 }}>
        // {num}
      </span>
      <span style={{ height: 1, width: 40, background: C.border }} />
      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.72rem", color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {text}
      </span>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
      fontSize: "clamp(2rem, 4vw, 3rem)",
      color: C.text, lineHeight: 1.1, marginBottom: "0.6rem",
    }}>{children}</h2>
  );
}

function Tag({ label, color = C.accent }) {
  return (
    <span style={{
      fontFamily: "'Fira Code', monospace", fontSize: "0.68rem",
      padding: "0.22rem 0.6rem",
      background: `${color}14`,
      border: `1px solid ${color}28`,
      color: color, borderRadius: 3,
      whiteSpace: "nowrap",
    }}>{label}</span>
  );
}

function LiveBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.35rem",
      padding: "0.15rem 0.65rem", borderRadius: 100,
      background: C.greenDim, border: `1px solid rgba(0,230,118,0.3)`,
      fontSize: "0.62rem", fontWeight: 700, color: C.green,
      letterSpacing: "0.12em", fontFamily: "'Outfit', sans-serif",
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: "50%",
        background: C.green, boxShadow: `0 0 6px ${C.green}`,
        animation: "pulse 2s infinite",
      }} />
      LIVE
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════ */
function Nav({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1rem 3rem",
      background: scrolled ? "rgba(7,9,13,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: `1px solid ${scrolled ? C.border : "transparent"}`,
      transition: "all 0.35s ease",
    }}>
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: "1.1rem", color: C.accent, letterSpacing: "0.08em",
        }}>{"<SS />"}</span>
      </a>
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem",
            fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
            color: active === l.id ? C.accent : C.muted,
            textDecoration: "none", transition: "color 0.2s",
            paddingBottom: 2,
            borderBottom: `1px solid ${active === l.id ? C.accent : "transparent"}`,
          }}>{l.label}</a>
        ))}
        <a href="mailto:saravananvijay005@gmail.com" style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem",
          fontWeight: 600, color: C.bg,
          background: C.accent, padding: "0.45rem 1.1rem",
          borderRadius: 4, textDecoration: "none",
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >Hire Me</a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════ */
function Hero() {
  const typed = useTypewriter([
    "Frontend Developer",
    "React.js Specialist",
    "TypeScript Engineer",
    "UI/UX Builder",
  ]);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "8rem 3rem 5rem", position: "relative", overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "25%",
        width: 280, height: 280, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(240,165,0,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Giant bg monogram */}
      <div style={{
        position: "absolute", right: "-4rem", top: "50%",
        transform: "translateY(-50%)",
        fontFamily: "'Outfit', sans-serif", fontWeight: 800,
        fontSize: "min(28vw, 340px)", lineHeight: 1,
        color: "rgba(0,212,255,0.025)",
        userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.04em",
      }}>SS</div>

      <div style={{ maxWidth: 780, position: "relative", zIndex: 1 }}>

        {/* Available badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          padding: "0.4rem 1rem",
          border: `1px solid ${C.border}`,
          background: C.accentDim,
          borderRadius: "100px", marginBottom: "2rem",
          animation: "fadeUp 0.6s ease both",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: C.green, boxShadow: `0 0 8px ${C.green}`,
            animation: "pulse 2s infinite",
          }} />
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: C.textSoft }}>
            Open to new opportunities
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 800,
          fontSize: "clamp(3.2rem, 8vw, 6rem)", lineHeight: 0.95,
          color: C.text, margin: "0 0 1rem",
          animation: "fadeUp 0.7s 0.1s ease both", opacity: 0,
          animationFillMode: "forwards",
          letterSpacing: "-0.02em",
        }}>
          Saravanan<br />
          <span style={{ color: C.accent }}>S</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 600,
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          color: C.textSoft, marginBottom: "2rem", height: "2rem",
          display: "flex", alignItems: "center", gap: "0.3rem",
          animation: "fadeUp 0.7s 0.2s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          <span style={{ color: C.muted }}>{">"}</span>
          <span>{typed}</span>
          <span style={{
            display: "inline-block", width: 2, height: "1.1em",
            background: C.accent, animation: "blink 1s step-end infinite",
          }} />
        </div>

        {/* Bio */}
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 400,
          fontSize: "1.05rem", lineHeight: 1.85, color: C.textSoft,
          maxWidth: 580, marginBottom: "1.2rem",
          animation: "fadeUp 0.7s 0.3s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          I'm a Frontend React Developer with <strong style={{ color: C.text, fontWeight: 600 }}>3+ years of full-time experience</strong> building
          responsive, performant, and visually polished web applications — from user account systems for
          the global racing industry to live blockchain analytics platforms.
        </p>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 400,
          fontSize: "1.05rem", lineHeight: 1.85, color: C.textSoft,
          maxWidth: 580, marginBottom: "2.8rem",
          animation: "fadeUp 0.7s 0.35s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          Currently at <span style={{ color: C.text, fontWeight: 600 }}>Lapis Data Analytics Pvt. Ltd.</span> — previously at{" "}
          <span style={{ color: C.text, fontWeight: 600 }}>Bloomlync</span>. I care about clean code,
          pixel-perfect layouts, and delivering real value with every pull request.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          animation: "fadeUp 0.7s 0.4s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          {[
            { label: "See My Work ↓", href: "#experience", bg: C.accent, color: C.bg, glow: true },
            { label: "Get In Touch", href: "mailto:saravananvijay005@gmail.com", bg: "transparent", color: C.text, glow: false },
            { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/saravanan-s-aa257124a/", bg: "transparent", color: C.accent, glow: false },
          ].map(b => (
            <a key={b.label} href={b.href}
              target={b.href.startsWith("http") ? "_blank" : undefined}
              rel={b.href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                padding: "0.88rem 1.8rem",
                background: b.bg, color: b.color,
                fontFamily: "'Outfit', sans-serif", fontWeight: 700,
                fontSize: "0.88rem", letterSpacing: "0.04em",
                textDecoration: "none", borderRadius: 5,
                border: `2px solid ${b.bg === "transparent" ? C.border : b.bg}`,
                transition: "all 0.25s",
                boxShadow: b.glow ? `0 0 28px rgba(0,212,255,0.28)` : "none",
              }}
              onMouseEnter={e => {
                if (b.glow) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.accent; }
                else { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = b.bg;
                e.currentTarget.style.color = b.color;
                e.currentTarget.style.borderColor = b.bg === "transparent" ? C.border : b.bg;
              }}
            >{b.label}</a>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "0", marginTop: "4.5rem",
          borderTop: `1px solid ${C.border}`, paddingTop: "2rem",
          animation: "fadeUp 0.7s 0.5s ease both", opacity: 0,
          animationFillMode: "forwards",
        }}>
          {[
            ["3+", "Years of full-time\nexperience"],
            ["2", "Companies worked\nat professionally"],
            ["5", "Projects shipped\nacross platforms"],
            ["2", "Live products\nin production"],
          ].map(([n, l], i) => (
            <div key={n + l} style={{
              flex: 1, paddingRight: "2rem",
              borderRight: i < 3 ? `1px solid ${C.border}` : "none",
              paddingLeft: i > 0 ? "2rem" : 0,
            }}>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "2.2rem", color: C.accent, lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: C.muted, marginTop: 6, lineHeight: 1.5, whiteSpace: "pre-line" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════ */
function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} style={{ padding: "7rem 3rem", background: C.surface, position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel num="01" text="skills" />
        <SectionTitle>Technical Skills</SectionTitle>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "1rem",
          lineHeight: 1.8, color: C.textSoft,
          maxWidth: 600, marginBottom: "3.5rem",
        }}>
          I've built my skill set through real projects in professional environments — not just tutorials.
          Each skill below represents something I've used to ship actual products.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "1.2rem",
        }}>
          {SKILLS.map((s, i) => (
            <SkillCard key={s.cat} skill={s} delay={i * 0.07} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.cardHover : C.card,
        border: `1px solid ${hovered ? C.accent : C.border}`,
        borderRadius: 8, padding: "1.8rem",
        transition: "all 0.3s ease",
        transform: inView ? (hovered ? "translateY(-5px)" : "translateY(0)") : "translateY(24px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}s`,
        boxShadow: hovered ? `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${C.accentGlow}` : "none",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span>
        <div>
          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: C.accent, marginBottom: "0.1rem", opacity: 0.8 }}>
            {skill.cat.toLowerCase()}
          </p>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text }}>
            {skill.cat}
          </h3>
        </div>
      </div>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", lineHeight: 1.7, color: C.textSoft, marginBottom: "1.1rem" }}>
        {skill.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
        {skill.items.map(item => <Tag key={item} label={item} />)}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════ */
function Experience() {
  const [ref, inView] = useInView(0.05);
  const [activeId, setActiveId] = useState("lapis");
  const company = COMPANIES.find(c => c.id === activeId);

  return (
    <section id="experience" ref={ref} style={{ padding: "7rem 3rem", position: "relative" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        <SectionLabel num="02" text="experience" />
        <SectionTitle>Work Experience</SectionTitle>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "1rem",
          lineHeight: 1.8, color: C.textSoft,
          maxWidth: 640, marginBottom: "3.5rem",
        }}>
          Two full-time roles, five projects, and constant growth. Each position taught me something different —
          from full ownership of a product to debugging responsive issues in a live blockchain app.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "290px 1fr", gap: "2.5rem", alignItems: "start" }}>

          {/* Company selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", position: "sticky", top: "7rem" }}>
            {COMPANIES.map(c => (
              <button key={c.id} onClick={() => setActiveId(c.id)} style={{
                all: "unset", cursor: "pointer",
                background: activeId === c.id ? `${c.color}12` : "transparent",
                border: `1px solid ${activeId === c.id ? c.color : C.border}`,
                borderLeft: `3px solid ${activeId === c.id ? c.color : C.muted}`,
                borderRadius: "0 8px 8px 0",
                padding: "1.1rem 1.3rem",
                transition: "all 0.25s",
              }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: activeId === c.id ? c.color : C.text }}>
                  {c.company}
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: C.muted, marginTop: 3 }}>
                  {c.role}
                </div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.68rem", color: C.muted, marginTop: 3 }}>
                  {c.period}
                </div>
                {c.badge && (
                  <div style={{ marginTop: 7 }}>
                    <span style={{
                      padding: "0.12rem 0.55rem", borderRadius: 100,
                      fontSize: "0.6rem", fontWeight: 700,
                      fontFamily: "'Outfit', sans-serif",
                      background: C.greenDim, border: `1px solid rgba(0,230,118,0.3)`,
                      color: C.green, letterSpacing: "0.12em",
                    }}>● CURRENT</span>
                  </div>
                )}
              </button>
            ))}

            {/* Education card */}
            <div style={{
              marginTop: "1rem",
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: "1.1rem 1.3rem",
            }}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: C.gold, marginBottom: "0.3rem" }}>education</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: C.text }}>BSc Computer Science</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: C.textSoft, marginTop: 2 }}>Thiruvalluvar University</div>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.65rem", color: C.muted, marginTop: 4 }}>2015 – 2018</div>
            </div>
          </div>

          {/* Projects panel */}
          <div>
            {/* Company overview */}
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderTop: `3px solid ${company.color}`,
              borderRadius: 8, padding: "2rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: C.text }}>{company.company}</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: C.textSoft, marginTop: 3 }}>
                    {company.role} · {company.type}
                  </p>
                </div>
                <span style={{
                  fontFamily: "'Fira Code', monospace", fontSize: "0.72rem",
                  color: company.color, padding: "0.3rem 0.8rem",
                  border: `1px solid ${company.color}30`, borderRadius: 4,
                  background: `${company.color}10`,
                }}>{company.period}</span>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.92rem", lineHeight: 1.8, color: C.textSoft }}>
                {company.summary}
              </p>
            </div>

            {/* Project cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {company.projects.map((proj, i) => (
                <ProjectCard key={proj.name} project={proj} idx={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx, inView }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: C.card, borderRadius: 8,
        border: `1px solid ${hovered || open ? project.color : C.border}`,
        borderLeft: `3px solid ${project.color}`,
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(20px)",
        transitionDelay: `${idx * 0.1}s`,
        boxShadow: open ? `0 8px 40px rgba(0,0,0,0.35)` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          all: "unset", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.5rem 1.8rem", width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: C.text }}>{project.name}</h4>
          {project.live && <LiveBadge />}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "flex-end", maxWidth: 280 }}>
            {project.tags.slice(0, 3).map(t => <Tag key={t} label={t} color={project.color} />)}
            {project.tags.length > 3 && <Tag label={`+${project.tags.length - 3}`} color={C.muted} />}
          </div>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: "1rem",
            color: project.color, transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s", display: "inline-block", marginLeft: "0.3rem",
          }}>+</span>
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div style={{ padding: "0 1.8rem 1.8rem" }}>
          <div style={{ height: 1, background: C.border, marginBottom: "1.5rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {/* What is it */}
            <div>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.68rem", color: project.color, marginBottom: "0.5rem", letterSpacing: "0.08em" }}>
                // what is it?
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: C.textSoft }}>
                {project.whatDesc}
              </p>
            </div>
            {/* My role */}
            <div>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.68rem", color: project.color, marginBottom: "0.5rem", letterSpacing: "0.08em" }}>
                // my contribution
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", lineHeight: 1.75, color: C.textSoft }}>
                {project.myRoleDesc}
              </p>
            </div>
          </div>

          {/* All tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: project.url ? "1.2rem" : 0 }}>
            {project.tags.map(t => <Tag key={t} label={t} color={project.color} />)}
          </div>

          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem",
              fontWeight: 600, color: project.color, textDecoration: "none",
              padding: "0.6rem 1.2rem",
              border: `1px solid ${project.color}40`,
              background: `${project.color}10`,
              borderRadius: 4, transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = `${project.color}20`; }}
              onMouseLeave={e => { e.currentTarget.style.background = `${project.color}10`; }}
            >
              View Live App <span>→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════ */
function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} style={{ padding: "7rem 3rem", background: C.surface }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionLabel num="03" text="about me" />
        <SectionTitle>Who I Am</SectionTitle>
        <p style={{
          fontFamily: "'Outfit', sans-serif", fontSize: "1rem",
          lineHeight: 1.8, color: C.textSoft,
          maxWidth: 600, marginBottom: "3.5rem",
        }}>
          Beyond the code — the person, the journey, and where I'm headed next.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "5rem", alignItems: "start" }}>

          {/* Left: story */}
          <div style={{
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-24px)",
            transition: "all 0.7s ease",
          }}>
            {[
              {
                heading: "The Beginning",
                body: `I'm originally from Thiruvannamalai, Tamil Nadu. I completed my Bachelor of Science in Computer Science at Thiruvalluvar University (2015–2018), which gave me the foundations in programming and problem-solving I still rely on every day.`,
              },
              {
                heading: "First Role — Bloomlync",
                body: `My professional journey started at Bloomlync, where I joined as a Front-End Developer in September 2022. Over roughly 18 months, I worked on three products — Prism-Web, Prism-Terminal, and Mentor ERP — steadily taking on more ownership. The highlight was leading the Prism Account Platform from scratch, end-to-end, on my own.`,
              },
              {
                heading: "Current Role — Lapis Data Analytics",
                body: `Since November 2024, I've been a full-time Software Engineer at Lapis Data Analytics Pvt. Ltd. Here I work on more complex, data-driven products — including ChainEdge UI, a live blockchain analytics platform with real users. My focus has shifted toward precision: responsive behaviour, cross-device reliability, and clean frontend architecture.`,
              },
              {
                heading: "How I Work",
                body: `I'm detail-oriented and take ownership seriously. Whether I'm building a full product alone or jumping into a large codebase to fix one stubborn bug, I bring the same level of care. I enjoy collaborative teams, clear communication via Jira and stand-ups, and I write tests because I believe code you can't verify is code you can't trust.`,
              },
            ].map((item, i) => (
              <div key={item.heading} style={{ marginBottom: "2rem" }}>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.accent, marginBottom: "0.5rem" }}>
                  {item.heading}
                </h4>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", lineHeight: 1.85, color: C.textSoft }}>
                  {item.body}
                </p>
              </div>
            ))}

            {/* Contact */}
            <div style={{
              marginTop: "2.5rem", padding: "1.8rem",
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
            }}>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.68rem", color: C.accent, marginBottom: "1rem" }}>// get in touch</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  ["📞", "+91 8344781938", null],
                  ["✉️", "saravananvijay005@gmail.com", "mailto:saravananvijay005@gmail.com"],
                  ["💼", "LinkedIn", "https://www.linkedin.com/in/saravanan-s-aa257124a/"],
                  ["🐙", "GitHub — Saravananshankar98", "https://github.com/Saravananshankar98"],
                  ["📍", "Thiruvannamalai, Tamil Nadu, India", null],
                ].map(([icon, label, href]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                    <span style={{ fontSize: "1rem", minWidth: 22 }}>{icon}</span>
                    {href
                      ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: C.accent, textDecoration: "none", fontWeight: 500 }}>{label}</a>
                      : <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: C.textSoft }}>{label}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: timeline + learning */}
          <div style={{
            opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(24px)",
            transition: "all 0.7s 0.2s ease",
          }}>
            {/* Career Timeline */}
            <div style={{ marginBottom: "2.5rem" }}>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", color: C.gold, marginBottom: "1.2rem" }}>// career timeline</p>
              <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
                <div style={{ position: "absolute", left: 0, top: 6, bottom: 6, width: 1, background: `linear-gradient(180deg, ${C.accent}, ${C.gold}, ${C.green})` }} />
                {TIMELINE.map((t, i) => (
                  <div key={t.year} style={{ marginBottom: "1.4rem", position: "relative" }}>
                    <div style={{
                      position: "absolute", left: -22, top: 3,
                      width: 10, height: 10, borderRadius: "50%",
                      background: i === TIMELINE.length - 1 ? C.green : C.accent,
                      boxShadow: `0 0 8px ${i === TIMELINE.length - 1 ? C.green : C.accent}`,
                      border: `2px solid ${C.bg}`,
                    }} />
                    <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", color: C.accent, marginBottom: "0.2rem" }}>{t.year}</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: C.text }}>{t.label}</div>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.78rem", color: C.muted }}>{t.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div style={{
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: "1.8rem",
            }}>
              <p style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", color: C.gold, marginBottom: "1.3rem" }}>// currently learning</p>
              {LEARNING.map(l => (
                <div key={l.name} style={{ marginBottom: "1.3rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.95rem" }}>{l.icon}</span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: C.text }}>{l.name}</span>
                    </div>
                    <span style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.7rem", color: C.accent }}>{l.progress}%</span>
                  </div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: C.muted, marginBottom: "0.5rem" }}>{l.desc}</div>
                  <div style={{ height: 4, background: C.border, borderRadius: 10, overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: inView ? `${l.progress}%` : "0%",
                      background: `linear-gradient(90deg, ${C.accent}, ${C.gold})`,
                      borderRadius: 10, transition: "width 1.4s ease",
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{
      background: C.bg, borderTop: `1px solid ${C.border}`,
      padding: "3rem",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: "1.5rem",
    }}>
      <div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.accent, marginBottom: "0.4rem" }}>{"<SS />"}</div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: C.muted }}>Frontend React Developer · Tamil Nadu, India</div>
      </div>
      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: "0.75rem", color: C.muted, textAlign: "center" }}>
        saravananvijay005@gmail.com · +91 8344781938
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {[
          ["LinkedIn", "https://www.linkedin.com/in/saravanan-s-aa257124a/"],
          ["GitHub", "https://github.com/Saravananshankar98"],
          ["Email", "mailto:saravananvijay005@gmail.com"],
        ].map(([label, href]) => (
          <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{
            fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem",
            color: C.muted, textDecoration: "none",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = C.accent}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}
          >{label}</a>
        ))}
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════ */
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const ids = ["hero", "skills", "experience", "about"];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; color: ${C.text}; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border}; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.accent}; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 6px currentColor; }
          50%      { box-shadow: 0 0 14px currentColor; }
        }
        @media (max-width: 900px) {
          nav { padding: 1rem 1.5rem !important; }
          nav div:last-child a:not(:last-child) { display: none; }
          section { padding: 5rem 1.5rem !important; }
          .exp-grid, .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: C.bg, minHeight: "100vh", position: "relative" }}>
        <GridLines />
        <GlowCursor />
        <Nav active={activeSection} />
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Footer />
      </div>
    </>
  );
}
