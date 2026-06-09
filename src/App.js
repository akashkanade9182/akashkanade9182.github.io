import "./App.css";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import profileImage from "./Pages/Akash-profile-photo.png";
import resumeFile from "./download/Akash-Kanade-Resume.pdf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const quickStats = [
  { value: "2+", label: "Years of experience" },
  { value: "4", label: "Product teams contributed to" },
  { value: "10+", label: "Production modules delivered" },
  { value: "3D + OCR", label: "Specialized product work" },
];

const experience = [
  {
    company: "SmartGenesis.io",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Present",
    summary:
      "Building enterprise workshop software for Germany with 3D inspection, OCR-assisted recognition, reporting, and service workflows.",
    highlights: [
      "Developed Ferrari workshop management modules for customers, vehicles, reporting, and service estimation.",
      "Built OCR-based vehicle part recognition and mapping workflows.",
      "Created interactive 3D vehicle inspection experiences using React Three Fiber and Three.js.",
      "Designed REST APIs and MongoDB data models for scalable backend flows.",
    ],
  },
  {
    company: "Telebu Communications",
    role: "Jr Full Stack Developer",
    duration: "Mar 2024 - Mar 2025",
    summary:
      "Worked on cinema POS products, dashboards, reporting systems, and production support for live business operations.",
    highlights: [
      "Developed cinema POS systems and internal dashboards.",
      "Built transaction reports and PDF generation modules.",
      "Implemented REST APIs and backend features.",
      "Resolved production issues and improved product reliability.",
    ],
  },
  {
    company: "Binarynumbers.io",
    role: "Jr Full Stack Developer",
    duration: "Aug 2023 - Feb 2024",
    summary:
      "Contributed across frontend and backend product work with API integrations, bug fixing, and database operations.",
    highlights: [
      "Delivered frontend and backend features for active products.",
      "Worked on third-party API integrations and database operations.",
      "Resolved bugs and production issues across modules.",
    ],
  },
];

