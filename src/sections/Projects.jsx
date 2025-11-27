import React, { useEffect, useRef } from "react";

// ✅ LOCAL IMAGES IMPORT
import shopgenieImg from "../assets/shopgenie.png";
import falacieImg from "../assets/Falacie.png";
import jarvisImg from "../assets/Jarvis.png";
import docSummaryImg from "../assets/DocSummary.png";

const projects = [
  {
    title: "ShopGenie – Smart In-Store Shopping Assistant",
    desc: "Smart app with live stock, in-store maps & QR self-checkout.",
    tags: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: shopgenieImg,
    demoUrl: "https://www.youtube.com/watch?v=3JlimatB304", // 🎥 Demo video
    liveUrl: "https://shopgenie.netlify.app/", // 🔗
  },
  {
    title: "Falacie-s – Emotion-Based Movie Recommender",
    desc: "Detects facial emotions (OpenCV/DeepFace) and recommends movies via TMDB.",
    tags: ["React", "Tailwind", "FastAPI", "Python", "TMDB"],
    image: falacieImg,
    demoUrl: "https://www.youtube.com/watch?v=oadANaaW_RM",
    liveUrl: "https://falacie-s.vercel.app/",
  },
  {
    title: "Jarvis – AI-Powered Voice Assistant",
    desc: "Multilingual desktop voice assistant (English/Hindi/Hinglish).",
    tags: ["Python", "Cohere AI", "Eel", "gTTS"],
    image: jarvisImg,
    demoUrl: "https://www.youtube.com/watch?v=lvYUVkUco-k",
    liveUrl: "https://jarvis-assistant-steel.vercel.app/",
  },
  {
    title: "Doc Summary Assistant – AI PDF & Image Summarizer",
    desc: "Upload PDFs or images → OCR + AI summary using FastAPI & Cohere/OpenAI backend.",
    tags: ["FastAPI", "Cohere/OpenAI", "OCR", "PyPDF", "Vanilla JS", "HTML/CSS"],
    image: docSummaryImg,
    demoUrl: "",
    liveUrl: "https://doc-summary-assistant-2jqx.onrender.com/",
  },
];

function HopText({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            io.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className="hop inline-block">
      {[...text].map((c, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export default function Projects() {
  return (
    <div className="w-full">
      <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
        FEATURED WORK
      </p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
        <HopText text="Let’s build awesome things" />
      </h2>

      {/* simple responsive grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md flex flex-col hover:shadow-lg hover:-translate-y-1 transition"
          >
            {/* 👇 image height thoda kam */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* 👇 padding thoda kam */}
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-base md:text-lg font-semibold">{p.title}</h3>
              <p className="flex-1 text-sm text-slate-600">{p.desc}</p>

              {/* 👇 tags thode slimmer */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons row – height & width thoda kam */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 hover:-translate-y-0.5 transition"
                  >
                    🎥 Demo Video
                  </a>
                )}

                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-50 hover:border-emerald-400 hover:-translate-y-0.5 transition"
                  >
                    🔗 Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}