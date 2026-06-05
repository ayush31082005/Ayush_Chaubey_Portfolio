import {
  certifications,
  education,
  experiences,
  personalInfo,
  projects,
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
          Resume preview paper-style layout me hai. Andar scroll hoga aur content
          poora visible rahega.
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
            download={personalInfo.resumeDownloadName}
            className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400 px-8 py-4 font-black text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 shadow-[0_20px_80px_rgba(2,12,27,0.35)]">
          <div className="rounded-[1.5rem] border border-slate-200 bg-[#f6f8fc] p-2">
            <div className="resume-scroll h-[72vh] overflow-y-auto rounded-[1.25rem] bg-white text-left text-slate-900 md:h-[82vh]">
              <div className="grid md:grid-cols-[280px_minmax(0,1fr)]">
                <aside className="border-b border-slate-200 bg-[#eaf2fb] p-5 md:min-h-full md:border-b-0 md:border-r md:border-slate-200 md:p-6">
                  <div className="border-b border-slate-300 pb-5">
                    <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-700">
                      Resume
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-tight text-slate-950">
                      {personalInfo.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
                      {personalInfo.headline}
                    </p>
                  </div>

                  <ResumeSidebarSection title="Contact">
                    <SidebarLine>{personalInfo.email}</SidebarLine>
                    <SidebarLine>{personalInfo.phone}</SidebarLine>
                    <SidebarLine>GitHub: ayush31082005</SidebarLine>
                    <SidebarLine>LinkedIn: ayush-chaubey-37237a39b</SidebarLine>
                  </ResumeSidebarSection>

                  <ResumeSidebarSection title="Skills">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="rounded-2xl bg-white/80 p-3">
                        <h4 className="text-xs font-black uppercase tracking-[0.28em] text-cyan-700">
                          {category}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {items.join(", ")}
                        </p>
                      </div>
                    ))}
                  </ResumeSidebarSection>

                  <ResumeSidebarSection title="Certifications">
                    <ul className="space-y-2">
                      {certifications.map((certification) => (
                        <li
                          key={certification}
                          className="rounded-2xl bg-white/80 px-3 py-2 text-sm leading-6 text-slate-700"
                        >
                          {certification}
                        </li>
                      ))}
                    </ul>
                  </ResumeSidebarSection>
                </aside>

                <div className="p-5 sm:p-6 md:p-8">
                  <ResumeMainSection title="Professional Summary">
                    <p className="text-sm leading-7 text-slate-700 sm:text-[15px]">
                      {summary}
                    </p>
                  </ResumeMainSection>

                  <ResumeMainSection title="Experience">
                    <div className="space-y-5">
                      {experiences.map((experience) => (
                        <div
                          key={`${experience.role}-${experience.company}`}
                          className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
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
                  </ResumeMainSection>

                  <ResumeMainSection title="Projects">
                    <div className="space-y-5">
                      {projects.map((project) => (
                        <div
                          key={project.title}
                          className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="text-lg font-black text-slate-950">
                                {project.title}
                              </h4>
                              <p className="font-semibold text-cyan-700">
                                {project.type}
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-slate-500">
                              {project.tech.join(", ")}
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-7 text-slate-700">
                            {project.description}
                          </p>
                          <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-slate-700">
                            {project.points.map((point) => (
                              <li key={point} className="list-disc">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </ResumeMainSection>

                  <ResumeMainSection title="Education">
                    <div className="space-y-4">
                      {education.map((item) => (
                        <div
                          key={`${item.degree}-${item.institute}`}
                          className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
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
                  </ResumeMainSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSidebarSection({ title, children }) {
  return (
    <section className="mt-6">
      <h3 className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">
        {title}
      </h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function ResumeMainSection({ title, children }) {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className="border-l-4 border-cyan-500 pl-3 text-lg font-black uppercase tracking-[0.18em] text-slate-950">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function SidebarLine({ children }) {
  return <p className="text-sm leading-6 text-slate-700">{children}</p>;
}
