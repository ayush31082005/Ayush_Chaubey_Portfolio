import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#120d1d] px-5 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 font-mono text-sm text-white md:flex-row md:items-center">
        <p className="text-center md:w-1/3 md:text-left">Designed and Developed by {personalInfo.name}</p>

        <p className="text-center md:w-1/3 md:-ml-8">Copyright © 2026 AC</p>

        <div className="flex items-center gap-5 text-base md:w-1/3 md:justify-end">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="transition hover:text-cyan-400" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="transition hover:text-cyan-400" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-cyan-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
