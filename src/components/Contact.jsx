import { personalInfo } from "../data/portfolioData";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`;

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-10 md:py-12 bg-[#111827]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">Contact <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle mx-auto mt-2">Have a project, job opportunity or collaboration? Let's connect.</p>

        <div className="card mt-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a href={emailComposeLink} target="_blank" rel="noreferrer" className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-bold flex items-center gap-2"><FaEnvelope /> Email</a>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-cyan-400 hover:text-slate-950"><FaWhatsapp /> WhatsApp</a>
            <a href={personalInfo.github} target="_blank" className="border border-slate-600 px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400"><FaGithub /> GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" className="border border-slate-600 px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400"><FaLinkedin /> LinkedIn</a>
          </div>

          <p className="mt-4 text-slate-400">{personalInfo.email} | {personalInfo.phone}</p>
        </div>
      </div>
    </section>
  );
}
