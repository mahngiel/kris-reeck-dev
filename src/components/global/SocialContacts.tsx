import { FaGithub, FaLinkedin, FaDiscord, FaSlack, FaAws } from "react-icons/fa";
import { SiToptal } from "react-icons/si";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/mahngiel", icon: FaGithub, altText: "View my developer profile" },
  { name: "LinkedIn", url: "https://linkedin.com/in/krisreeck", icon: FaLinkedin, altText: "View my professional profile" },
  { name: "Toptal", url: "https://www.toptal.com/resume/kris-reeck", icon: SiToptal, altText: "Hire me on TopTal" },
  { name: "AWS", url: "https://iq.aws/e/mahngiel", icon: FaAws, altText: "Hire me on AWS IQ" },
];

export default function ContactLinks() {
  return (
    <section className="mt-4 w-full flex flex-wrap justify-center gap-4">
      {socialLinks.map(({ name, url, altText, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 flex items-center justify-center"
          aria-label={`${altText}`}
        >
          <div className="w-10 h-10 bg-primary clip-hexagon transition-transform group-hover:scale-110"></div>
          <Icon className="absolute text-white text-2xl" />
        </a>
      ))}
    </section>
  );
}
