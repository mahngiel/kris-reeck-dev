import Navbar from "@components/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen text-neutral">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-display font-bold text-primary">Kris Reeck</h1>
        <p className="mt-4 text-xl font-body text-deep">
          Principal DevOps Engineer | Cloud & Security Expert | Automation & Observability
        </p>
        <div className="mt-6">
          <a href="/projects" className="px-6 py-3 bg-accent text-dark rounded-lg hover:bg-primary">
            View My Work
          </a>
        </div>
      </main>
    </div>
  );
}
