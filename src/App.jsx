import './App.css'

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Ɛscanor<span>.</span></div>

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
          <p className="eyebrow">HELLO, I'M</p>

          <h1>
            Ɛscanor
            <span>.</span>
          </h1>

          <h2>Developer & Problem Solver</h2>

          <p className="hero-text">
            I build websites, applications and digital tools while constantly
            learning new technologies and turning ideas into working projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code">
            <p>
              <span className="purple">const</span>{' '}
              <span className="blue">developer</span> = {'{'}
            </p>

            <p className="indent">
              name: <span className="green">"Ɛscanor"</span>,
            </p>

            <p className="indent">
              focus: <span className="green">"Web Development"</span>,
            </p>

            <p className="indent">
              learning: <span className="green">true</span>,
            </p>

            <p className="indent">
              coffee: <span className="green">"always"</span>
            </p>

            <p>{'}'}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>Who I am</h2>

        <p className="section-text">
          I'm a developer who enjoys building things and figuring out how they
          work. I'm currently growing my skills in JavaScript, React and
          modern web development while working on real projects.
        </p>

        <p className="section-text">
          I enjoy solving problems, experimenting with technology and turning
          ideas into useful digital experiences.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-label">02 — SKILLS</p>

        <h2>What I work with</h2>

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

        <h2>Things I've built</h2>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-number">01</div>

            <h3>My Portfolio</h3>

            <p>
              A personal portfolio website built with React to showcase my
              skills, projects and experience.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Vite</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">02</div>

            <h3>Entity 4.5</h3>

            <p>
              An AI-powered Telegram bot project focused on conversational AI,
              automation and useful digital tools.
            </p>

            <div className="project-tech">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>AI</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">03</div>

            <h3>NullSec Kit</h3>

            <p>
              A web-based security toolkit interface designed around useful
              reconnaissance and web analysis utilities.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a href="#" className="project-link">
              View Project →
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">04 — CONTACT</p>

        <h2>Let's build something.</h2>

        <p>
          Have an idea, project or something you want to build? Let's talk.
        </p>

        <a href="mailto:your@email.com" className="primary-btn">
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Ɛscanor. Built with React.</p>

        <div>
          <a href="#">GitHub</a>
          <a href="#">Telegram</a>
        </div>
      </footer>
    </main>
  )
}

export default App
