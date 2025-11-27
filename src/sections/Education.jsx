import React, { useEffect } from "react";

const edu = [
  {
    period: "Dec 2022 – Present",
    title: "B.Tech (CSE – Artificial Intelligence)",
    place: "Pranveer Singh Institute of Technology, Kanpur",
    detail: "CGPA 7.59 (till 6th sem)",
    link: "https://drive.google.com/file/d/1O-sUUBuVIxeHrtmEld5j-XNeHhlIBiSe/view?usp=sharing", 
  },
  {
    period: "Mar 2021",
    title: "Class 12 (ISC)",
    place: "Sardar Patel Public School, Kanpur",
    detail: "81.4%",
    link: "https://drive.google.com/file/d/14Y8nkpA0hcditTZorthwHs3tjmrNI9qt/view?usp=sharing", 
  },
  {
    period: "Mar 2019",
    title: "Class 10 (ICSE)",
    place: "Sardar Patel Public School, Kanpur",
    detail: "85.33%",
    link: "https://drive.google.com/file/d/1foT6Yx2VDAXh24J4Ru4dkiAnkaPHzO4O/view?usp=sharing", 
  },
];

export default function Education() {
  useEffect(() => {
    const cards = document.querySelectorAll(".edu-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <div className="w-full">
      <h2 className="mb-4 text-3xl font-bold tracking-tight">Education</h2>
      <div className="relative space-y-4 pl-4">
        {edu.map((e) => (
          <a
            key={e.title}
            href={e.link}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="edu-card relative translate-y-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 opacity-0 shadow-md transition-all duration-500 hover:shadow-lg">
              <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-purple-600" />
              <p className="mb-1 text-xs font-semibold text-purple-600">
                {e.period}
              </p>
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-sm text-slate-600">
                {e.place} • {e.detail}
              </p>
              <p className="mt-1 text-xs font-semibold text-sky-600">
                📎 View result (Drive)
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}