import React from "react";
import { FaCode, FaDocker, FaCloud, FaCogs, FaShieldAlt, FaServer, FaChartLine, FaDollarSign, FaDatabase, FaGlobe, FaUsers, FaLock, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Scale Your Cloud Infrastructure",
    icon: FaCloud,
    description: "Transform your business with enterprise-grade cloud architecture that grows with you. I'll design secure, cost-effective multi-cloud strategies to leverage AWS, Azure, and Google Cloud to maximize scalability and reliability."
  },
  {
    title: "Accelerate Product Development",
    icon: FaCogs,
    description: "Ship features 5x faster with automated CI/CD pipelines and GitOps workflows. I'll eliminate deployment bottlenecks, reduce manual errors, and create self-service platforms that empower your development teams to focus on innovation."
  },
  {
    title: "Reduce Operational Costs",
    icon: FaDollarSign,
    description: "Cut your cloud spending by 30-50% without sacrificing performance. I'll implement FinOps practices, rightsizing strategies, and automated governance that provides real-time cost visibility and accountability across your organization."
  },
  {
    title: "Achieve Compliance Certification",
    icon: FaShieldAlt,
    description: "Navigate SOC 2, SOX, and enterprise security requirements with confidence. I'll build automated compliance frameworks and security-first architectures that satisfy auditors while maintaining developer productivity."
  },
  {
    title: "Eliminate System Downtime",
    icon: FaServer,
    description: "Transform your reliability posture with SRE practices that reduce incidents by 70%. I'll implement proactive monitoring, automated incident response, and chaos engineering to ensure your systems stay online when it matters most."
  },
  {
    title: "Modernize Legacy Systems",
    icon: FaCode,
    description: "Migrate from legacy infrastructure to modern, maintainable solutions without business disruption. I'll create Infrastructure as Code that standardizes deployments and enables rapid scaling across environments."
  },
  {
    title: "Gain System Visibility",
    icon: FaChartLine,
    description: "Get complete observability into your systems with actionable insights. I'll implement monitoring strategies that predict problems before they impact customers and provide data-driven optimization recommendations."
  },
  {
    title: "Build Developer Platforms",
    icon: FaGlobe,
    description: "Create internal developer platforms that accelerate time-to-market. I'll design self-service infrastructure, API gateways, and deployment workflows that reduce cognitive load and improve developer experience."
  },
  {
    title: "Scale IoT & Edge Solutions",
    icon: FaDatabase,
    description: "Handle millions of connected devices with confidence. I'll architect edge-to-cloud platforms that process real-time data streams, manage device lifecycles, and provide actionable business intelligence from your IoT investments."
  },
  {
    title: "Implement Zero-Trust Security",
    icon: FaLock,
    description: "Protect your organization with enterprise identity and access management. I'll design SSO solutions, automated user provisioning, and security policies that defend against threats while simplifying user experience."
  },
  {
    title: "Leverage AI for Competitive Advantage",
    icon: FaRobot,
    description: "Integrate AI-augmented development workflows that improve code quality and accelerate delivery. I'll help your teams adopt LLM tools, implement intelligent automation, and build AI-enhanced products that differentiate your business."
  },
  {
    title: "Build High-Performance Teams",
    icon: FaUsers,
    description: "Scale your engineering organization with proven leadership strategies. I'll establish DevOps culture, mentor technical talent, implement hiring processes, and create the engineering practices that enable sustained growth."
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
