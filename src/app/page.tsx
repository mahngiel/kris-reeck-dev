import React from "react";
import { FaCode, FaDocker, FaCloud, FaCogs, FaShieldAlt, FaServer, FaChartLine, FaDollarSign, FaDatabase, FaGlobe, FaUsers, FaLock, FaRobot } from "react-icons/fa";

const services = [
  {
 title: "Cloud Architecture & Infrastructure",
  icon: FaCloud,
        description: "Enterprise-scale cloud infrastructure across 400+ AWS accounts using Control Tower and Service Control Policies. VPC design, Transit Gateway implementation, and IoT platform supporting 150k connected devices processing 15M daily events."
     },
    {
      title: "IoT Platform & Edge Computing",
      icon: FaCloud,
      description: "Enterprise IoT platform managing 150k+ veterinary medical instruments with agent software delivery and real-time data collection. Edge-to-cloud architecture processing 15M daily events across distributed hardware fleet with automated device management and monitoring."
    },
    {
      title: "DevOps & CI/CD Automation", 
      icon: FaCogs,
      description: "Advanced CI/CD with Jenkins, GitHub Actions, and Terraform Cloud achieving 3x deployment frequency improvement. IoT agent software delivery to 150k+ field devices, zero-downtime releases, and SOX-compliant pipeline development."
    },
    {
      title: "Security & Compliance Engineering",
      icon: FaShieldAlt,
      description: "SOC 2 and SOX compliance leadership with automated security frameworks. GitHub Enterprise migration for 12 organizations (5k repositories), secure software signing solutions, and regulatory standard adherence." 
    },
    {
      title: "Site Reliability Engineering",
      icon: FaServer,
      description: "SRE practice implementation reducing MTTR by 300% through automated observability. System reliability engineering with ephemeral workloads, performance monitoring, and incident response optimization using Datadog and Grafana."
    },
    {
      title: "Infrastructure as Code",
      icon: FaCode,
      description: "Expert Terraform and CloudFormation automation for consistent, maintainable deployments. Infrastructure standardization across multi-account environments with policy enforcement and governance frameworks."
    },
    {
      title: "Observability & Monitoring",
      icon: FaChartLine,
      description: "Comprehensive monitoring with Datadog, Grafana Cloud (Loki/LGTM stacks), and CloudWatch. Performance bottleneck identification, automated alerting, and operational insights enabling proactive system management."
    },
    {
      title: "Cloud Cost Optimization",
      icon: FaDollarSign,
      description: "FinOps leadership across multi-account AWS and GCP environments. Cost efficiency optimization, resource governance, and financial accountability frameworks driving measurable operational savings."
    },
    {
      title: "Container & Serverless Solutions",
      icon: FaDocker,
      description: "Docker containerization, AWS Lambda, and serverless architecture expertise. ECS orchestration, API Gateway integration, and Cloud Run/Cloud Functions deployment for scalable microservices."
    },
    {
      title: "Data Engineering & ETL",
      icon: FaDatabase,
      description: "High-volume data pipelines for IoT telemetry from 150k+ veterinary devices using AWS SNS, SQS, Lambda, and ECS. BigQuery dataset management, MySQL optimization, and Redis clustering supporting real-time medical instrument data processing."
    },
    {
      title: "Multi-Cloud Strategy & Governance",
      icon: FaGlobe,
      description: "AWS and GCP expertise with hybrid cloud governance strategies. Well-Architected Reviews, cross-platform integration, and vendor-neutral architecture design for enterprise scalability."
    },
    {
      title: "Technical Leadership & Hiring",
      icon: FaUsers,
      description: "Principal-level technical leadership with 15+ years experience. Technical hiring for DevOps/SRE roles, team mentoring, cross-functional collaboration, and engineering culture development across organizations."
    },
    {
      title: "Hardware Fleet Management",
      icon: FaServer,
      description: "Large-scale IoT device lifecycle management across 150k+ veterinary medical instruments. Agent software deployment, over-the-air updates, device health monitoring, and field hardware troubleshooting with automated remediation."
    },
    {
      title: "Identity & Access Management",
      icon: FaLock,
      description: "Enterprise IAM with SAML 2.0 and SCIM provisioning across AWS Identity Center, Google Workspaces, and JumpCloud. SSO implementation, automated user lifecycle management, and identity governance frameworks ensuring security and compliance."
  },
  {
    title: "AI-Augmented Development",
    icon: FaRobot,
    description: "Expert in LLM engineering and AI-augmented workflows using Claude, ChatGPT, and GitHub Copilot for code generation, architecture design, and system optimization. Daily practitioner of prompt engineering, context management, and AI model integration with systematic validation approaches for production-quality deliverables and emerging MCP server implementations."
    }
];

export default function Dashboard() {
  return (
    <section className="text-primary-contrast">

      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-secondary-900 mb-20">
          👋 I&apos;m Kris, and I make things.
        </h1>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {services.map(({ title: t, description: desc, icon: Icon }) => (
            <div key={t} className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full border border-primary-dark bg-gray-800 bg-opacity-60 p-6 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white shrink-0">
                    <div className="w-10 h-10 bg-primary clip-hexagon"></div>
                    <Icon className="absolute text-white text-2xl" />
                  </div>

                  <h2 className="text-white text-lg title-font font-medium">{t}</h2>
                </div>
                <div className="grow">
                  <p className="leading-relaxed text-base">{desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
