import { personalInfo } from "../data/portfolioData";
import { FaDownload, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-10 md:py-12 bg-[#151e2e]">
      <div className="max-w-6xl mx-auto text-center">
        <FaFileAlt className="mx-auto mb-4 text-6xl text-cyan-400" />
        <h2 className="section-title">Download <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle mx-auto mt-2">
          View my resume directly here or download it to check my complete skills, experience, projects, and education.
        </p>

        <a href={personalInfo.resume} download="Ayush Chaubey Resume.pdf" className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 hover:bg-cyan-300">
          <FaDownload /> Download Resume
        </a>

        <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 shadow-[0_20px_80px_rgba(2,12,27,0.35)]">
          <iframe
            src={`${personalInfo.resume}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Ayush resume preview"
            className="h-[320px] w-full rounded-[1.5rem] bg-white md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
