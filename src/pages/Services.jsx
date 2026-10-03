function Services() {
  return (
    <section className="section page-section">
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
  )
}

export default Services
