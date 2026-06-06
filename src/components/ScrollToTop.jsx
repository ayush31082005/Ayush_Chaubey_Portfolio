import { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaTimes, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const initialMessages = [
  {
    id: 1,
    role: "agent",
    content: "Hi! I'm Ayush. If you're looking to hire a full stack developer for a website, MERN project, or freelance collaboration, send me a message here.",
    time: "09:00",
  },
];

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

export default function ScrollToTop() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isTyping, isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openWhatsApp = (text = "") => {
    const finalMessage = text.trim()
      ? `Hi Ayush, ${text.trim()}`
      : "Hi Ayush, I would like to discuss a project or hiring opportunity with you.";

    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent(finalMessage)}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "user",
          content: trimmedMessage,
          time: getCurrentTime(),
        },
      ]);
    setMessage("");
    setIsTyping(true);

    timeoutRef.current = setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "agent",
          content: "Thanks for reaching out. Let's continue on WhatsApp so I can share my availability, project details, and next steps.",
          time: getCurrentTime(),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const lastUserMessage = [...chatHistory].reverse().find((item) => item.role === "user")?.content ?? "";

  return (
    <div className="fixed right-4 bottom-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end md:right-6 md:bottom-6">
      {isOpen && (
        <div className="mb-4 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b141a] shadow-[0_28px_80px_rgba(0,0,0,0.45)] animate-[chat-pop_.25s_ease-out]">
          <div className="relative overflow-hidden bg-[#075e54] px-4 pb-4 pt-3 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_38%)]" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-lg font-black">
                  AC
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">{personalInfo.name}</p>
                  <div className="mt-1 flex items-center gap-2 text-[11px] text-white/80">
                    <span className="h-2 w-2 rounded-full bg-[#25d366]" />
                    <span>online on WhatsApp</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-white/85 transition hover:bg-white/10"
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[#efeae2] bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] bg-[size:32px_32px] p-4">
            <div className="space-y-3">
              {chatHistory.map((item) => (
                <div key={item.id} className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[84%] rounded-2xl px-4 py-3 text-[13px] leading-5 shadow-[0_10px_25px_rgba(15,23,42,0.08)] ${
                      item.role === "user"
                        ? "rounded-br-md bg-[#d9fdd3] text-slate-900"
                        : "rounded-bl-md bg-white text-slate-800"
                    }`}
                  >
                    <p>{item.content}</p>
                    <p className="mt-1 text-right text-[10px] text-slate-500">{item.time}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          <div className="border-t border-black/5 bg-[#f0f2f5] p-3">
            <button
              type="button"
              onClick={() => openWhatsApp(lastUserMessage)}
              className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-4 py-3 text-sm font-bold text-[#0b141a] transition hover:brightness-95"
            >
              <FaWhatsapp className="text-base" />
              Continue on WhatsApp
            </button>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Type a message"
                className="h-12 flex-1 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition focus:border-[#25d366]"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#075e54] text-white transition hover:bg-[#0a7668] disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Send message"
              >
                <FaPaperPlane className="translate-x-[1px]" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group relative flex h-[62px] w-[62px] items-center justify-center rounded-full text-white shadow-[0_18px_40px_rgba(7,94,84,0.35)] transition duration-300 hover:scale-105 ${
          isOpen ? "bg-[#1f2937]" : "bg-[#25d366]"
        }`}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {!isOpen && <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-35 animate-ping" />}
        {isOpen ? <FaTimes className="relative text-xl" /> : <FaWhatsapp className="relative text-[2rem]" />}
      </button>
    </div>
  );
}
