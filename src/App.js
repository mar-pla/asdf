import React, { useState } from "react";
import translations from "./translations";

function App() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];
  const [open, setOpen] = useState(null);

  const faqs = t.faqs;

  return (
    <main className="font-sans p-4 max-w-6xl mx-auto space-y-10 bg-[#fff7f0]">
      <div className="flex justify-end gap-2">
        <button onClick={() => setLang("pl")} className={lang === "pl" ? "font-bold text-orange-600" : ""}>PL</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold text-orange-600" : ""}>EN</button>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-orange-600">{t.hero.title}</h1>
        <p className="text-xl">{t.hero.subtitle}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">{t.hero.cta}</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.projects}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
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
            <div key={i} className="bg-white rounded-xl shadow p-4">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl h-52 w-full object-cover"
              />
              <h3 className="font-semibold mt-2">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.realizations}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
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
        <ul className="list-none space-y-3 mt-4">
          <li className="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/128/2599/2599695.png" alt="murowana" className="w-6 h-6" />
            Tradycyjna technologia murowana
          </li>
          <li className="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/128/2599/2599691.png" alt="szkieletowa" className="w-6 h-6" />
            Konstrukcja szkieletowa
          </li>
          <li className="flex items-center gap-3">
            <img src="https://cdn-icons-png.flaticon.com/128/2599/2599673.png" alt="keramzyt" className="w-6 h-6" />
            Technologia keramzytowa
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.faq}</h2>
        <div className="mt-4 space-y-2">
          {faqs.map((item, i) => (
            <div key={i} className="border-b py-3">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="text-left w-full flex justify-between items-center font-semibold"
              >
                <span>{item.q}</span>
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="text-sm text-gray-600 mt-2">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-600">{t.contact}</h2>
        <form className="space-y-4 mt-4">
          <input type="text" placeholder={t.form.name} className="border p-2 w-full" />
          <input type="email" placeholder={t.form.email} className="border p-2 w-full" />
          <textarea placeholder={t.form.message} className="border p-2 w-full" rows="4"></textarea>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">{t.form.send}</button>
        </form>
      </section>
    </main>
  );
}

export default App;