import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home({ t }) {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "Czy pomagacie w uzyskaniu pozwolenia na budowę?",
      a: "Tak, pomagamy w kompletowaniu dokumentów, kontaktach z urzędem i składaniu wniosków."
    },
    {
      q: "Czy mogę przynieść własny projekt?",
      a: "Tak – adaptujemy projekty gotowe oraz indywidualne, zgodnie z lokalnymi warunkami."
    },
    {
      q: "Na jakim terenie działacie?",
      a: "Obsługujemy całe województwo łódzkie i mazowieckie."
    }
  ];

  const features = [
    {
      title: "Kompleksowa budowa",
      desc: "Zapewniamy kompleksową budowę domów do stanu surowego w oparciu o projekty gotowe oraz projekty indywidualne."
    },
    {
      title: "Bezpłatne kosztorysy",
      desc: "Sporządzamy przejrzyste kosztorysy i oferty wstępne bez żadnych opłat."
    },
    {
      title: "Projektowanie",
      desc: "Projektujemy domy od podstaw, zgodnie z oczekiwaniami klienta oraz warunkami zabudowy."
    },
    {
      title: "Adaptacje",
      desc: "Dostosowujemy gotowe projekty architektoniczne do lokalnych wymagań."
    }
  ];

  return (
    <main className="space-y-12 p-6">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t.hero.title}</h1>
        <p className="text-xl">{t.hero.subtitle}</p>
        <p className="text-md max-w-xl mx-auto text-gray-600">
          Nasza firma specjalizuje się w budowie domów do stanu surowego zamkniętego,
          projektowaniu od podstaw, adaptacjach projektów gotowych oraz kompleksowym
          wsparciu w uzyskaniu pozwolenia na budowę. Działamy na terenie woj. łódzkiego i mazowieckiego.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{t.hero.cta}</button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow p-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-6">{t.projects}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Nowoczesna Willa",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            desc: "Dom 160 m² z płaskim dachem i tarasem"
          }, {
            title: "Dom Parterowy",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            desc: "Projekt ekonomiczny z garażem jednostanowiskowym"
          }, {
            title: "Styl Skandynawski",
            img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
            desc: "Dom z drewnianą elewacją i dużymi przeszkleniami"
          }].map((p, i) => (
            <motion.div
              key={i}
              className="shadow rounded-xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">{t.faq}</h2>
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i} className="border-b pb-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between w-full text-left font-medium"
              >
                <span>{item.q}</span>
                <span>{open === i ? "−" : "+"}</span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={open === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-4">{t.contact}</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder={t.form.name}
            className="border p-2 w-full rounded"
          />
          <input
            type="email"
            placeholder={t.form.email}
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder={t.form.message}
            className="border p-2 w-full rounded"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {t.form.send}
          </button>
        </form>
      </section>
    </main>
  );
}
