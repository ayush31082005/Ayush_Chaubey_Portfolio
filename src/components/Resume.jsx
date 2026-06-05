import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { personalInfo } from "../data/portfolioData";
import { FaDownload, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function Resume() {
  const [numPages, setNumPages] = useState(0);
  const [mobileWidth, setMobileWidth] = useState(320);
  const [hasMobilePreviewError, setHasMobilePreviewError] = useState(false);

  useEffect(() => {
    const updateMobileWidth = () => {
      const nextWidth = Math.min(Math.max(window.innerWidth - 64, 260), 720);
      setMobileWidth(nextWidth);
    };

    updateMobileWidth();
    window.addEventListener("resize", updateMobileWidth);

    return () => window.removeEventListener("resize", updateMobileWidth);
  }, []);

  return (
    <section id="resume" className="px-5 py-10 md:py-12 bg-[#151e2e]">
      <div className="max-w-6xl mx-auto text-center">
        <FaFileAlt className="mx-auto mb-4 text-6xl text-cyan-400" />
        <h2 className="section-title">Download <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle mx-auto mt-2">
          View my resume directly here or download it to check my complete skills, experience, projects, and education.
        </p>

        <a
          href={personalInfo.resume}
          download="Ayush Chaubey Resume.pdf"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 hover:bg-cyan-300"
        >
          <FaDownload /> Download Resume
        </a>

        <div className="mx-auto mt-8 hidden max-w-4xl overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 shadow-[0_20px_80px_rgba(2,12,27,0.35)] md:block">
          <iframe
            src={`${personalInfo.resume}#toolbar=0&navpanes=0&scrollbar=1`}
            title="Ayush resume preview"
            loading="lazy"
            className="h-[320px] w-full rounded-[1.5rem] bg-white md:h-[480px]"
          />
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-700 bg-slate-950/45 p-3 text-left shadow-[0_20px_80px_rgba(2,12,27,0.35)] md:hidden">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/90">
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-4 text-cyan-300">
              <FaFileAlt className="text-2xl" />
              <div>
                <h3 className="text-lg font-black text-white">Resume Preview</h3>
                <p className="text-sm text-slate-400">Mobile-friendly PDF preview</p>
              </div>
            </div>

            <div className="bg-slate-950 px-2 py-4">
              {hasMobilePreviewError ? (
                <div className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-10 text-center text-slate-300">
                  PDF preview yahan load nahi ho paaya. Neeche diye gaye buttons se resume khol ya download kar sakte ho.
                </div>
              ) : (
                <Document
                  file={personalInfo.resume}
                  loading={<div className="py-10 text-center text-slate-300">Resume load ho raha hai...</div>}
                  onLoadSuccess={({ numPages: totalPages }) => {
                    setNumPages(totalPages);
                    setHasMobilePreviewError(false);
                  }}
                  onLoadError={() => setHasMobilePreviewError(true)}
                >
                  <div className="flex flex-col items-center gap-4">
                    {Array.from({ length: numPages }, (_, index) => (
                      <Page
                        key={index + 1}
                        pageNumber={index + 1}
                        width={mobileWidth}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        className="overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(15,23,42,0.45)]"
                      />
                    ))}
                  </div>
                </Document>
              )}
            </div>

            <div className="flex flex-col gap-3 p-4">
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 py-3 text-base font-black text-slate-950 hover:bg-cyan-300"
              >
                <FaExternalLinkAlt /> Open Resume
              </a>
              <a
                href={personalInfo.resume}
                download="Ayush Chaubey Resume.pdf"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400 px-6 py-3 text-base font-black text-cyan-300 hover:bg-cyan-400 hover:text-slate-950"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
