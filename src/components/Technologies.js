import React from "react";

export default function Technologies({ t }) {
  return (
    <section id="technologies">
      <h2 className="text-2xl font-semibold">{t.technologies}</h2>
      <ul className="list-none space-y-3 mt-4">
        <li className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/2599/2599695.png" alt="murowana" className="w-6 h-6" />
          Tradycyjna technologia murowana
        </li>
        <li className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/2599/2599691.png" alt="szkieletowa" className="w-6 h-6" />
          Konstrukcja szkieletowa
        </li>
        <li className="flex items-center gap-3">
          <img src="https://cdn-icons-png.flaticon.com/128/2599/2599673.png" alt="keramzyt" className="w-6 h-6" />
          Technologia keramzytowa
        </li>
      </ul>
    </section>
  );
}
