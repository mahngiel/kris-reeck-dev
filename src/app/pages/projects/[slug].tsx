import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const projects = {
  "aws-cost-optimization": {
    title: "AWS Cost Optimization",
    description: "Saved $100K through Reserved Instances & Intelligent Tiering",
    stack: ["AWS", "Terraform", "FinOps"]
  },
  "security-automation": {
    title: "Security Automation",
    description: "Integrated Grype, AWS Inspector & CI/CD security tools",
    stack: ["AWS", "Grype", "Inspector"]
  }
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects[slug as keyof typeof projects];

  if (!project) return <div className="text-center">Project Not Found</div>;

  return (
    <div className="bg-secondary min-h-screen text-white">
      <Navbar />
      <main className="p-10">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-lg text-gray-300">{project.description}</p>
        <div className="mt-4">
          <strong>Tech Stack:</strong> {project.stack.join(", ")}
        </div>
      </main>
    </div>
  );
}
