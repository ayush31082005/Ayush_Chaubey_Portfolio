import { personalInfo } from "../data/portfolioData";
import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="px-5 py-10 md:py-12 bg-[#151e2e]">
      <div className="max-w-6xl mx-auto text-center">
        <FaFileAlt className="mx-auto mb-4 text-6xl text-cyan-400" />
        <h2 className="section-title">Download <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle mx-auto mt-2">
          View my resume directly here or download it to check my complete skills, experience, projects, and education.
        </p>

        <a
          href={personalInfo.resume}
          download="Ayush Chaubey Resume.pdf"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 hover:bg-cyan-300"
        >
          <FaDownload /> Download Resume
        </a>

        <div className="mx-auto mt-8 hidden max-w-4xl overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 shadow-[0_20px_80px_rgba(2,12,27,0.35)] md:block">
          <iframe
            src={`${personalInfo.resume}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Ayush resume preview"
            loading="lazy"
            className="h-[320px] w-full rounded-[1.5rem] bg-white md:h-[480px]"
          />
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-700 bg-slate-950/45 p-6 text-left shadow-[0_20px_80px_rgba(2,12,27,0.35)] md:hidden">
          <div className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                <FaFileAlt className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Resume Preview on Mobile</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Some mobile browsers do not render PDF files inside the page. Use the buttons below to open the resume directly or download it without the blank preview issue.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-base font-black text-slate-950 hover:bg-cyan-300"
              >
                <FaExternalLinkAlt /> Open Resume
              </a>
              <a
                href={personalInfo.resume}
                download="Ayush Chaubey Resume.pdf"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400 px-6 py-3 text-base font-black text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
