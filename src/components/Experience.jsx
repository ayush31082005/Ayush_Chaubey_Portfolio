import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-10 md:py-12 bg-[#151e2e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>

        <div className="relative mt-6 pl-10">
          <div className="absolute bottom-3 left-3 top-3 w-px bg-cyan-400/25" />

          <div className="space-y-6">
          {experiences.map((exp) => (
            <div className="relative" key={exp.company}>
              <div className="absolute -left-10 top-7 z-10 h-5 w-5 rounded-full border-4 border-[#151e2e] bg-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.18)]" />

              <div className="card">
                <div className="flex flex-col gap-3 md:flex-row md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                    <p className="text-slate-300">{exp.company}</p>
                  </div>
                  <p className="text-slate-400">{exp.duration}</p>
                </div>

                <ul className="mt-6 list-disc pl-5 space-y-3 leading-7 text-slate-300">
                  {exp.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
