import { education } from "../data/portfolioData";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="px-5 py-10 md:py-12 bg-[#111827]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>

        <div className="relative mt-6 pl-10">
          <div className="absolute bottom-3 left-3 top-3 w-px bg-cyan-400/30" />

          <div className="space-y-4">
            {education.map((item) => (
              <div className="relative" key={`${item.degree}-${item.institute}`}>
                <div className="absolute -left-10 top-8 z-10 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#111827] bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.16)]">
                  <div className="h-2 w-2 rounded-full bg-[#111827]" />
                </div>

                <div className="card flex items-start gap-4">
                  <FaGraduationCap className="text-5xl text-cyan-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">{item.degree}</h3>
                    <p className="mt-2 text-slate-300">{item.institute}</p>
                    <p className="mt-2 text-slate-400">Board: {item.board}</p>
                    <p className="text-slate-400">Duration: {item.duration}</p>
                    {item.status ? (
                      <span className="mt-4 inline-block rounded-full border border-amber-500/35 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-amber-300">
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
