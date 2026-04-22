export default function Contact() {
  return (
    <div className="page-stack">
      <section className="panel page-intro">
        <p className="section-kicker">Contact</p>
        <h1>Open to professional conversations and relevant opportunities.</h1>
        <p>
          If you are hiring for software, DevOps, release engineering, or
          adjacent systems-focused work, email is the best way to reach me.
        </p>
      </section>

      <section className="card-grid contact-grid">
        <article className="panel contact-card">
          <p className="contact-label">Email</p>
          <a className="contact-link" href="mailto:randywong1993@gmail.com">
            randywong1993@gmail.com
          </a>
          <p>Best for outreach, interview coordination, and role discussions.</p>
        </article>

        <article className="panel contact-card">
          <p className="contact-label">LinkedIn</p>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/randy-wong-9915b154/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/randy-wong-9915b154
          </a>
          <p>Professional profile and networking contact.</p>
        </article>
      </section>
    </div>
  );
}
