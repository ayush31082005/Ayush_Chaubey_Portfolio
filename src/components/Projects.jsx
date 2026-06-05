import { projects } from "../data/portfolioData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="px-5 pt-8 pb-12 md:pt-10 md:pb-14 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Real <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle mt-2">Projects added from my resume.</p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card flex flex-col">
              <div className="mb-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-[#0b1120] p-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full rounded-xl object-contain"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <h3 className="px-3 text-center text-2xl font-black gradient-text">{project.title}</h3>
                  </div>
                )}
              </div>

              <p className="text-cyan-400 font-bold">{project.type}</p>
              <p className="text-slate-300 leading-7 mt-3">{project.description}</p>

              <ul className="list-disc pl-5 mt-5 space-y-2 text-slate-300 text-sm">
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item) => <span key={item} className="badge">{item}</span>)}
              </div>

              <div className="flex gap-5 mt-6 pt-4 border-t border-slate-700">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:underline"><FaExternalLinkAlt /> Live</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-400 hover:underline"><FaGithub /> GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
