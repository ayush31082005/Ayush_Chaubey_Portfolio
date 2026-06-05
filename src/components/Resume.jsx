import {
  education,
  experiences,
  personalInfo,
  skills,
  summary,
} from "../data/portfolioData";
import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="bg-[#151e2e] px-5 py-10 md:py-12">
      <div className="mx-auto max-w-6xl text-center">
        <FaFileAlt className="mx-auto mb-4 text-6xl text-cyan-400" />
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle mx-auto mt-2">
          Resume preview yahin visible hai. Neeche se PDF open ya download bhi kar
          sakte ho.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 hover:bg-cyan-300"
          >
            <FaExternalLinkAlt /> Open Resume PDF
          </a>
          <a
            href={personalInfo.resume}
            download="Ayush Chaubey Resume.pdf"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400 px-8 py-4 font-black text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 shadow-[0_20px_80px_rgba(2,12,27,0.35)]">
          <div className="rounded-[1.5rem] bg-white p-5 text-left text-slate-900 sm:p-8">
            <div className="border-b border-slate-200 pb-5">
              <h3 className="text-3xl font-black text-slate-950 sm:text-4xl">
                {personalInfo.name}
              </h3>
              <p className="mt-2 text-lg font-bold text-cyan-700">
                {personalInfo.headline}
              </p>
              <div className="mt-3 flex flex-col gap-1 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-4">
                <span>{personalInfo.email}</span>
                <span>{personalInfo.phone}</span>
                <span>GitHub: ayush31082005</span>
                <span>LinkedIn: ayush-chaubey-37237a39b</span>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              <ResumeSection title="Professional Summary">
                <p className="text-sm leading-7 text-slate-700 sm:text-base">
                  {summary}
                </p>
              </ResumeSection>

              <ResumeSection title="Technical Skills">
                <div className="grid gap-3 sm:grid-cols-2">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="rounded-2xl bg-slate-50 p-4">
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                        {category}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {items.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Experience">
                <div className="space-y-5">
                  {experiences.map((experience) => (
                    <div key={`${experience.role}-${experience.company}`} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-lg font-black text-slate-950">
                            {experience.role}
                          </h4>
                          <p className="font-semibold text-cyan-700">
                            {experience.company}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-slate-500">
                          {experience.duration}
                        </p>
                      </div>
                      <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-slate-700">
                        {experience.points.map((point) => (
                          <li key={point} className="list-disc">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ResumeSection>

              <ResumeSection title="Education">
                <div className="space-y-4">
                  {education.map((item) => (
                    <div key={`${item.degree}-${item.institute}`} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-lg font-black text-slate-950">
                            {item.degree}
                          </h4>
                          <p className="font-semibold text-cyan-700">
                            {item.institute}
                          </p>
                          <p className="text-sm text-slate-600">{item.board}</p>
                        </div>
                        <div className="text-sm font-semibold text-slate-500">
                          <p>{item.duration}</p>
                          {item.status ? <p>{item.status}</p> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ResumeSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section>
      <h3 className="border-l-4 border-cyan-500 pl-3 text-lg font-black uppercase tracking-[0.18em] text-slate-950">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}
