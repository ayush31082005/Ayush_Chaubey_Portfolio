import { certifications } from "../data/portfolioData";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-5 bg-[#151e2e]">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Certifications added from my resume.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.map((cert) => (
            <div className="card flex gap-4 items-start" key={cert}>
              <FaCertificate className="text-cyan-400 text-3xl mt-1" />
              <h3 className="font-bold text-lg">{cert}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
