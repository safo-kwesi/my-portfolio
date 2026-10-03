import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
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
            <Link to="/contact" className="primary-btn">
              Start a Conversation
            </Link>

            <Link to="/services" className="secondary-btn">
              Explore Services
            </Link>
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

      {/* Introduction */}
      <section className="section">
        <div className="section-heading">
          <p className="section-label">01 — INTRODUCTION</p>
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
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section">
        <p className="section-label">02 — LET'S WORK</p>

        <h2>Have an idea or a problem to solve?</h2>

        <p>
          Tell me what you're trying to build, what your business needs,
          or what you'd like to automate.
        </p>

        <div className="contact-actions">
          <Link to="/contact" className="primary-btn">
            Chat Me Up
          </Link>

          <Link to="/about" className="secondary-btn">
            Learn More About Me
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
