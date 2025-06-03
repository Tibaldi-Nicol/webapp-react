import React from "react";
import { Link } from "react-router-dom"; // Aggiunto import mancante

/**
 * Componente Header che renderizza la navbar dell'applicazione
 * @returns {JSX.Element} Navbar con il marchio e il link alla homepage
 */
const Header = () => {
  return (
    <nav className="navbar bg-primary mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Bool Books
        </Link>
      </div>
    </nav>
  );
};

export default Header;