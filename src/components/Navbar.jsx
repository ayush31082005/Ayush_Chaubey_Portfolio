import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToSection } from "../utils/scrollToSection";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Resume", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#111827]/90 backdrop-blur-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <button type="button" onClick={() => scrollToSection("home")} className="text-2xl font-black">Ayush Chaubey</button>

        <div className="hidden xl:flex gap-6 text-sm">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => scrollToSection(link.toLowerCase())}
              className="text-slate-300 hover:text-cyan-400"
            >
              {link}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="xl:hidden flex h-10 w-10 items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <FiX className="text-2xl text-cyan-400" />
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-6 rounded-full bg-cyan-400" />
              <span className="h-0.5 w-4 rounded-full bg-cyan-400" />
              <span className="h-0.5 w-6 rounded-full bg-cyan-400" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-[#111827] border-t border-slate-700 px-5 pb-5">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => {
                scrollToSection(link.toLowerCase());
                setOpen(false);
              }}
              className="block py-3 text-slate-300 hover:text-cyan-400"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
