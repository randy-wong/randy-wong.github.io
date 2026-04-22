// Project summaries stay intentionally conservative until fuller case-study details are available.
const projects = [
  {
    name: 'Build Server and Artifact Repository',
    stack: 'Python, Jenkins',
    summary:
      'Project work focused on build infrastructure and artifact handling, with an emphasis on repeatable delivery workflows and practical internal tooling.',
  },
  {
    name: 'Email Data Analysis Automation',
    stack: 'Python scripts',
    summary:
      'Python-based automation aimed at reducing manual effort in recurring email data analysis tasks and making the process easier to run consistently.',
  },
];

export default function Projects() {
  return (
    <div className="page-stack">
      <section className="panel page-intro">
        <p className="section-kicker">Projects</p>
        <h1>Selected work in automation and delivery tooling.</h1>
        <p>
          The project set is intentionally small. The focus is on work that
          reflects practical engineering habits: reduce friction, improve
          repeatability, and make useful systems easier to maintain.
        </p>
      </section>

      <section className="card-grid">
        {projects.map((project) => (
          <article key={project.name} className="panel project-card">
            <p className="project-stack">{project.stack}</p>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
