import Link from "next/link";
import { MdArticle, MdDashboard } from "react-icons/md";
import { FaPencil, FaGamepad } from "react-icons/fa6";
import { HiBeaker } from "react-icons/hi2";
import { TbAutomation } from "react-icons/tb";

const navLinks = [
  { name: "Home", href: "/", icon: MdDashboard },
  { name: "Resume", href: "/resume", icon: MdArticle },
  { name: "Projects", href: "#", icon: HiBeaker },
  { name: "Blog", href: "#", icon: FaPencil },
  { name: "Game Dev", href: "#", icon: FaGamepad },
  { name: "Home Automation", href: "#", icon: TbAutomation },
];

export default function LeftColumn() {
  return (
    <nav className="mt-6 w-full">
      <ul className="flex flex-col space-y-3 text-lg font-semibold text-gray-200">
        {navLinks.map(({ name, href, icon: Icon }) => (
          <li key={name}>
            <Link href={href} className="flex items-center space-x-3 p-3 hover:bg-primary hover:text-white transition rounded-lg">
              <Icon className="text-2xl" />
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
