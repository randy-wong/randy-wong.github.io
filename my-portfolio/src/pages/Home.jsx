// These cards summarize the portfolio themes without duplicating the hero copy.
const strengths = [
  {
    title: 'Software and Systems',
    description:
      'Comfortable moving between application work, tooling, and infrastructure when the problem requires it.',
  },
  {
    title: 'Automation Mindset',
    description:
      'Focused on simplifying repetitive work, tightening feedback loops, and improving delivery flow.',
  },
  {
    title: 'Operational Clarity',
    description:
      'Drawn to environments where reliability, maintainability, and pragmatic execution matter.',
  },
];

export default function Home() {
  return (
    <div className="page-stack">
      <section className="hero panel panel-hero">
        <div className="hero-copy-block">
          <p className="eyebrow">Randy Wong</p>
          <h1>DevOps-focused engineer building practical software and delivery systems.</h1>
          <p className="hero-copy">
            I work across code, automation, and operational workflows with a
            bias toward useful systems that help teams move with more clarity
            and less friction.
          </p>
          <p className="hero-copy hero-copy-muted">
            My background spans release engineering, DevOps, configuration
            management, and hands-on project work in Python-based automation and
            build tooling.
          </p>
          <div className="hero-actions">
            <a href="#/projects" className="button-primary">
              View Projects
            </a>
            <a href="#/experience" className="button-secondary">
              Review Experience
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="stat-block">
            <span className="stat-label">Core Focus</span>
            <strong>Automation, reliability, and delivery flow</strong>
          </div>
          <div className="stat-block">
            <span className="stat-label">Selected Roles</span>
            <strong>Release Engineer, DevOps Engineer, Configuration Management Engineer</strong>
          </div>
          <div className="stat-block">
            <span className="stat-label">Current Goal</span>
            <strong>Contribute as a technically flexible engineer with strong systems instincts</strong>
          </div>
        </aside>
      </section>

      <section className="panel">
        <div className="section-heading">
          <p className="section-kicker">Strengths</p>
          <h2>Useful engineering over unnecessary complexity.</h2>
        </div>
        <div className="card-grid">
          {strengths.map((strength) => (
            <article key={strength.title} className="content-card">
              <h3>{strength.title}</h3>
              <p>{strength.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel-split">
        <div>
          <p className="section-kicker">Experience Snapshot</p>
          <h2>Background shaped by delivery and systems work.</h2>
          <p>
            My recent portfolio direction is centered on the overlap between
            software engineering and operational execution: the work that keeps
            builds, automation, and delivery processes dependable.
          </p>
        </div>
        <div className="inline-actions">
          <a href="#/experience" className="text-link">
            See Experience
          </a>
          <a href="#/contact" className="text-link">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
