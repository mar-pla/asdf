import React from "react";

export default function Realizations({ t }) {
  const images = [
    "https://images.unsplash.com/photo-1601910872207-047e7b13f5c4",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    "https://images.unsplash.com/photo-1581090700227-1e8b977ebfba",
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">{t.realizations}</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {images.map((url, i) => (
          <img key={i} src={url} alt={`Inwestycja ${i + 1}`} className="rounded-xl shadow object-cover h-48 w-full" />
        ))}
      </div>
    </section>
  );
}
