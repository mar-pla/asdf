import React from "react";

export default function Projects({ t }) {
  const projects = [
    {
      title: "Nowoczesna Willa",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      desc: "Dom 160 m² z płaskim dachem i tarasem",
    },
    {
      title: "Dom Parterowy",
      img: "https://projektyzwizja.pl//uploads/projekty/ekonomiczny-5g/ekonomiczny5-garaz-front1-1200_1649071119.jpeg",
      desc: "Projekt ekonomiczny z garażem jednostanowiskowym",
    },
    {
      title: "Styl Skandynawski",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      desc: "Dom z drewnianą elewacją i dużymi przeszkleniami",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">{t.projects}</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <img src={project.img} alt={project.title} className="rounded-xl h-52 w-full object-cover" />
            <h3 className="font-semibold mt-2">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
