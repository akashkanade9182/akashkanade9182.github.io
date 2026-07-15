import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import profileImage from "./Pages/Akash-profile-photo.png";
import resumeFile from "./download/Akash_Kanade_Resume.pdf";

const CONTACT_ENDPOINT = "https://formsubmit.co/ajax/akashkanade235@gmail.com";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: resumeFile, isResume: true },
];

const quickStats = [
  { value: "2+", label: "Years of experience" },
  { value: "4", label: "Product teams contributed to" },
  { value: "10+", label: "Production modules delivered" },
  { value: "OCR + Automation", label: "Specialized product work" },
];

const experience = [
  {
    company: "SmartGenesis.io",
    role: "Full Stack Developer",
    duration: "Jan 2025 - Present",
    summary:
      "Building enterprise workshop software for Germany with inspection workflows, OCR-assisted recognition, reporting, and service operations.",
    highlights: [
      "Developed Ferrari workshop management modules for customers, vehicles, reporting, and service estimation.",
      "Built OCR-based vehicle part recognition and mapping workflows.",
      "Created interactive vehicle inspection experiences with advanced frontend tooling.",
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
      "Interactive inspection with animation and isolation mode",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "OCR", "Workflow Tools"],
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
    items: ["Electron", "OCR", "Git", "Postman", "Workflow Design"],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Ownership",
      "Adaptability",
      "Time Management",
    ],
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
  "Interactive product experiences and workflow design",
  "OCR integration and workflow automation",
  "Database design, APIs, and reporting systems",
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

const nameReveal = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.08,
    },
  },
};

const nameLine = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: "easeOut" },
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
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleResumeClick = (event) => {
    event.preventDefault();

    const newTab = window.open(resumeFile, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.opener = null;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = resumeFile;
    downloadLink.download = "Akash_Kanade_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (contactStatus) {
      setContactStatus(null);
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setContactStatus(null);

    try {
      const formData = new FormData();
      formData.append("name", contactForm.name);
      formData.append("email", contactForm.email);
      formData.append("message", contactForm.message);
      formData.append("_subject", `Portfolio message from ${contactForm.name}`);
      formData.append("_template", "table");
      formData.append("_captcha", "false");

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message right now.");
      }

      setContactStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <div className="page-grid" />

      <div className="header-shell">
        <header className="site-header">
          <a className="brand-mark" href="#home">
            <span>AK</span>
            <div>
              <strong>Akash Kanade</strong>
              <small>Full Stack Developer</small>
            </div>
          </a>

          <nav className="main-nav" aria-label="Primary navigation">
            {navLinks.map((link) =>
              link.isResume ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleResumeClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Akash_Kanade_Resume.pdf"
                >
                  {link.label}
                </a>
              ) : (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </header>
      </div>

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
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Full Stack Developer
            </motion.span>
            <motion.h1
              className="hero-title"
              variants={nameReveal}
            >
              <motion.span className="hero-name-line" variants={nameLine}>
                Akash
              </motion.span>
              <motion.span className="hero-name-line hero-name-accent" variants={nameLine}>
                Kanade
              </motion.span>
            </motion.h1>
            <motion.p
              className="hero-intro hero-bio-inline"
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
            >
              Full Stack Developer with 2+ years of experience building enterprise
              web applications, dashboards, workflow systems, OCR-driven
              automation, and reporting tools using React, Next.js, Node.js,
              and MongoDB.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <a
                className="primary-btn"
                href={resumeFile}
                onClick={handleResumeClick}
                target="_blank"
                rel="noreferrer"
                download="Akash_Kanade_Resume.pdf"
              >
                <FiDownload /> View Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-visual-stack">
              <div className="portrait-card">
                <div className="portrait-ring" />
                <div className="hero-orbit hero-orbit-one" />
                <div className="hero-orbit hero-orbit-two" />
                <img src={profileImage} alt="Akash Kanade" />
                <div className="floating-panel">
                  <span>Core Stack</span>
                  <strong>React, Next.js, Node.js, MongoDB</strong>
                </div>
                <div className="hero-stamp">Full Stack Developer</div>
              </div>

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
                I&apos;ve worked across marketing automation, workshop management, cinema systems,
                reporting tools, invoice workflows, and interactive product experiences. That
                means I&apos;m comfortable moving from UI to API to database design and into
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
                <li>I&apos;m always learning and adapting to new technologies quickly.</li>
              </ul>
            </motion.article>
          </div>

          <div className="experience-block">
            <SectionTitle
              eyebrow="Experience"
              title="Career progression across product engineering, reporting, and automation."
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
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionTitle
            eyebrow="Skills"
            title="Technical skills supported by strong communication and collaboration."
            description="This section covers both technical and soft skills, including frontend, backend, databases, product tooling, and the way I work with teams."
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

        <section className="content-section" id="projects">
          <SectionTitle
            eyebrow="Project Highlights"
            title="Four project highlights that reflect the systems I enjoy building."
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

        <section className="content-section contact-section" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Let&apos;s build something useful, polished, and reliable."
            description="If you&apos;re hiring for a full stack role or want help on a product-heavy web project, I&apos;d be happy to connect."
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
              <span className="contact-kicker">Direct Contact</span>
              <h3>Reach out directly</h3>
              <p className="contact-copy-intro">
                If you want to discuss a role, a product build, or freelance work, these are the
                fastest ways to reach me. I usually reply through my main Gmail inbox.
              </p>

              <div className="contact-links">
                <a className="contact-link-card" href="mailto:akashkanade235@gmail.com">
                  <FiMail />
                  <span>akashkanade235@gmail.com</span>
                </a>
                <a className="contact-link-card" href="tel:+918668696097">
                  <FiPhone />
                  <span>+91 86686 96097</span>
                </a>
                <a
                  className="contact-link-card"
                  href="https://www.linkedin.com/in/akash-kanade-b0ba8a421"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  className="contact-link-card"
                  href="https://github.com/akashkanade9182"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                  <span>GitHub Profile</span>
                </a>
              </div>

              <div className="contact-highlights">
                <div className="contact-highlight">
                  <span>Best for</span>
                  <strong>Hiring, freelance work, and collaboration</strong>
                </div>
                <div className="contact-highlight">
                  <span>Location</span>
                  <strong>
                    <FiMapPin /> Solapur, India
                  </strong>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <span>Message Me</span>
              <h3>Write to me and send the message directly from the website.</h3>
              <p>Fill in the form and it will be sent directly to `akashkanade235@gmail.com`.</p>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                  required
                />

                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="your@email.com"
                  required
                />

                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Tell me about your project or role"
                  rows="5"
                  required
                />

                <div className="contact-form-actions">
                  <button type="submit" className="primary-btn contact-submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>

                  {contactStatus ? (
                    <p className={`contact-status contact-status-${contactStatus.type}`}>
                      {contactStatus.message}
                    </p>
                  ) : null}
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

















