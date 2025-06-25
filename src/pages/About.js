import React from "react";

export default function About({ t }) {
  return (
    <section className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">{t.about}</h1>
      <p className="text-gray-700 text-lg">
        Firma ASDF to zespół doświadczonych specjalistów z branży budowlanej.
        Choć sama marka jest nowa, nasz zespół posiada ponad 15 lat doświadczenia
        w realizacji inwestycji mieszkaniowych. Specjalizujemy się w budowie domów
        jednorodzinnych do stanu surowego zamkniętego, kompleksowej obsłudze formalnej
        oraz adaptacji projektów.
      </p>
      <img
        src="https://images.unsplash.com/photo-1581090700227-1e8b977ebfba"
        alt="O nas"
        className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
      />
    </section>
  );
}
