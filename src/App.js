import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import translations from "./translations";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Realizations from "./pages/Realizations";
import About from "./pages/About";
import Technologies from "./pages/Technologies"; // „Oferta”
import Contact from "./pages/Contact";

function App() {
  const [lang, setLang] = useState("pl");
  const t = translations[lang];

  return (
    <Router>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/projekty" element={<Projects t={t} />} />
          <Route path="/realizacje" element={<Realizations t={t} />} />
          <Route path="/technologie" element={<Technologies t={t} />} />
          <Route path="/kontakt" element={<Contact t={t} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
