import React from 'react';

export default function Experience() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">Freelance (2022 - Present)</h2>
          <p>DevOps & Automation consultant, creating CI/CD pipelines and cloud deployments.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">QTC Medical Group (2022)</h2>
          <p>Release Engineer focused on automating deployments and managing builds with Jenkins.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Pathmatics, Inc. (2021)</h2>
          <p>DevOps Engineer supporting AWS infrastructure and automation for ad analytics platforms.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Kofax, Inc. (2019 - 2020)</h2>
          <p>Configuration Management Engineer handling Azure DevOps, builds, and global support.</p>
        </li>
      </ul>
    </main>
  );
}