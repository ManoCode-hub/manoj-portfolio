import { useEffect, useState } from "react";
import "./App.css";

/* =====================================
   CONSTANTS
===================================== */

const FULL_NAME = "Manoj Marianeason";

function App() {
  /* =====================================
     NAVIGATION
  ===================================== */

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================
     TYPING ANIMATION
  ===================================== */

  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 120;
    const pauseAfterTyping = 1500;
    const pauseAfterDeleting = 500;

    let timeout;

    if (!isDeleting && typedName === FULL_NAME) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterTyping);
    } else if (isDeleting && typedName === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseAfterDeleting);
    } else {
      timeout = setTimeout(() => {
        const nextLength = isDeleting
          ? typedName.length - 1
          : typedName.length + 1;

        setTypedName(FULL_NAME.substring(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedName, isDeleting]);

  /* =====================================
     CONTACT FORM STATE
  ===================================== */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =====================================
     CONTACT INPUT CHANGE
  ===================================== */

  const handleContactChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (formStatus) {
      setFormStatus("");
    }
  };

  /* =====================================
     NETLIFY CONTACT SUBMISSION
  ===================================== */

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSubmitting(true);
    setFormStatus("");

    try {
      const formDataToSend = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataToSend).toString(),
      });

      if (!response.ok) {
        throw new Error(
          `Netlify form submission failed with status ${response.status}`
        );
      }

      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio">

      {/* =================================
          NAVBAR
      ================================= */}

      <nav className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          Mano<span>.</span>
        </a>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* =================================
          HOME / HERO
      ================================= */}

      <section className="hero section" id="home">

        <div className="hero-content">

          <p className="welcome-text">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            <span className="typing-name">
              {typedName}
            </span>

            <span
              className="typing-cursor"
              aria-hidden="true"
            ></span>
          </h1>

          <h2>
            Software Engineer & Python Developer
          </h2>

          <p className="hero-description">
            I develop practical and scalable web applications using
            Python, Flask, Django, React, REST APIs and modern
            database technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Projects
            </a>

            <a
              href="/Manoj-CV.pdf"
              className="secondary-btn"
              download="Manoj-Marianeason-CV.pdf"
            >
              Download CV
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/ManoCode-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="profile-photo-wrapper">

            <img
              src="/manoj-profile.png"
              alt="Manoj Marianeason"
              className="profile-photo"
            />

            <div
              className="profile-overlay"
              aria-hidden="true"
            ></div>

          </div>

        </div>

      </section>

      {/* =================================
          ABOUT
      ================================= */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>Get to know me</p>

            <h2>
              About <span>Me</span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-card">

              <h3>
                Software Engineer
              </h3>

              <p>
                I am a Software Engineering professional with
                hands-on experience in Python, Flask, Django,
                React, REST APIs and database-driven web
                application development.
              </p>

              <p>
                I enjoy developing practical software solutions,
                building full-stack applications, working with
                databases and solving real-world problems through
                technology.
              </p>

              <p>
                I am continuously improving my skills in modern
                web development, software engineering,
                artificial intelligence and machine learning.
              </p>

            </div>

            <div className="about-details">

              <div className="detail-card">
                <span>Name</span>
                <strong>Manoj Marianeason</strong>
              </div>

              <div className="detail-card">
                <span>Location</span>
                <strong>Jaffna, Sri Lanka</strong>
              </div>

              <div className="detail-card">
                <span>Specialization</span>
                <strong>Software Engineering</strong>
              </div>

              <div className="detail-card">
                <span>Focus</span>
                <strong>Python & Web Development</strong>
              </div>

              <div className="detail-card">
                <span>Availability</span>
                <strong>Internship / Junior Opportunities</strong>
              </div>

              <div className="detail-card">
                <span>Languages</span>
                <strong>English & Tamil</strong>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          SKILLS
      ================================= */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>
              Technologies I work with
            </p>

            <h2>
              My <span>Skills</span>
            </h2>

          </div>

          <div className="skills-grid">

            <div className="skill-card">

              <div className="skill-icon">
                &lt;/&gt;
              </div>

              <h3>
                Backend Development
              </h3>

              <div className="skill-tags">
                <span>Python</span>
                <span>Flask</span>
                <span>Django</span>
                <span>REST APIs</span>
              </div>

            </div>

            <div className="skill-card">

              <div className="skill-icon">
                UI
              </div>

              <h3>
                Frontend Development
              </h3>

              <div className="skill-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>

            </div>

            <div className="skill-card">

              <div className="skill-icon">
                DB
              </div>

              <h3>
                Databases
              </h3>

              <div className="skill-tags">
                <span>PostgreSQL</span>
                <span>MySQL</span>
              </div>

            </div>

            <div className="skill-card">

              <div className="skill-icon">
                DEV
              </div>

              <h3>
                Development Tools
              </h3>

              <div className="skill-tags">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>API Integration</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          EXPERIENCE
      ================================= */}

      <section
        className="section experience-section"
        id="experience"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>
              My professional journey
            </p>

            <h2>
              Work <span>Experience</span>
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-card">

              <div className="timeline-top">

                <div>
                  <h3>Intern Python Developer</h3>
                  <h4>Kanda-IT</h4>
                </div>

                <span className="date">
                  2024 - 2025
                </span>

              </div>

              <ul>

                <li>
                  Developed web applications using Python and Flask.
                </li>

                <li>
                  Worked on ERP system integration using Python
                  and REST APIs.
                </li>

                <li>
                  Developed API-based communication between ERP
                  modules and external applications.
                </li>

                <li>
                  Worked with databases and data processing to
                  support application functionality.
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          PROJECTS
      ================================= */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>
              Some of my work
            </p>

            <h2>
              Featured <span>Projects</span>
            </h2>

          </div>

          <div className="projects-grid">

            {/* NEXTUP */}

            <article className="project-card">

              <div className="project-number">
                01
              </div>

              <h3>
                NextUp Educational Chatbot
              </h3>

              <p>
                Developed an educational guidance chatbot designed
                to help students identify suitable study paths and
                plan their future academic goals. The application
                uses a React frontend, Django backend and PostgreSQL
                database with a custom question-and-answer dataset.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Django</span>
                <span>Python</span>
                <span>PostgreSQL</span>
                <span>Machine Learning</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/ManoCode-hub/NextUp_ChatBot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>

              </div>

            </article>

            {/* WEATHER */}

            <article className="project-card">

              <div className="project-number">
                02
              </div>

              <h3>
                Weather Prediction Application
              </h3>

              <p>
                Developed a weather prediction web application
                using Python and Flask. Processed weather data
                and applied machine-learning techniques to
                generate predictions.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Flask</span>
                <span>Machine Learning</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/ManoCode-hub/WeatherAPP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>

              </div>

            </article>

            {/* PORTFOLIO */}

            <article className="project-card">

              <div className="project-number">
                03
              </div>

              <h3>
                Personal Developer Portfolio
              </h3>

              <p>
                Designed and developed a responsive developer
                portfolio using React and deployed it using
                GitHub and Netlify.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Netlify</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/ManoCode-hub/manoj-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>

              </div>

            </article>

          </div>

        </div>

      </section>

      {/* =================================
          EDUCATION
      ================================= */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>
              Academic background
            </p>

            <h2>
              My <span>Education</span>
            </h2>

          </div>

          <div className="education-grid">

            <div className="education-card">

              <div className="education-icon">
                🎓
              </div>

              <div>
                <h3>
                  BEng (Hons) Software Engineering
                </h3>

                <p>
                  ESOFT Metro Campus, Jaffna
                </p>
              </div>

            </div>

            <div className="education-card">

              <div className="education-icon">
                🎓
              </div>

              <div>
                <h3>
                  Higher National Diploma in Software Engineering
                </h3>

                <p>
                  BCAS Campus, Jaffna
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          CONTACT
      ================================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="section-container">

          <div className="section-heading">

            <p>
              Let's work together
            </p>

            <h2>
              Contact <span>Me</span>
            </h2>

          </div>

          <div className="contact-wrapper">

            {/* =================================
                CONTACT INFORMATION
            ================================= */}

            <div className="contact-content">

              <h3>
                Have an opportunity or project?
              </h3>

              <p>
                I am interested in Software Engineering,
                Python Developer, Full-Stack Development
                and IT opportunities. Feel free to send me
                a message and I will get back to you as soon
                as possible.
              </p>

              <div className="contact-list">

                {/* EMAIL */}

                <a
                  href="mailto:marianeasonmanoj968@gmail.com"
                  className="contact-item"
                >

                  <span>
                    Email
                  </span>

                  <strong>
                    marianeasonmanoj968@gmail.com
                  </strong>

                </a>

                {/* =================================
                    PHONE NUMBERS
                ================================= */}

                <div className="contact-item">

                  <span>
                    Phone
                  </span>

                  <strong className="phone-numbers">

                    <a href="tel:+94766450902">
                      +94 76 645 0902
                    </a>

                    <span className="phone-divider">
                      /
                    </span>

                    <a href="tel:+94726050902">
                      +94 72 605 0902
                    </a>

                  </strong>

                </div>

                {/* LOCATION */}

                <div className="contact-item">

                  <span>
                    Location
                  </span>

                  <strong>
                    Jaffna, Sri Lanka
                  </strong>

                </div>

                {/* GITHUB */}

                <a
                  href="https://github.com/ManoCode-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >

                  <span>
                    GitHub
                  </span>

                  <strong>
                    ManoCode-hub
                  </strong>

                </a>

              </div>

            </div>

            {/* =================================
                NETLIFY CONTACT FORM
            ================================= */}

            <div className="contact-form-wrapper">

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="contact-form"
                onSubmit={handleContactSubmit}
              >

                <input
                  type="hidden"
                  name="form-name"
                  value="contact"
                />

                {/* HONEYPOT */}

                <p className="hidden-field">

                  <label>
                    Do not fill this field:

                    <input
                      type="text"
                      name="bot-field"
                      tabIndex="-1"
                      autoComplete="off"
                    />

                  </label>

                </p>

                {/* NAME + EMAIL */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleContactChange}
                      autoComplete="name"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="email">
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleContactChange}
                      autoComplete="email"
                      required
                    />

                  </div>

                </div>

                {/* SUBJECT */}

                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Job opportunity, project, collaboration..."
                    value={formData.subject}
                    onChange={handleContactChange}
                    required
                  />

                </div>

                {/* MESSAGE */}

                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                  ></textarea>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>

                {/* SUCCESS */}

                {formStatus === "success" && (

                  <div
                    className="form-message success-message"
                    role="status"
                    aria-live="polite"
                  >
                    ✓ Thank you! Your message has been sent successfully.
                  </div>

                )}

                {/* ERROR */}

                {formStatus === "error" && (

                  <div
                    className="form-message error-message"
                    role="alert"
                    aria-live="assertive"
                  >
                    Something went wrong. Please try again or email me directly.
                  </div>

                )}

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =================================
          FOOTER
      ================================= */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-logo">
            Mano<span>.</span>
          </div>

          <p>
            © 2026 Manoj Marianeason. Built with React.
          </p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;