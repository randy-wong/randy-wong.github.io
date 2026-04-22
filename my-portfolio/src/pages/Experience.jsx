// Role data is kept separate from markup so verified resume details can be expanded cleanly later.
const roles = [
  {
    company: 'QTC Medical Group',
    title: 'Release Engineer',
    summary:
      'Experience aligned with release process execution, delivery coordination, and keeping software changes moving through structured workflows.',
  },
  {
    company: 'Pathmatics / Sensor Tower',
    title: 'DevOps Engineer',
    summary:
      'Work centered on engineering support for delivery systems, automation, and the operational side of software development.',
  },
  {
    company: 'Kofax',
    title: 'Configuration Management Engineer',
    summary:
      'Background in configuration management and the discipline required to keep environments, assets, and delivery processes consistent.',
  },
];

export default function Experience() {
  return (
    <div className="page-stack">
      <section className="panel page-intro">
        <p className="section-kicker">Experience</p>
        <h1>Roles across release engineering, DevOps, and configuration management.</h1>
        <p>
          This portfolio currently keeps the experience section concise and
          factual. The common thread across these roles is systems thinking,
          delivery discipline, and support for reliable engineering workflows.
        </p>
      </section>

      <section className="card-list">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="panel role-card">
            <div className="role-heading">
              <p className="role-company">{role.company}</p>
              <h2>{role.title}</h2>
            </div>
            <p>{role.summary}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
