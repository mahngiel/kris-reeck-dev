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
                <p>• CI/CD Pipeline Engineering</p>
                <p>• Site Reliability Engineering</p>
                <p>• Security &amp; Compliance</p>
              </div>
              <div>
                <p>• IoT Platform Engineering & Edge Computing</p>
                <p>• AI-Augmented Development</p>
                <p>• Polyglot Programming</p>
                <p>• Database Management</p>
                <p>• Identity &amp; Access Management</p>
                <p>• Monitoring &amp; Observability</p>
              </div>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h3 className="text-lg font-bold text-primary border-b border-primary pb-1 mb-4">KEY ACHIEVEMENTS</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Improved deployment frequency by 500% through advanced CI/CD pipeline optimizations</li>
              <li>Reduced system MTTR by 300% via automated observability and incident response frameworks</li>
              <li>Successfully managed IoT platform scaling to support 150k+ connected medical devices</li>
              <li>Led enterprise security compliance initiatives achieving SOC 2 and SOX certification</li>
              <li>Architected cost-effective multi-cloud strategies resulting in significant operational savings</li>
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
                <li>Provide AWS cloud architecture, security audits, and cost optimization consulting</li>
                <li>Design and implement infrastructure automation solutions for enterprise clients</li>
                <li>Develop custom applications and APIs using modern frameworks and cloud-native technologies</li>
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
                <li>Lead platform engineering for global IoT veterinary medical instrument platform supporting 150k+ devices</li>
                <li>Manage enterprise AWS infrastructure across 400+ accounts using Control Tower and Service Control Policies</li>
                <li>Architect and maintain real-time data processing pipelines handling 15M+ daily events</li>
                <li>Implement SRE practices resulting in 300% MTTR reduction through automated observability</li>
                <li>Drive SOC 2 and SOX compliance initiatives with automated security frameworks</li>
                <li>Lead GitHub Enterprise migration for 12 organizations encompassing 5k+ repositories</li>
                <li>Deploy AI-augmented development workflows using GitHub Copilot and LLM integration</li>
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white">Senior Developer</h4>
                  <p className="text-secondary">By The Pixel, LLC</p>
                </div>
                <span className="text-gray-400">Dec 2014 - Jan 2018</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Senior PHP developer and mentor in Agile development environment</li>
                <li>Maintained legacy applications and developed new microservices</li>
                <li>Provided technical leadership and delivery forecasting for development teams</li>
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
