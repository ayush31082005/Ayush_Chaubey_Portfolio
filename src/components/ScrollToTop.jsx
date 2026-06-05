import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function ScrollToTop() {
  return (
    <a
      href={`https://wa.me/${personalInfo.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-[0_0_45px_rgba(34,211,238,0.25)] transition duration-300 hover:scale-110 hover:bg-cyan-300 animate-[pulse_2.2s_ease-in-out_infinite]"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-[1.65rem] animate-[bounce_2.2s_ease-in-out_infinite]" />
    </a>
  );
}
