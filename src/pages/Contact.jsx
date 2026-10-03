import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="contact-section page-section">
      <p className="section-label">03 — CONTACT</p>

      <h2>Let's talk about what you want to build.</h2>

      <p>
        Have a website idea, a bot you need built, or a business
        process you'd like to automate? Tell me what you need and
        let's discuss the project.
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

      <div className="about-content contact-details">
        <p>
          <strong>Telegram</strong>
          <br />
          @Sage_services
        </p>

        <p>
          <strong>GitHub</strong>
          <br />
          github.com/safo-kwesi
        </p>
      </div>

      <Link to="/" className="secondary-btn back-btn">
        Back Home
      </Link>
    </section>
  )
}

export default Contact
