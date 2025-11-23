import React from "react";
import me from "../assets/me.jpg";

export default function About() {
  return (
    <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-slate-500">
          ABOUT
        </p>

        <h2 className="font-[var(--headline-font)] text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-tight text-slate-900">
          Turning Vision into{" "}
          <span className="text-red-600">Interactive</span>,{" "}
          <span className="text-red-600">Dynamic</span> &amp;{" "}
          <span className="text-red-600">Scalable</span> Softwares.
        </h2>

        <p className="mt-3 text-[16px] leading-relaxed text-slate-700">
          I’m a final-year <strong>CSE (AI)</strong> student at{" "}
          <strong>PSIT Kanpur</strong> (CGPA <strong>7.54</strong>). I enjoy
          building intelligent, high-performance and user-centric digital
          products—clean, accessible UIs with React and fast, scalable APIs with
          Node/FastAPI, keeping performance & great UX at the core.
        </p>

        <ul className="mt-3 space-y-2 text-[16px] leading-relaxed text-slate-700">
          <li>
            <strong>Core Skills:</strong> Java, DSA, HTML/CSS/JS, React,
            Tailwind/Bootstrap, Node.js/Express, FastAPI, MongoDB, MySQL,
            Git/GitHub.
          </li>

          <li>
            <strong>Career Goal:</strong> Build impactful, user-focused products
            and grow as a strong software engineer.
          </li>

          <li>
            <strong>Current Focus:</strong> Fast APIs, performance optimization,
            AI-augmented applications, and polished micro-interactions.
          </li>

          <li>
            <strong>Extras:</strong> JEE(Main) 83.45 percentile • Strong
            communication • Problem-solving • Continuous learner.
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="mx-auto w-full max-w-[420px] h-[500px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
        <img
          src={me}
          alt="Hridayansh"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}