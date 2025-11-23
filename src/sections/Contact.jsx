import React from "react";

export default function Contact() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold tracking-tight mb-3">Say Hello!</h2>
      <p className="text-slate-600 mb-6">
        Have a project in mind or just want to say hi?
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=hridayansh3@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800"
        >
          Email Me
        </a>

        <a
          href="#home"
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
        >
          Back to Top
        </a>
        <a
          href="https://leetcode.com/u/hridayansh_g/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
        >
          LeetCode
        </a>
        <a
          href="https://youtube.com/playlist?list=PLLI9msy19uNGck8mjRh4XrdbcMGj10YXd"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
        >
          YouTube
        </a>
      </div>
    </div>
  );
}