import React from "react";
import { FaCode, FaDocker } from "react-icons/fa";
import { FaCircleDollarToSlot, FaGears, FaServer } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { IoInfinite, IoPeople } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { SiTerraform, SiAwslambda } from "react-icons/si";

const services = [
  {
    title: "Cloud Architecture",
    icon: CiCloudOn,
    description: "I design and implement scalable, fault-tolerant cloud infrastructures on AWS and GCP. My expertise includes multi-region architectures, VPC networking, hybrid cloud setups, and cost-aware design. I build solutions that prioritize availability, performance, and security, ensuring systems can handle traffic fluctuations and recover from failures."
  },
  {
    title: "Serverless Architecture",
    icon: SiAwslambda,
    description: "I specialize in building event-driven and serverless applications using AWS Lambda, GCP Cloud Run, App Engine, and Step Functions. My experience includes designing stateless microservices, asynchronous processing pipelines, and low-latency API architectures that take advantage of pay-per-use computing while minimizing infrastructure complexity."
  },
  {
    title: "DevOps Automation",
    icon: IoInfinite,
    description: "I automate infrastructure provisioning, deployments, and testing workflows using tools like Terraform, CloudFormation, and Ansible. By implementing infrastructure-as-code (IaC) and CI/CD pipelines, I help teams ensure consistency, reliability, and repeatability in their cloud environments."
  },
  {
    title: "Containerization",
    icon: FaDocker,
    description: "I design and optimize lightweight, efficient Docker containers for modern applications to streamline development and bring parity with production. I deploy and manage containerized workloads using AWS ECS, ensuring highly available, scalable, and cost-effective application environments."
  },
  {
    title: "CI/CD Implementation",
    icon: FaGears,
    description: "I build robust, automated CI/CD pipelines that enable fast, reliable, and secure application deployments. My experience includes setting up GitHub Actions, GitLab CI/CD, Jenkins, and ArgoCD, ensuring code quality with automated testing, security scanning, and deployment rollbacks."
  },
  {
    title: "Infrastructure as Code",
    icon: SiTerraform,
    description: "I manage cloud environments through Terraform and CloudFormation, enforcing best practices for modular, version-controlled, and policy-driven infrastructure. I have experience designing multi-account AWS Organizations, automated networking, and compliance-driven infrastructure that scales efficiently."
  },
  {
    title: "Security Best Practices",
    icon: MdSecurity,
    description: "I implement security controls at every level of cloud infrastructure, including IAM policy design, network isolation, encryption strategies, and compliance enforcement. My work includes SOC 2/SOX-compliant infrastructure, secure secret management with AWS Systems Manager, and continuous vulnerability scanning."
  },
  {
    title: "Cost Optimization",
    icon: FaCircleDollarToSlot,
    description: "I analyze cloud spend, optimize compute/storage configurations, and implement FinOps strategies to reduce unnecessary costs. This includes identifying idle resources, implementing reserved instances and savings plans, leveraging S3 intelligent tiering, and fine-tuning autoscaling policies."
  },
  {
    title: "Observability & Monitoring",
    icon: VscDebugConsole,
    description: "I lead teams in instrumenting applications and infrastructure with structured logging, distributed tracing, and telemetry using tools like Datadog, Prometheus, Grafana, AWS CloudWatch, and Loki. By focusing on high-value, actionable metrics rather than noise, I help organizations turn raw data into operational insights, enabling proactive issue detection, root cause analysis, and capacity planning."
  },
  {
    title: "Infrastructure Management",
    icon: FaServer,
    description: "I manage large-scale cloud environments, ensuring system availability, security, and operational efficiency. My work includes automating infrastructure scaling, improving network latency, enforcing compliance, and reducing cloud drift through policy-based governance."
  },
  {
    title: "Software Engineering",
    icon: FaCode,
    description: "With a background in PHP, Golang, Python, and Java, I develop CLI tools, desktop software, and high-performance backend services, APIs, and cloud-native applications. My experience spans microservices architectures, distributed systems, and optimizing application performance under load."
  },
  {
    title: "Talent Screening",
    icon: IoPeople,
    description: "I build technical hiring processes that assess real-world engineering skills. My experience includes defining interview frameworks, writing coding challenges, and conducting technical screenings to ensure hiring decisions align with both technical needs and team culture."
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
              <div className="flex rounded-lg h-full border-1 border-primary-dark bg-gray-800 bg-opacity-60 p-6 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <div className="w-10 h-10 bg-primary clip-hexagon"></div>
                    <Icon className="absolute text-white text-2xl" />
                  </div>

                  <h2 className="text-white text-lg title-font font-medium">{t}</h2>
                </div>
                <div className="flex-grow">
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
