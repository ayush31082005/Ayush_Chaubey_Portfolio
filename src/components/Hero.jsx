import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { personalInfo } from "../data/portfolioData";
import { scrollToSection } from "../utils/scrollToSection";

const emailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center bg-[#111827] px-5 pt-20 md:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} className="order-1 -mt-2 flex justify-center lg:order-2 lg:mt-0">
          <div className="h-48 w-48 overflow-hidden rounded-full border border-slate-600 bg-[#111827] shadow-[0_0_35px_rgba(34,211,238,0.2)] sm:h-56 sm:w-56 md:h-[380px] md:w-[380px]">
            <img
              src="/ayush.png"
              alt={personalInfo.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="order-2 lg:order-1">
          <p className="text-cyan-400 mb-4 font-bold">Hello, I'm</p>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-7xl">{personalInfo.name}</h1>
          <h2 className="mt-3 text-2xl font-bold gradient-text md:mt-5 md:text-4xl">
            <TypeAnimation sequence={["Full Stack Developer", 1500, "MERN Stack Developer", 1500, "React.js Developer", 1500]} repeat={Infinity} />
          </h2>
          <p className="mt-4 max-w-xl leading-8 text-slate-300 md:mt-6">
            Building scalable web applications with React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-bold hover:bg-cyan-300"
            >
              View Projects
            </button>
            <a href={personalInfo.resume} download={personalInfo.resumeDownloadName} className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-slate-950">Download Resume</a>
          </div>

          <div className="mt-6 flex gap-5 text-2xl md:mt-8">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400"><FaGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400"><FaLinkedin /></a>
            <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-cyan-400"><FaWhatsapp /></a>
            <a href={emailComposeLink} target="_blank" rel="noreferrer" className="hover:text-cyan-400"><MdEmail /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
