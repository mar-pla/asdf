import React from "react";

export default function Faq({ t, faqs, open, setOpen }) {
  return (
    <section id="faq">
      <h2 className="text-2xl font-semibold">{t.faq}</h2>
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
  );
}
