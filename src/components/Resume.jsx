import { personalInfo } from "../data/portfolioData";
import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  const resumeUrl =
    typeof window === "undefined"
      ? personalInfo.resume
      : new URL(personalInfo.resume, window.location.origin).href;

  const mobilePreviewUrl = `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(resumeUrl)}`;

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

        <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 text-left shadow-[0_20px_80px_rgba(2,12,27,0.35)] md:hidden">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/90">
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-4 text-cyan-300">
              <FaFileAlt className="text-2xl" />
              <div>
                <h3 className="text-lg font-black text-white">Resume Preview</h3>
                <p className="text-sm text-slate-400">Mobile-friendly document viewer</p>
              </div>
            </div>

            <iframe
              src={mobilePreviewUrl}
              title="Ayush resume mobile preview"
              loading="lazy"
              className="h-[540px] w-full bg-white"
            />

            <div className="flex flex-col gap-3 p-4">
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
