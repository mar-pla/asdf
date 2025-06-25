import React from "react";

export default function Technologies({ t }) {
  return (
    <section className="p-8 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">{t.offer}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Technologia murowana",
            img: "https://cdn-icons-png.flaticon.com/128/2599/2599695.png",
            desc: "Najbardziej tradycyjna i powszechnie stosowana metoda budowy domów.",
          },
          {
            title: "Technologia szkieletowa",
            img: "https://cdn-icons-png.flaticon.com/128/2599/2599691.png",
            desc: "Lekka konstrukcja drewniana o wysokiej izolacyjności cieplnej.",
          },
          {
            title: "Technologia keramzytowa",
            img: "https://cdn-icons-png.flaticon.com/128/2599/2599673.png",
            desc: "Prefabrykowane elementy z keramzytu zapewniają szybki montaż i dobrą izolację.",
          },
        ].map((tech, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src={tech.img}
              alt={tech.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
            <p className="text-sm text-gray-600">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
