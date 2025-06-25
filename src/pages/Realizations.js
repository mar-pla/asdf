import React from "react";

export default function Realizations({ t }) {
  const realizations = [
    {
      img: "https://st2.depositphotos.com/2249091/5921/i/450/depositphotos_59211501-stock-photo-single-family-home-with-patio.jpg",
      desc: "Realizacja pod Łodzią – dom piętrowy, 180 m², stan surowy zamknięty",
    },
    {
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      desc: "Inwestycja w Skierniewicach – dom parterowy, 130 m², technologia szkieletowa",
    },
    {
      img: "https://st2.depositphotos.com/2249091/5921/i/450/depositphotos_59211501-stock-photo-single-family-home-with-patio.jpg",
      desc: "Dom w stylu klasycznym – projekt indywidualny, Warszawa",
    },
  ];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">{t.realizations}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {realizations.map((item, i) => (
          <div key={i} className="shadow rounded-xl overflow-hidden bg-white">
            <img
              src={item.img}
              alt={`Realizacja ${i + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
