import {
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaServer,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FiShield } from "react-icons/fi";
import { skills } from "../data/portfolioData";

const skillMeta = {
  HTML5: { icon: SiHtml5, color: "text-orange-400" },
  CSS3: { icon: SiCss, color: "text-sky-400" },
  Bootstrap: { icon: SiBootstrap, color: "text-violet-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-cyan-300" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "React.js": { icon: SiReact, color: "text-cyan-300" },
  JavaScript: { icon: SiJavascript, color: "text-yellow-300" },
  "Node.js": { icon: FaNodeJs, color: "text-green-400" },
  "Express.js": { icon: SiExpress, color: "text-slate-200" },
  MongoDB: { icon: SiMongodb, color: "text-green-400" },
  MySQL: { icon: SiMysql, color: "text-blue-300" },
  Git: { icon: FaGitAlt, color: "text-orange-400" },
  GitHub: { icon: FaGithub, color: "text-slate-100" },
  Postman: { icon: SiPostman, color: "text-orange-300" },
  "REST APIs": { icon: TbApi, color: "text-cyan-300" },
  Vercel: { icon: SiVercel, color: "text-white" },
  Render: { icon: SiRender, color: "text-sky-300" },
  VPS: { icon: FaServer, color: "text-purple-300" },
  "JWT Authentication": { icon: FiShield, color: "text-emerald-300" },
};

const skillItems = [...new Set(Object.values(skills).flat())].map((item) => ({
  name: item,
  ...(skillMeta[item] ?? { icon: FaDatabase, color: "text-cyan-300" }),
}));

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#111827] px-5 pt-6 pb-4 md:pt-8 md:pb-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.1),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_28%)]" />

      {[6, 13, 21, 28, 37, 44, 57, 68, 79, 88, 95].map((left, index) => (
        <span
          key={left}
          className="absolute h-1 w-1 rounded-full bg-cyan-100/45"
          style={{ left: `${left}%`, top: `${8 + (index % 5) * 16}%` }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-400/80">Tech Stack</p>
          <h2 className="mt-2 text-4xl font-black text-white md:text-6xl">
            Professional <span className="font-mono gradient-text">Skillset</span>
          </h2>
        </div>

        <div className="mx-auto mt-5 grid max-w-6xl grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center">
          {skillItems.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-cyan-400/35 bg-slate-900/45 px-3 py-3 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-slate-900/70 md:min-w-[170px] md:justify-start md:gap-3 md:px-5"
            >
              <Icon className={`text-2xl ${color}`} />
              <span className="text-sm font-semibold tracking-wide text-slate-100 md:text-base">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
