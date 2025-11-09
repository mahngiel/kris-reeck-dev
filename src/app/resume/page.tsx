import React from "react";

export default function ResumePage() {
  return (
    <div className="w-full p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Kris Reeck</h1>
          <h2 className="text-xl text-secondary mb-4">Software Engineer | Cloud Architect | Security Specialist | Developer Advocate</h2>
          <div className="text-sm text-gray-400">
            <p>LinkedIn: /in/krisreeck | GitHub: /mahngiel</p>
          </div>
        </header>

        <div className="space-y-8 font-mono text-sm leading-relaxed">
          
          {/* Professional Summary */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">PROFESSIONAL SUMMARY</h3>
            <p className="text-gray-300">
              Software and Systems Engineer with over 15 years of experience designing scalable, secure, and efficient cloud-based solutions. 
              Trusted advisor to engineering leadership and executives, influencing cloud strategy, compliance roadmaps, and platform reliability. 
              Adept at applying best practices in DevOps, SRE, and infrastructure automation to drive operational excellence and innovation with developer experience in mind.
              Proven ability to build and mentor teams to design and implement effective developer-first platforms.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">CORE COMPETENCIES</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <p>• AWS, GCP, &amp; Azure Cloud Architecture</p>
                <p>• Infrastructure as Code</p>
                <p>• Container Orchestration</p>
                <p>• CI/CD Pipeline Engineering &amp; GitOps</p>
                <p>• Site Reliability Engineering</p>
                <p>• Security &amp; Compliance</p>
              </div>
              <div>
                <p>• IoT Platform Engineering & Edge Computing</p>
                <p>• AI-Augmented Development</p>
                <p>• Polyglot Programming</p>
                <p>• Identity &amp; Access Management</p>
                <p>• Monitoring &amp; Observability</p>
                <p>• API Gateway &amp; Developer Experience Platforms</p>
                <p>• Advanced Deployment Strategies (Blue/Green, Canary, A/B)</p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">KEY ACHIEVEMENTS</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Improved deployment frequency by 500% through advanced CI/CD pipeline optimizations and GitOps automation</li>
              <li>Reduced system MTTR by 300% via automated observability and incident response frameworks</li>
              <li>Successfully managed IoT platform scaling to support 150k+ connected medical devices</li>
              <li>Built enterprise-grade API Gateway solutions supporting both internal developer platforms and public customer-facing services</li>
              <li>Implemented zero-downtime deployment strategies (blue/green, canary, A/B testing) ensuring service availability</li>
              <li>Led enterprise security compliance initiatives achieving SOC 2 and SOX certification</li>
              <li>Pioneered AI-augmented development practices improving code quality and development velocity</li>
            </ul>
          </section>

          {/* Professional Experience */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">PROFESSIONAL EXPERIENCE</h3>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white">DevOps Consultant &amp; Systems Architect</h4>
                  <p className="text-secondary">Mahngiel LLC (self-employed)</p>
                </div>
                <span className="text-gray-400">Jan 2008 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Conducted AWS Well-Architected Reviews and security audits, identifying vulnerabilities and developing remediation strategies for enterprise clients</li>
                <li>Architected highly available multi-cloud infrastructure across AWS and GCP, optimizing for cost efficiency and performance</li>
                <li>Built AWS API Gateway infrastructure with usage plans and throttling for public customer-facing APIs, ensuring scalable and secure access management</li>
                <li>Implemented GitOps workflows across GitLab, CircleCi, and GitHub Actions to orchestrate CI/CD pipeline automation and application version releases, improving deployment consistency and traceability</li>
                <li>Automated infrastructure provisioning using CloudFormation and Terraform, reducing deployment time and human error</li>
                <li>Built scalable streaming media infrastructure with real-time advert injection capabilities</li>
                <li>Designed ETL pipelines using AWS SNS, SQS, Lambda, ECS, and BigQuery for high-volume data processing</li>
                <li>Implemented enterprise SSO solutions across AWS Identity Center, Google Workspaces, and JumpCloud</li>
                <li>Established comprehensive observability using Grafana Cloud (Loki/LGTM stacks) for proactive performance monitoring</li>
                <li>Developed polyglot applications and tooling (Go, Python, PHP) for diverse client requirements including financial services, media streaming, and game development</li>
                <li>Led SOC 1/2 compliance initiatives and developed IT security operating procedures</li>
                <li>Provided technical leadership including talent assessment and architectural guidance for engineering teams</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white">Senior DevOps Engineer, DevOps Principal I</h4>
                  <p className="text-secondary">IDEXX Laboratories</p>
                </div>
                <span className="text-gray-400">Jan 2018 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Lead platform engineering for global IoT veterinary medical instrument platform supporting 150k+ devices processing 15M+ daily events</li>
                <li>Architected enterprise AWS infrastructure across 400+ accounts using Control Tower, SCPs, and Transit Gateway for secure multi-account governance</li>
                <li>Built internal developer-facing API using AWS API Gateway for AWS account management, GitHub migration workflows, and Entra ID SSO app provisioning</li>
                <li>Engineered zero-downtime deployment pipelines implementing blue/green, canary, and A/B testing strategies for continuous delivery at scale</li>
                <li>Founded and led specialized SRE team, implementing automated observability and ephemeral workloads resulting in 300% MTTR reduction</li>
                <li>Orchestrated GitHub Enterprise migration for 12 organizations (5k+ repositories) and deployed AI-augmented development workflows with GitHub Copilot</li>
                <li>Drove SOC 2 and SOX compliance initiatives through automated security frameworks and vulnerability detection tools</li>
                <li>Developed polyglot applications (Python, Node.js, Go, Java) for Lambda-based data processing, reporting, and automated testing infrastructure</li>
                <li>Influenced organizational cloud strategy and architectural decisions as key member of executive planning groups</li>
                <li>Mentored engineering teams on modern practices including containerization, SRE methodologies, and security standards</li>
                <li>Designed comprehensive system architecture diagrams enabling cross-functional teams to identify bottlenecks and assess security risks</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white">Senior Developer & Technical Lead</h4>
                  <p className="text-secondary">By The Pixel, LLC & Web Development Experience</p>
                </div>
                <span className="text-gray-400">2008 - Jan 2018</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Led full-stack development initiatives across PHP, JavaScript, and emerging cloud technologies, establishing foundation for DevOps expertise</li>
                <li>Architected scalable web applications and RESTful APIs serving high-traffic client portfolios in financial services and e-commerce</li>
                <li>Pioneered containerization and deployment automation strategies, reducing deployment time and improving application reliability</li>
                <li>Mentored development teams in Agile methodologies while implementing CI/CD practices and version control workflows</li>
                <li>Transitioned legacy monolithic applications to microservices architecture, improving system maintainability and performance</li>
                <li>Established development standards and code review processes that enhanced team productivity and code quality</li>
              </ul>
            </div>
          </section>

          {/* Education & Certifications */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">EDUCATION & CERTIFICATIONS</h3>
            <div className="text-gray-300">
              <p><strong>AWS Certified Solutions Architect - Associate</strong> (April 2018)</p>
              <p><strong>AWS Certified Solutions Architect - Professional</strong> (April 2021)</p>
              <p>Continuous professional development in cloud technologies, security frameworks, and emerging AI technologies</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
