import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ t, lang, setLang }) {
  return (
    <nav className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between items-center">
      <span className="font-bold">BudDom</span>
      <div className="flex gap-4 items-center">
        <Link to="/">{lang === "pl" ? "Strona główna" : "Home"}</Link>
        <Link to="/projekty">{t.projects}</Link>
        <Link to="/realizacje">{t.realizations}</Link>
        <Link to="/oferta">{t.offer}</Link>
        <Link to="/kontakt">{t.contact}</Link>
        <Link to="/about">{t.about}</Link>
        <div className="ml-4 space-x-1">
          <button onClick={() => setLang("pl")} className={lang === "pl" ? "font-bold" : ""}>PL</button>
          <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : ""}>EN</button>
        </div>
      </div>
    </nav>
  );
}
