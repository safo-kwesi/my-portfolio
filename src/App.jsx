import './App.css'

function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Kwesi<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">WEB & BOT DEVELOPER</p>

          <h1>
            I build digital tools that help businesses <span>work better.</span>
          </h1>

          <p className="hero-text">
            I specialise in web development and bot development,
            creating practical digital solutions designed to help
            businesses manage, improve and grow their operations.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Conversation
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            Available for new projects
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
              <span className="blue">solution</span> = {'{'}
            </p>

            <p className="indent">
              web: <span className="green">true</span>,
            </p>

            <p className="indent">
              bots: <span className="green">true</span>,
            </p>

            <p className="indent">
              businessFocused: <span className="green">true</span>,
            </p>

            <p className="indent">
              goal: <span className="green">"solve real problems"</span>
            </p>

            <p>{'}'}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-heading">
          <p className="section-label">01 — ABOUT</p>
          <h2>A developer focused on useful solutions.</h2>
        </div>

        <div className="about-content">
          <p>
            I'm Kwesi, an upcoming developer focused on building
            websites and bots that have a practical purpose.
          </p>

          <p>
            I believe technology should make things easier, not more
            complicated. Whether you need a professional web presence
            or a bot to automate parts of your business, I focus on
            understanding the problem first and then building around it.
          </p>

          <p>
            I'm continuously learning, improving and expanding what I
            can build while keeping the goal simple: create useful
            digital products that solve real problems.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="section-heading">
          <p className="section-label">02 — SERVICES</p>
          <h2>What I can build for you.</h2>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-number">01</div>

            <h3>Web Development</h3>

            <p>
              Professional websites and web interfaces designed to
              present your business clearly and give your customers
              a better digital experience.
            </p>

            <div className="service-tags">
              <span>Websites</span>
              <span>Landing Pages</span>
              <span>Web Apps</span>
            </div>
          </article>

          <article className="service-card">
            <div className="service-number">02</div>

            <h3>Bot Development</h3>

            <p>
              Custom bots that can automate repetitive tasks, interact
              with customers and help manage parts of your business.
            </p>

            <div className="service-tags">
              <span>Telegram</span>
              <span>WhatsApp</span>
              <span>Automation</span>
            </div>
          </article>

          <article className="service-card">
            <div className="service-number">03</div>

            <h3>Business Solutions</h3>

            <p>
              Digital tools built around specific problems your business
              is facing, with the aim of making everyday processes simpler.
            </p>

            <div className="service-tags">
              <span>Automation</span>
              <span>Tools</span>
              <span>Solutions</span>
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p className="section-label">03 — SKILLS</p>
          <h2>Tools I work with.</h2>
        </div>

        <div className="skills-grid">
          <div className="skill">
            <span>01</span>
            <strong>HTML & CSS</strong>
          </div>

          <div className="skill">
            <span>02</span>
            <strong>JavaScript</strong>
          </div>

          <div className="skill">
            <span>03</span>
            <strong>React</strong>
          </div>

          <div className="skill">
            <span>04</span>
            <strong>Node.js</strong>
          </div>

          <div className="skill">
            <span>05</span>
            <strong>Telegram Bots</strong>
          </div>

          <div className="skill">
            <span>06</span>
            <strong>WhatsApp Bots</strong>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="section-heading">
          <p className="section-label">04 — PROCESS</p>
          <h2>Simple from idea to solution.</h2>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>
            <h3>Understand</h3>
            <p>
              We talk about what you need and the problem you're trying
              to solve.
            </p>
          </div>

          <div className="process-item">
            <span>02</span>
            <h3>Build</h3>
            <p>
              I turn the idea into a practical website, bot or digital
              solution.
            </p>
          </div>

          <div className="process-item">
            <span>03</span>
            <h3>Improve</h3>
            <p>
              We refine the solution so it fits your needs and works
              the way it should.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="section-label">05 — CONTACT</p>

        <h2>Have an idea or a problem to solve?</h2>

        <p>
          Tell me what you're trying to build, what your business needs,
          or what you'd like to automate. Let's talk about it.
        </p>

        <div className="contact-actions">
          <a
            href="https://t.me/Sage_services"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Chat Me Up
          </a>

          <a
            href="https://github.com/safo-kwesi"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <strong>Kwesi<span>.</span></strong>
          <p>Web & Bot Developer</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <p>© 2026 Kwesi. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
