import React from "react";

const items = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "about", label: "About", icon: "👋" },
  { id: "tech", label: "Tech", icon: "🧰" },
  { id: "projects", label: "Projects", icon: "🧪" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "contact", label: "Contact", icon: "✉️" },
];

export default function DockNav({ active, onNavClick }) {
  return (
    <nav className="hidden md:block fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex max-w-[92vw] gap-2 overflow-x-auto
          rounded-[2rem] border border-slate-200
          bg-white/90 backdrop-blur
          px-4 py-1.5 shadow-2xl
        "
      >
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`
                flex items-center gap-2 whitespace-nowrap
                rounded-full px-4 py-1.5
                text-[13px] font-semibold transition-all
                ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}