import React from "react";

import Summary from "@/components/resume/Summary";
import ExperienceItem from "@/components/resume/ExperienceItem";

export default function Resume() {
  const workExperiences = [
    {
      title: "DevOps Consultant & Systems Architect",
      company: "Mahngiel LLC",
      period_start: "2005",
      period_end: "Present",
      responsibilities: [
        "Designed scalable AWS/GCP architectures for SaaS platforms.",
        "Implemented CI/CD pipelines with GitHub Actions & Terraform automation.",
        "Secured cloud workloads with CloudFlare WAF & automated vulnerability scanning."
      ],
    },
    {
      title: "Senior/Principal DevOps Engineer",
      company: "IDEXX Laboratories",
      period_start: "Jan 2018",
      period_end: "Present",
      responsibilities: [
        "Defined AWS multi-account cloud strategy, improving security & cost efficiency.",
        "Led security compliance initiatives (SOX, SOC 2), enforcing IAM governance.",
        "Optimized cloud costs, saving $100K+ annually through FinOps best practices.",
        "Automated infrastructure provisioning using Terraform Cloud & StackSets."
      ],
    },
    {
      title: "Senior PHP Developer",
      company: "By the Pixel",
      period_start: "Dec 2014",
      period_end: "January 2018",
      responsibilities: [
        "Technical leader for team developing PHP and Golang applications.",
        "Sat on engineering committee responsible for developing FHIR-compliant APIs.",
        "Led technical roadmap responsible for growing platform from 20 to 400 customers.",
      ],
    }
  ];

  return (
    <div className="bg-neutral min-h-screen text-deep px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Name & Title */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-display font-bold text-deep">Kris Reeck</h1>
          <p className="text-xl font-body text-primary mt-2">
            Principal DevOps Engineer | Cloud & Security Expert | Automation & Observability
          </p>
        </header>

        {/* Contact Information */}

        {/* Professional Summary */}
        <Summary />

        {/* Core Competencies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-secondary border-b pb-2">Competencies &amp; Services</h2>
          <ul className="grid grid-cols-2 gap-3 mt-4">
            <li>Software Engineering (Golang, Python, NodeJS, PHP, Java, C#)</li>
            <li>Cloud Architecture (AWS &amp; GCP)</li>
            <li>Infrastructure as Code (Terraform, CloudFormation)</li>
            <li>CI/CD & DevOps Automation (GitHub Actions, GitLab, Jenkins, CircleCI)</li>
            <li>Security & Compliance (SOC 2, SOX, IAM)</li>
            <li>Observability & SRE (Datadog, Grafana, Prometheus)</li>
            <li>Cost Optimization (FinOps, Reserved Instances)</li>
            <li>Multi-Region & High Availability</li>
            <li>Technical Hiring & Mentorship</li>
          </ul>
        </section>

        {/* Work Experience */}
        <section className="mb-10">

          <h2 className="text-2xl font-bold text-secondary border-b pb-2">Professional Experience</h2>

          {workExperiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </section>

        {/* Technical Skills */}


        {/* Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-secondary border-b pb-2">Certifications</h2>
          <ul className="list-disc ml-6 mt-4 text-lg font-body">
            <li>AWS Certified Solutions Architect - Associate &amp; Professional</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
