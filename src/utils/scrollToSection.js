const sectionToPath = {
  home: "/",
  about: "/about",
  skills: "/skill",
  experience: "/experience",
  projects: "/projects",
  education: "/education",
  resume: "/resume",
  contact: "/contact",
};

const pathToSection = {
  "/": "home",
  "/about": "about",
  "/skill": "skills",
  "/skills": "skills",
  "/experience": "experience",
  "/projects": "projects",
  "/education": "education",
  "/resume": "resume",
  "/contact": "contact",
};

export function getSectionFromLocation() {
  const hash = window.location.hash.replace("#", "");
  if (hash) return hash === "skill" ? "skills" : hash;

  return pathToSection[window.location.pathname] ?? "home";
}

export function scrollToSection(sectionId, options = {}) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  section.scrollIntoView({
    behavior: options.behavior ?? "smooth",
    block: "start",
  });

  const nextPath = sectionToPath[sectionId] ?? "/";
  const nextUrl = `${nextPath}${window.location.search}`;

  if (options.replace) {
    window.history.replaceState({}, "", nextUrl);
    return;
  }

  window.history.pushState({}, "", nextUrl);
}
