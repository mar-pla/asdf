import React, { useState } from "react";

export default function ContactForm({ t }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">{t.contact}</h2>
      <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
        <input type="text" placeholder={t.form.name} className="border p-2 w-full" />
        <input type="email" placeholder={t.form.email} className="border p-2 w-full" />
        <textarea placeholder={t.form.message} className="border p-2 w-full" rows="4"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">{t.form.send}</button>
        {submitted && <p className="text-green-600">{t.form.send} ✓</p>}
      </form>
    </section>
  );
}
