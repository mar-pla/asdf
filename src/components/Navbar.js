import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow z-10 p-4 flex justify-between">
      <span className="font-bold">BudDom</span>
      <div className="flex gap-4">
        <Link to="/">Strona główna</Link>
        <Link to="/projekty">Nasze Projekty</Link>
        <Link to="/realizacje">Realizacje</Link>
        <Link to="/technologie">Technologie</Link>
        <Link to="/kontakt">Kontakt</Link>
      </div>
    </nav>
  );
}
