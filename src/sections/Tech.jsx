import React, { useEffect } from "react";

const techData = [
  // ==== Programming Languages ====
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-c-plain colored", label: "C" },
  { icon: "devicon-python-plain colored", label: "Python (Beginner)" },

  // ==== Frontend ====
  { icon: "devicon-html5-plain colored", label: "HTML" },
  { icon: "devicon-css3-plain colored", label: "CSS" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-bootstrap-plain colored", label: "Bootstrap" },
  { icon: "devicon-tailwindcss-plain colored", label: "TailwindCSS" },

  // ==== Backend ====
  { icon: "devicon-nodejs-plain colored", label: "NodeJS" },
  { icon: "devicon-express-original", label: "Express.js" },
  { icon: "devicon-fastapi-plain colored", label: "FastAPI" },

  // ==== Databases ====
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-mysql-plain colored", label: "MySQL" },

  // ==== Tools & Platforms ====
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-github-original", label: "GitHub" },

  // ==== CS Fundamentals (no devicon – text only) ====
  { icon: "custom-icon-dsa", label: "Data Structures & Algorithms" },
  { icon: "custom-icon-oops", label: "OOPs with Java" },
  { icon: "custom-icon-os", label: "Operating System" },
  { icon: "custom-icon-dbms", label: "Database Management System" },
  { icon: "custom-icon-cn", label: "Computer Networks" },

  // ==== AI & Others ====
  { icon: "custom-icon-ai", label: "Artificial Intelligence" },
  { icon: "custom-icon-nlp", label: "Natural Language Processing" },

  // ==== Soft Skills ====
  { icon: "custom-icon-creative", label: "Creative Thinking" },
  { icon: "custom-icon-communication", label: "Effective Communication" },
  { icon: "custom-icon-problem", label: "Problem Solving" },
];

export default function Tech() {
  // slide-up + fade-in animation
  useEffect(() => {
    const cards = document.querySelectorAll(".tech-card");
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
      <div className="mb-6">
        <h2 className="text-3xl font-extrabold tracking-tight">
          Skills &amp; Technologies
        </h2>
        <p className="mt-1 text-slate-500">
          A collection of languages, frameworks, and tools I work with confidently.
        </p>
      </div>

      {/* SINGLE GRID  */}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {techData.map((item, idx) => (
          <div
            key={item.label}
            style={{ transitionDelay: `${idx * 40}ms` }} 
            className="tech-card opacity-0 translate-y-5 transition-all duration-500"
          >
            <div className="bg-gradient-to-r from-purple-500/70 via-pink-500/60 to-amber-400/70 p-[1px] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all">
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                {item.icon ? (
                  <i className={`text-2xl ${item.icon}`} />
                ) : (
                  
                  <span className="text-xl">📚</span>
                )}
                <span className="text-center">{item.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}