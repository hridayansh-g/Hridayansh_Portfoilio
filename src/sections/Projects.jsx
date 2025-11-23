import React, { useEffect } from "react";

const projects = [
  {
    title: "ShopGenie – Smart In-Store Shopping Assistant",
    desc: "AI-powered retail app with live stock, in-store maps & QR self-checkout.",
    tags: ["React Native", "TypeScript", "Node.js", "Express", "MongoDB"],
    image:
      "src/assets/x.png",
    demoUrl: "https://youtu.be/3JlimatB304?si=iRgwkHHKbrqRt-Q7",
  },
  {
    title: "Falacie-s – Emotion-Based Movie Recommender",
    desc: "Detects facial emotions (OpenCV/DeepFace) and recommends movies via TMDB.",
    tags: ["React", "Tailwind", "FastAPI", "Python", "TMDB"],
    image:
      "src/assets/c.png",
    demoUrl: "https://youtu.be/oadANaaW_RM?si=QJZ1hSo1Qdz6GW7w",
  },
  {
    title: "Jarvis – AI-Powered Voice Assistant",
    desc: "Multilingual desktop voice assistant (English/Hindi/Hinglish).",
    tags: ["Python", "Cohere AI", "Eel", "gTTS"],
    image:
      "src/assets/preview1.png",
    demoUrl: "https://youtu.be/lvYUVkUco-k?si=XJOT1QQrOjqxsw1M",
  },
  {
    title: "Doc Summary Assistant – AI PDF & Image Summarizer",
    desc: "Upload PDFs or images → OCR + AI summary using FastAPI & Cohere/OpenAI backend.",
    tags: ["FastAPI", "Cohere/OpenAI", "OCR", "PyPDF", "Vanilla JS", "HTML/CSS"],
    image:
      "src/assets/b.png",
    demoUrl: "https://github.com/hridayansh-g/doc-summary-assistant",
  },
];

function HopText({ text }) {
  const ref = React.useRef(null);

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

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card flex flex-col hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col space-y-2 p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="flex-1 text-sm text-slate-600">{p.desc}</p>

              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="mt-1 text-xs font-semibold text-sky-600">
                ▶ Watch Demo
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}