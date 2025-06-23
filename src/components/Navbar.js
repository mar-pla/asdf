import React from "react";

export default function Navbar({ t }) {
  return (
    <nav className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between">
      <span className="font-bold">BudDom</span>
      <div className="flex gap-4">
        <a href="#projects" className="hover:underline">{t.projects}</a>
        <a href="#technologies" className="hover:underline">{t.technologies}</a>
        <a href="#faq" className="hover:underline">{t.faq}</a>
        <a href="#contact" className="hover:underline">{t.contact}</a>
      </div>
    </nav>
  );
}
