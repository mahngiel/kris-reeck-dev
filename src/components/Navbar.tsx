import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-secondary text-neutral p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-display font-bold">
          <Link href="/">Mahngiel</Link>
        </h1>
        <div className="flex space-x-6 font-body">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/projects" className="hover:text-primary">Projects</Link>
          <Link href="/resume" className="hover:text-primary">Resume</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
