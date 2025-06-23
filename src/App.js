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
    <main className="font-sans px-6 py-8 max-w-4xl mx-auto space-y-16 bg-white rounded-lg shadow-lg">
      <div className="flex justify-end gap-3 mb-6">
        <button
          onClick={() => setLang("pl")}
          className={`px-3 py-1 rounded ${
            lang === "pl" ? "bg-orange-500 text-white font-bold" : "bg-gray-200"
          }`}
        >
          PL
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded ${
            lang === "en" ? "bg-orange-500 text-white font-bold" : "bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-600">{t.hero.title}</h1>
        <p className="text-xl text-gray-700">{t.hero.subtitle}</p>
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-full mt-4">
          {t.hero.cta}
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.projects}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Nowoczesna Willa",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
              desc: "Dom 160 m² z płaskim dachem i tarasem",
            },
            {
              title: "Dom Parterowy",
              img: "https://images.unsplash.com/photo-1572120360610-d971b9c7a081",
              desc: "Projekt ekonomiczny z garażem jednostanowiskowym",
            },
            {
              title: "Styl Skandynawski",
              img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
              desc: "Dom z drewnianą elewacją i dużymi przeszkleniami",
            },
          ].map((project, i) => (
            <div key={i} className="bg-gray-50 rounded-xl shadow p-4">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl h-52 w-full object-cover"
              />
              <h3 className="font-semibold mt-3 text-orange-600">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.realizations}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            "https://images.unsplash.com/photo-1601910872207-047e7b13f5c4",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
            "https://images.unsplash.com/photo-1581090700227-1e8b977ebfba",
          ].map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Inwestycja ${i + 1}`}
              className="rounded-xl shadow object-cover h-48 w-full"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.technologies}</h2>
        <ul className="list-none space-y-4 mt-6 text-gray-700">
          <li className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2599/2599695.png"
              alt="murowana"
              className="w-6 h-6"
            />
            Tradycyjna technologia murowana
          </li>
          <li className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2599/2599691.png"
              alt="szkieletowa"
              className="w-6 h-6"
            />
            Konstrukcja szkieletowa
          </li>
          <li className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2599/2599673.png"
              alt="keramzyt"
              className="w-6 h-6"
            />
            Technologia keramzytowa
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.faq}</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-gray-300 pb-3">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="text-left w-full flex justify-between items-center font-semibold text-gray-800"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="text-sm text-gray-600 mt-2">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.contact}</h2>
        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder={t.form.name}
            className="border border-gray-300 p-2 w-full rounded"
          />
          <input
            type="email"
            placeholder={t.form.email}
            className="border border-gray-300 p-2 w-full rounded"
          />
          <textarea
            placeholder={t.form.message}
            className="border border-gray-300 p-2 w-full rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded"
          >
            {t.form.send}
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
