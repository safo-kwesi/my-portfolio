import './App.css'

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          Kwesi<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">UPCOMING DEVELOPER</p>

          <h1>
            Kwesi<span>.</span>
          </h1>

          <h2>Learning. Building. Improving.</h2>

          <p className="hero-text">
            I'm an upcoming developer passionate about technology,
            programming and building useful things. I'm currently
            developing my skills and turning what I learn into real
            projects.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-btn">
              About Me
            </a>

            <a
              href="https://github.com/safo-kwesi"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Developer Card */}
        <div className="hero-card">
          <div className="card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code">
            <p>
              <span className="purple">const</span>{' '}
              <span className="blue">kwesi</span> = {'{'}
            </p>

            <p className="indent">
              role: <span className="green">"Upcoming Developer"</span>,
            </p>

            <p className="indent">
              learning: <span className="green">true</span>,
            </p>

            <p className="indent">
              building: <span className="green">true</span>,
            </p>

            <p className="indent">
              improving: <span className="green">"every day"</span>
            </p>

            <p>{'}'}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>I'm still becoming.</h2>

        <p className="section-text">
          I'm currently learning and developing my skills in modern
          web development. Rather than claiming to know everything,
          I'm focused on learning the fundamentals, building projects
          and improving with every step.
        </p>

        <p className="section-text">
          This portfolio is part of that journey — a place to document
          what I'm learning and what I build along the way.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>What I'm learning</h2>

        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">Git</div>
          <div className="skill">GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">03 — PROJECTS</p>

        <h2>Projects are coming.</h2>

        <p className="section-text">
          I'm currently learning and building. As I complete projects,
          I'll add them here with their source code and live demos.
        </p>

        <div className="coming-soon">
          <div className="coming-icon">
            &lt;/&gt;
          </div>

          <div>
            <span className="coming-label">CURRENT STATUS</span>
            <h3>Building in progress</h3>
            <p>
              New projects will appear here as I build and complete them.
            </p>
          </div>

          <span className="status-dot"></span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">04 — CONNECT</p>

        <h2>Let's connect.</h2>

        <p>
          You can find my work on GitHub or reach me through Telegram.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/safo-kwesi"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            GitHub
          </a>

          <a
            href="https://t.me/Sage_services"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kwesi. Still learning. Still building.</p>

        <div>
          <a
            href="https://github.com/safo-kwesi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://t.me/Sage_services"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
