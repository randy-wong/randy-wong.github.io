import React from 'react';

export default function Projects() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold">Terraform-Based AWS Deployment</h2>
          <p>Provisioning an auto-scaled, load-balanced EC2 cluster with RDS backend and S3 storage using modular IaC.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Containerized Data Scraper Pipeline</h2>
          <p>Dockerized a Python-based web scraper with environment configs and Compose-based local deployment.</p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">CI/CD for Email Analytics</h2>
          <p>Automated data analysis and reporting with Python, build server integration, and artifact repository setup.</p>
        </li>
      </ul>
    </main>
  );
}