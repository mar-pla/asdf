
import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Dane zostały zapisane (wersja demo)');
    console.log('Form data:', form);
  };
const [open, setOpen] = useState(null);

const faqs = [
  {
    q: "Czy pomagacie w uzyskaniu pozwolenia na budowę?",
    a: "Tak, pomagamy w kompletowaniu dokumentów, kontaktach z urzędem i składaniu wniosków.",
  },
  {
    q: "Czy mogę przynieść własny projekt?",
    a: "Tak – adaptujemy projekty gotowe oraz indywidualne, zgodnie z lokalnymi warunkami.",
  },
  {
    q: "Na jakim terenie działacie?",
    a: "Obsługujemy całe województwo łódzkie i mazowieckie.",
  },
];

  return (
    <div className="space-y-8 p-6 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">ASDF – Budujemy Twoje Marzenia</h1>
        <p className="text-lg text-gray-600">
          Budowa domów, projekty indywidualne, adaptacje i pomoc formalna – woj. łódzkie i mazowieckie
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Bezpłatna wycena
        </button>
      </section>

      {/* O nas */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img
          src="https://source.unsplash.com/600x400/?construction"
          alt="O nas"
          className="rounded-2xl shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Kim jesteśmy?</h2>
          <p>
            Firma ASDF to nowoczesna ekipa budowlana, która łączy świeże podejście z
            wieloletnim doświadczeniem naszych specjalistów. Działamy kompleksowo:
            od projektu po stan surowy zamknięty.
          </p>
        </div>
      </section>

      {/* Projekty */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Nasze Projekty</h2>
        <div className="grid md:grid-cols-3 gap-4">
  {[
    {
      title: "Nowoczesna Willa",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      desc: "Dom 160 m² z płaskim dachem i tarasem",
    },
    {
      title: "Dom Parterowy",
      img: "https://images.unsplash.com/photo-1572120360610-d971b9c7a081",
      desc: "Projekt ekonomiczny z garażem jednostanowiskowym",
    },
    {
      title: "Styl Skandynawski",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      desc: "Dom z drewnianą elewacją i dużymi przeszkleniami",
    },
  ].map((project, i) => (
    <div key={i} className="bg-white rounded-xl shadow p-4">
      <img
        src={project.img}
        alt={project.title}
        className="rounded-xl h-52 w-full object-cover"
      />
      <h3 className="font-semibold mt-2">{project.title}</h3>
      <p className="text-sm text-gray-500">{project.desc}</p>
    </div>
  ))}
</div>
      </section>

      {/* Realizacje */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Zrealizowane Inwestycje</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
  "https://images.unsplash.com/photo-1601910872207-047e7b13f5c4", // budowa domu
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // konstrukcja
  "https://images.unsplash.com/photo-1581090700227-1e8b977ebfba", // prace murarskie
].map((url, i) => (
  <img
    key={i}
    src={url}
    alt={`Inwestycja ${i + 1}`}
    className="rounded-xl shadow object-cover h-48 w-full"
  />
))}
        </div>
      </section>

      {/* Technologie */}
      <section className="space-y-4">
  <h2 className="text-2xl font-semibold">Technologie Budowy</h2>
  <ul className="list-none space-y-3">
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

      {/* FAQ */}
      <section className="space-y-4">
  <h2 className="text-2xl font-semibold">Najczęstsze pytania</h2>
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
</section>

      {/* Formularz */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Formularz Wyceny</h2>
        <div className="grid gap-2 max-w-xl mx-auto">
          <input
            name="name"
            placeholder="Imię i nazwisko"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            placeholder="Adres e-mail"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Opis projektu / pytanie"
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Zapisz dane (demo)
          </button>
        </div>
      </section>

      {/* Kontakt */}
      <section className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <p>Email: kontakt@asdf.pl</p>
        <p>Tel: +48 123 456 789</p>
      </section>
    </div>
  );
}
