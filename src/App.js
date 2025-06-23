import React, { useState } from "react";
import translations from "./translations";

function App() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];

  return (
    <main className="font-sans p-4 max-w-4xl mx-auto space-y-10">
      <div className="flex justify-end gap-2">
        <button onClick={() => setLang("pl")} className={lang === "pl" ? "font-bold" : ""}>PL</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : ""}>EN</button>
      </div>

      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t.hero.title}</h1>
        <p className="text-xl">{t.hero.subtitle}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{t.hero.cta}</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t.services}</h2>
        <ul className="list-disc list-inside">
          <li>Budowa domów do stanu surowego zamkniętego</li>
          <li>Projekty indywidualne</li>
          <li>Adaptacja gotowych projektów</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t.contact}</h2>
        <form className="space-y-4">
          <input type="text" placeholder={t.form.name} className="border p-2 w-full" />
          <input type="email" placeholder={t.form.email} className="border p-2 w-full" />
          <textarea placeholder={t.form.message} className="border p-2 w-full" rows="4"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{t.form.send}</button>
        </form>
      </section>
    </main>
  );
}

export default App;