import {
  certifications,
  education,
  experiences,
  personalInfo,
  projects,
  skills,
  summary,
} from "../data/portfolioData";
import { FaDownload, FaExternalLinkAlt, FaFileAlt, FaGithub, FaGlobe } from "react-icons/fa";

const emailLink = `mailto:${personalInfo.email}`;
const phoneLink = `tel:${personalInfo.phone}`;

export default function Resume() {
  return (
    <section id="resume" className="bg-[#151e2e] px-5 py-10 md:py-12">
      <div className="mx-auto max-w-6xl text-center">
        <FaFileAlt className="mx-auto mb-4 text-6xl text-cyan-400" />
        <h2 className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        <p className="section-subtitle mx-auto mt-2">
          Resume preview screenshot-jaisa paper layout me hai, aur andar ke links bhi clickable hain.
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
          <div className="rounded-[1.5rem] bg-[#dfe8f5] p-3">
            <div className="resume-scroll h-[74vh] overflow-y-auto rounded-[1.25rem] bg-white text-left text-slate-900 md:h-[84vh]">
              <div className="overflow-hidden rounded-[1.25rem] border border-slate-200">
                <div className="relative overflow-hidden bg-[#18315d] px-5 py-6 text-white sm:px-8">
                  <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-cyan-400/10" />
                  <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-blue-300/10" />
                  <div className="absolute right-14 top-6 h-20 w-20 rounded-full bg-cyan-300/10" />

                  <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                        {personalInfo.name}
                      </h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                        {personalInfo.headline}
                      </p>
                    </div>

                    <div className="grid gap-1 text-sm text-slate-100 sm:grid-cols-2 sm:gap-x-6">
                      <ResumeHeaderLink href={phoneLink}>{personalInfo.phone}</ResumeHeaderLink>
                      <ResumeHeaderLink href={emailLink}>{personalInfo.email}</ResumeHeaderLink>
                      <ResumeHeaderLink href={personalInfo.github} external>
                        GitHub Profile
                      </ResumeHeaderLink>
                      <ResumeHeaderLink href={personalInfo.linkedin} external>
                        LinkedIn Profile
                      </ResumeHeaderLink>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-[255px_minmax(0,1fr)]">
                  <aside className="border-b border-slate-200 bg-[#f4f8fd] p-4 md:border-b-0 md:border-r md:p-5">
                    <ResumeSidebarSection title="Technical Skills">
                      {Object.entries(skills).map(([category, items]) => (
                        <div key={category}>
                          <h4 className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-700">
                            {category}
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {items.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-cyan-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </ResumeSidebarSection>

                    <ResumeSidebarSection title="Education">
                      <div className="space-y-4">
                        {education.map((item) => (
                          <div key={`${item.degree}-${item.institute}`}>
                            <h4 className="text-sm font-black text-slate-900">{item.degree}</h4>
                            <p className="mt-1 text-xs font-semibold text-cyan-700">{item.institute}</p>
                            <p className="text-xs leading-5 text-slate-600">{item.board}</p>
                            <p className="mt-1 text-[11px] font-bold text-slate-500">{item.duration}</p>
                            {item.status ? (
                              <p className="text-[11px] font-bold text-slate-500">{item.status}</p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </ResumeSidebarSection>

                    <ResumeSidebarSection title="Certifications">
                      <ol className="space-y-2 pl-4">
                        {certifications.map((certification) => (
                          <li key={certification} className="text-xs leading-5 text-slate-700">
                            {certification}
                          </li>
                        ))}
                      </ol>
                    </ResumeSidebarSection>
                  </aside>

                  <div className="p-4 sm:p-5 md:p-6">
                    <ResumeMainSection title="Professional Summary">
                      <p className="text-sm leading-7 text-slate-700">{summary}</p>
                    </ResumeMainSection>

                    <ResumeMainSection title="Work Experience">
                      <div className="space-y-5">
                        {experiences.map((experience) => (
                          <article key={`${experience.role}-${experience.company}`}>
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                              <div>
                                <h4 className="text-sm font-black text-slate-950 sm:text-base">
                                  {experience.role}
                                </h4>
                                <p className="text-sm font-bold text-cyan-700">
                                  {experience.company}
                                </p>
                              </div>
                              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                {experience.duration}
                              </p>
                            </div>
                            <ul className="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                              {experience.points.map((point) => (
                                <li key={point} className="list-disc">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </article>
                        ))}
                      </div>
                    </ResumeMainSection>

                    <ResumeMainSection title="Projects">
                      <div className="space-y-5">
                        {projects.map((project) => (
                          <article key={project.title}>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                              <div>
                                <h4 className="text-sm font-black text-slate-950 sm:text-base">
                                  {project.title}
                                </h4>
                                <p className="text-sm font-bold text-cyan-700">
                                  {project.type}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <ResumeActionLink href={project.live} icon={<FaGlobe />} label="Live" />
                                <ResumeActionLink href={project.github} icon={<FaGithub />} label="GitHub" />
                              </div>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-700">
                              {project.description}
                            </p>
                            <ul className="mt-2 space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                              {project.points.map((point) => (
                                <li key={point} className="list-disc">
                                  {point}
                                </li>
                              ))}
                            </ul>
                            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                              Tech: {project.tech.join(", ")}
                            </p>
                          </article>
                        ))}
                      </div>
                    </ResumeMainSection>
                  </div>
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
    <section className="mt-5 first:mt-0">
      <h3 className="border-b border-cyan-500 pb-2 text-[11px] font-black uppercase tracking-[0.32em] text-slate-700">
        {title}
      </h3>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}

function ResumeMainSection({ title, children }) {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className="border-b border-cyan-500 pb-2 text-[11px] font-black uppercase tracking-[0.32em] text-slate-700">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function ResumeHeaderLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="transition hover:text-cyan-200"
    >
      {children}
    </a>
  );
}

function ResumeActionLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-full border border-cyan-200 px-2.5 py-1 text-[11px] font-bold text-cyan-700 transition hover:bg-cyan-50"
    >
      {icon}
      {label}
    </a>
  );
}
