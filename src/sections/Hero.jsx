import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex flex-col gap-6">
      {/* Heading */}
      <p className="text-[34px] leading-[2.5rem] font-normal text-slate-900 font-display">
        Hello! I'm
      </p>

      {/* Name with gradient glow */}
      <h1 className="relative font-display font-normal text-[48px] md:text-[72px] lg:text-[96px] leading-none tracking-tight">
        <span className="absolute -inset-y-3 -inset-x-6 -z-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-40 blur-3xl" />
        <span className="text-purple-600">Hridayansh Gupta</span>
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-base md:text-lg font-subtitle font-medium leading-7 text-zinc-800">
        Final-year CSE (AI) student who loves to code and create delightful softwares...
      </p>

      {/* Buttons */}
      <div className="mt-3 flex flex-wrap gap-3">
        {/* Resume Clickable */}
        <a
          href="https://drive.google.com/file/d/11wfYh-RCaB1tATqDZu991HnbHG7Tl_1F/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-[14px] bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-slate-800 transition"
        >
        Resume
        </a>

        {/* Scroll to Projects */}
        <a
          href="#projects"
          className="inline-flex items-center rounded-[14px] border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
        >
          🚀 See Projects
        </a>
      </div>

      {/* Social links */}
      <div className="mt-3 flex flex-wrap gap-5 text-sm text-slate-600">
        
        {/* GitHub */}
        <a
          href="https://github.com/hridayansh-g"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-slate-900 transition"
        >
          <Github size={20} strokeWidth={2} />
          GitHub
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/hridayansh-gupta/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-slate-900 transition"
        >
          <Linkedin size={20} strokeWidth={2} />
          LinkedIn
        </a>

        {/* Email – Opens Gmail compose */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hridayansh3@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-slate-900 transition"
        >
          <Mail size={20} strokeWidth={2} />
          Email
        </a>
      </div>
    </div>
  );
}