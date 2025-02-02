// import Navbar from "@components/Navbar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral min-h-screen text-deep">
      <main className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl font-display font-bold text-deep">
          <Link href="/resume" className="text-deep hover:text-secondary">Kris Reeck</Link>
        </h1>
        <p className="mt-4 text-xl font-body text-primary">
          Software Engineer | Cloud Architect | Infrastructure Automation
        </p>
      </main>
    </div>
  );
}
