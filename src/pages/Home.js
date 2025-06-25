import React from "react";

export default function Home({ t }) {
  return (
    <section className="text-center space-y-4 mt-10">
      <h1 className="text-4xl font-bold">{t.hero.title}</h1>
      <p className="text-xl">{t.hero.subtitle}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full">{t.hero.cta}</button>
    </section>
  );
}
