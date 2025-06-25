import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Realizations from "./pages/Realizations";
import Technologies from "./pages/Technologies";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekty" element={<Projects />} />
          <Route path="/realizacje" element={<Realizations />} />
          <Route path="/technologie" element={<Technologies />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
