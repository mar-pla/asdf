
import React, { useState } from "react";
import translations from "./translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Realizations from "./components/Realizations";
import Technologies from "./components/Technologies";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";

function App() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];
  const [open, setOpen] = useState(null);

  const faqs = t.faqs || [];

  return (
    <main className="font-sans p-4 max-w-6xl mx-auto space-y-10">
      <div className="flex justify-end gap-2">
        <button onClick={() => setLang("pl")} className={lang === "pl" ? "font-bold" : ""}>PL</button>
        <button onClick={() => setLang("en")} className={lang === "en" ? "font-bold" : ""}>EN</button>
      </div>

      <Navbar t={t} />
      <Hero t={t} />
      <Projects t={t} />
      <Realizations t={t} />
      <Technologies t={t} />
      <Faq t={t} faqs={faqs} open={open} setOpen={setOpen} />
      <ContactForm t={t} />
    </main>
  );
}

export default App;
