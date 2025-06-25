import React from "react";

export default function Projects({ t }) {
  const projects = [
    {
      title: "Dom nowoczesny z płaskim dachem",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      desc: "160 m², 5 pokoi, duży taras i przeszklenia",
    },
    {
      title: "Dom parterowy z garażem",
      img: "https://st2.depositphotos.com/2249091/5921/i/450/depositphotos_59211501-stock-photo-single-family-home-with-patio.jpg",
      desc: "120 m², ekonomiczny układ, 3 sypialnie",
    },
    {
      title: "Dom w stylu skandynawskim",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      desc: "140 m², drewniana elewacja, nowoczesny styl",
    },
  ];

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">{t.projects}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="shadow rounded-xl overflow-hidden bg-white">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-1">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
