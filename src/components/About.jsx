import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaServer } from "react-icons/fa";
import { experiences, personalInfo, projects } from "../data/portfolioData";

const highlights = [
  {
    icon: FaLaptopCode,
    text: "Building responsive, modern user interfaces with React.js, JavaScript, Tailwind CSS, and component-based frontend architecture.",
  },
  {
    icon: FaServer,
    text: "Developing secure backend systems with Node.js, Express.js, MongoDB, REST APIs, authentication, and deployment-ready business logic.",
  },
  {
    icon: FaRocket,
    text: "Working on real-world projects from idea to launch, including development, debugging, deployment, and ongoing product improvements.",
  },
];

export default function About() {
  const currentExperience = experiences[0];
  const previousExperience = experiences[1];
  const projectNames = projects.map((project) => project.title).join(", ");

  return (
    <section id="about" className="relative overflow-hidden bg-[#1a1327] px-5 py-8 md:pt-10 md:pb-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />

      {[8, 14, 22, 29, 38, 47, 58, 66, 71, 79, 83, 91, 96].map((left, index) => (
        <span
          key={left}
          className="absolute h-1 w-1 rounded-full bg-white/45"
          style={{ left: `${left}%`, top: `${4 + (index % 6) * 14}%` }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-left font-mono text-3xl tracking-tight text-white md:text-5xl"
        >
          LET ME <span className="text-violet-400">INTRODUCE</span> MYSELF
        </motion.h2>

        <div className="mt-3 grid items-start gap-3 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="font-mono text-base leading-7 text-white md:text-[1rem]">
              I&apos;m <span className="text-violet-400">{personalInfo.name}</span>, a{" "}
              <span className="text-violet-400">MERN Full Stack Developer</span> with hands-on experience in
              frontend and backend development. I build scalable web applications with clean UI, secure backend
              systems, authentication, database integration, and deployment-ready workflows.
            </p>

            <p className="mt-2 font-mono text-base leading-7 text-slate-200 md:text-[0.98rem]">
              I currently work as a <span className="text-violet-300">{currentExperience.role}</span> at{" "}
              <span className="text-violet-300">{currentExperience.company}</span> and previously completed MERN
              training at <span className="text-violet-300">{previousExperience.company}</span>. I have worked on
              real projects like <span className="text-violet-300">{projectNames}</span>, handling full-stack
              development, APIs, MongoDB, and deployment.
            </p>

            <div className="mt-3 space-y-1.5">
              {highlights.map(({ icon: Icon, text }) => (
                <div className="flex items-start gap-2 font-mono text-white" key={text}>
                  <div className="mt-1 text-violet-400">
                    <Icon />
                  </div>
                  <p className="text-base leading-6 md:text-[0.98rem]">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 text-center font-mono text-violet-300">
              <p className="text-xl leading-7 md:text-2xl">&quot;Strive to build things that make a difference!&quot;</p>
              <p className="mt-1 text-base md:text-lg">- {personalInfo.name}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-[500px]"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="/about.png"
                alt="Developer working illustration"
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