const featuredProjects = [
  {
    title: "Ferrari Workshop Management System",
    tag: "Enterprise Platform",
    description:
      "A complex service workflow platform focused on inspections, part mapping, damage assessment, and reporting for workshop teams.",
    points: [
      "OCR-based assembly diagram recognition",
      "Click-to-highlight part mapping",
      "Damage list and service estimation workflows",
      "Interactive 3D inspection with animation and isolation mode",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "React Three Fiber", "Three.js", "OCR"],
  },
  {
    title: "TABI Marketing Automation Platform",
    tag: "Automation Product",
    description:
      "A marketing automation product with audience segmentation and campaign tooling designed for large-scale customer data.",
    points: [
      "Dynamic email template builder",
      "Campaign scheduling and notifications",
      "Segmentation across 1M+ records",
      "Advanced customer filters by location, language, genre, and history",
    ],
    stack: ["React.js", "Next.js", "Node.js", "MongoDB", "SQL"],
  },
  {
    title: "Cinema POS & Management System",
    tag: "Retail Operations",
    description:
      "A live operations suite for ticketing, scheduling, transactions, food ordering, and reporting used by cinema teams.",
    points: [
      "Ticket booking and movie scheduling",
      "Food and beverage ordering module",
      "Offers, templates, and transaction reports",
      "Built for Star Cinema, MIF, Epix Cinema, and IJPT",
    ],
    stack: ["React.js", "Node.js", "Express.js", "REST APIs", "PDF Reporting"],
  },
  {
    title: "Applause Vendor & Invoice Management",
    tag: "Workflow System",
    description:
      "A workflow-driven management product for vendor onboarding, verification, invoice operations, and approvals.",
    points: [
      "Vendor onboarding and email verification",
      "Invoice creation and approval flow",
      "Database optimization with Prisma ORM and MySQL",
      "Focused on clarity, performance, and operational accuracy",
    ],
    stack: ["Vue.js", "Node.js", "Prisma ORM", "MySQL", "Workflow Automation"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Material UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "PDF Generation"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQL", "Prisma ORM"],
  },
  {
    title: "Specialized",
    items: ["React Three Fiber", "Three.js", "Electron", "OCR", "Git", "Postman"],
  },
];

const education = [
  {
    title: "Full Stack Web Development",
    place: "Masai School",
    meta: "Completed in 2022",
  },
  {
    title: "B.Tech in Mechanical Engineering",
    place: "N. B. Navale Sinhgad College of Engineering",
    meta: "Graduated in 2019",
  },
];

const strengths = [
  "Full stack development for real business products",
  "3D visualization and interactive product experiences",
  "OCR integration and workflow automation",
  "Database design, APIs, and reporting systems",
];

const personalProjects = [
  {
    title: "GitHub",
    value: "github.com/akashkanade9182",
    href: "https://github.com/akashkanade9182",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/akash-kanade-59ab8218b",
    href: "https://www.linkedin.com/in/akash-kanade-59ab8218b",
  },
  {
    title: "Email",
    value: "akashkanade235@gmail.com",
    href: "mailto:akashkanade235@gmail.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

const staggerBlock = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const marqueeItems = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "Three.js",
  "React Three Fiber",
  "OCR",
  "Workflow Automation",
  "REST APIs",
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <div className="page-grid" />

      <header className="site-header">
        <a className="brand-mark" href="#home">
          <span>AK</span>
          <div>
            <strong>Akash Kanade</strong>
            <small>Full Stack Developer</small>
          </div>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href={resumeFile} target="_blank" rel="noreferrer">
          Resume
        </a>
      </header>

      <main>
        <section className="hero-section" id="home">
          <motion.div
            className="hero-copy"
            variants={staggerBlock}
            initial="hidden"
            animate="show"
          >
            <motion.span
              className="hero-badge"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Available for impactful full stack roles
            </motion.span>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Building polished web products, workflow systems, and immersive 3D experiences.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              I’m Akash Mahadeo Kanade, a full stack developer from Solapur, India with 2+ years
              of experience across enterprise web apps, POS systems, reporting, automation, and
              React Three Fiber products.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <a className="primary-btn" href="#projects">
                View work <FiArrowRight />
              </a>
              <a className="secondary-btn" href={resumeFile} target="_blank" rel="noreferrer">
                <FiDownload /> Download resume
              </a>
            </motion.div>

            <motion.div
              className="hero-meta"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div>
                <FiMail />
                <a href="mailto:akashkanade235@gmail.com">akashkanade235@gmail.com</a>
              </div>
              <div>
                <FiPhone />
                <a href="tel:+918668696097">+91 86686 96097</a>
              </div>
              <div>
                <FiMapPin />
                <span>Solapur, India</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-scroll-cue"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span>Scroll to explore</span>
              <div className="scroll-line" />
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <div className="portrait-card">
              <div className="portrait-ring" />
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />
              <img src={profileImage} alt="Akash Kanade" />
              <div className="floating-panel">
                <span>Core Stack</span>
                <strong>React, Next.js, Node.js, MongoDB</strong>
              </div>
              <div className="hero-stamp">Full Stack + 3D</div>
            </div>
          </motion.div>
        </section>

        <section className="marquee-section" aria-label="Tech highlights">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="stats-section" aria-label="Quick highlights">
          {quickStats.map((item, index) => (
            <motion.article
              key={item.label}
              className="stat-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.article>
          ))}
        </section>

        <section className="content-section about-section" id="about">
          <SectionTitle
            eyebrow="About Me"
            title="A product-minded developer who enjoys solving hard workflow problems."
            description="My background blends practical engineering thinking with modern product development. I care about clean interfaces, real business value, and systems that stay reliable in production."
          />

          <div className="about-grid">
            <motion.article
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3>What I bring</h3>
              <p>
                I’ve worked across marketing automation, workshop management, cinema systems,
                reporting tools, invoice workflows, and interactive 3D product experiences. That
                means I’m comfortable moving from UI to API to database design and into
                specialized domains when the product needs it.
              </p>
            </motion.article>

            <motion.article
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h3>How I work</h3>
              <ul className="feature-list">
                <li>I focus on scalable features, not just screens.</li>
                <li>I enjoy turning complex flows into simple user journeys.</li>
                <li>I value production stability, performance, and maintainable code.</li>
                <li>I’m always learning and adapting to new technologies quickly.</li>
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="content-section" id="experience">
          <SectionTitle
            eyebrow="Experience"
            title="Hands-on delivery across product engineering, reporting, automation, and 3D tools."
            description="A quick view of the teams and responsibilities that shaped my current skill set."
          />

          <div className="timeline">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.duration}`}
                className="timeline-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="timeline-meta">
                  <span>{item.duration}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <div className="timeline-body">
                  <p>{item.summary}</p>
                  <ul className="feature-list">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionTitle
            eyebrow="Project Highlights"
            title="Work that reflects the kind of systems I enjoy building."
            description="These highlights come directly from my recent experience and show both technical depth and business impact."
          />

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="project-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="project-head">
                  <span>{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="feature-list">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chip-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionTitle
            eyebrow="Skills"
            title="A strong full stack foundation with room for specialized product work."
            description="I’m comfortable across frontend, backend, database, and niche technical areas like OCR and 3D rendering."
          />

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                className="skill-group"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="split-grid">
            <motion.article
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <h3>Education</h3>
              <div className="stack-list">
                {education.map((item) => (
                  <div key={item.title} className="stack-list-item">
                    <strong>{item.title}</strong>
                    <span>{item.place}</span>
                    <small>{item.meta}</small>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              className="glass-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <h3>Core strengths</h3>
              <ul className="feature-list">
                {strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something useful, polished, and reliable."
            description="If you’re hiring for a full stack role or want help on a product-heavy web project, I’d be happy to connect."
          />

          <div className="contact-panel">
            <motion.div
              className="contact-copy"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <h3>Reach out directly</h3>
              <div className="contact-links">
                <a href="mailto:akashkanade235@gmail.com">
                  <FiMail /> akashkanade235@gmail.com
                </a>
                <a href="tel:+918668696097">
                  <FiPhone /> +91 86686 96097
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-kanade-59ab8218b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin /> LinkedIn Profile
                </a>
                <a href="https://github.com/akashkanade9182" target="_blank" rel="noreferrer">
                  <FiGithub /> GitHub Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-cards"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              {personalProjects.map((item) => (
                <a key={item.title} className="mini-card" href={item.href} target="_blank" rel="noreferrer">
                  <span>{item.title}</span>
                  <strong>{item.value}</strong>
                  <FiExternalLink />
                </a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
