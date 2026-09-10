import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Mano<span>.</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="welcome-text">
            Hello, I'm
          </p>

          <h1>
            Manoj Marianeason
          </h1>

          <h2>
            Software Engineer & Python Developer
          </h2>

          <p className="hero-description">
            I develop practical web applications using Python,
            Flask, Django, React, REST APIs and modern database
            technologies.
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
              download
            >
              Download CV
            </a>

          </div>

        </div>

        <div className="hero-image">

          <div className="image-circle">
            <span>MM</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;