import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente Header che renderizza la navbar dell'applicazione con un nuovo colore
 * @returns {JSX.Element} Navbar con il marchio e il link alla homepage
 */
const Header = () => {
  return (
    <nav className="navbar bg-success mb-4 shadow">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-white fw-bold" to="/">
          🎥 Bool Films
        </Link>
      </div>
    </nav>
  );
};

export default Header;
