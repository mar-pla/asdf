import React, { useState } from "react";
import translations from "./translations";

function App() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: t.faqs?.[0]?.q || "Czy pomagacie w uzyskaniu pozwolenia na budowę?",
      a: t.faqs?.[0]?.a || "Tak, pomagamy w kompletowaniu dokumentów, kontaktach z urzędem i składaniu wniosków.",
    },
    {
      q: t.faqs?.[1]?.q || "Czy mogę przynieść własny projekt?",
      a: t.faqs?.[1]?.a || "Tak – adaptujemy projekty gotowe oraz indywidualne, zgodnie z lokalnymi warunkami.",
    },
    {
      q: t.faqs?.[2]?.q || "Na jakim terenie działacie?",
      a: t.faqs?.[2]?.a || "Obsługujemy całe województwo łódzkie i mazowieckie.",
    },
  ];

  return (
    <main className="font-sans p-4 max-w-3xl mx-auto space-y-10">
      <div className="flex justify-end gap-2">
        <button onClick={() => setLang("pl")} className={lang === "pl" ? "font-bold" : ""}>PL</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : ""}>EN</button>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">{t.hero.title}</h1>
        <p className="text-xl text-gray-700">{t.hero.subtitle}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{t.hero.cta}</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700">{t.projects}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {[
            {
              title: "Nowoczesna Willa",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              desc: "Dom 160 m² z płaskim dachem i tarasem",
            },
            {
              title: "Dom Parterowy",
              img: "https://images.unsplash.com/photo
