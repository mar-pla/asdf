import React from "react";

export default function Contact({ t }) {
  return (
    <section className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">{t.contact}</h1>
      <form className="space-y-4">
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          {t.form.send}
        </button>
      </form>
    </section>
  );
}
