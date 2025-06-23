
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
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-white rounded-xl shadow p-4">
              <img
                src={`https://source.unsplash.com/400x300/?house,${p}`}
                alt={`Projekt ${p}`}
                className="rounded-xl"
              />
              <h3 className="font-semibold mt-2">Projekt Domu {p}</h3>
              <p className="text-sm text-gray-500">100–160 m² · Nowoczesna bryła</p>
            </div>
          ))}
        </div>
      </section>

      {/* Realizacje */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Zrealizowane Inwestycje</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[4, 5, 6].map((r) => (
            <img
              key={r}
              src={`https://source.unsplash.com/400x300/?home,${r}`}
              alt={`Realizacja ${r}`}
              className="rounded-xl shadow"
            />
          ))}
        </div>
      </section>

      {/* Technologie */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Technologie Budowy</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Tradycyjna technologia murowana</li>
          <li>Konstrukcja szkieletowa</li>
          <li>Technologia keramzytowa</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Najczęstsze pytania</h2>
        <p className="text-sm">Czy pomagacie w uzyskaniu pozwolenia na budowę? – Tak.</p>
        <p className="text-sm">Czy można dostarczyć własny projekt? – Oczywiście.</p>
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
