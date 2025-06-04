import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      {/* Icona di errore */}
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="text-dark fw-semibold">Pagina non trovata</h2>

      {/* Messaggio di errore  */}
      <p className="mt-3 text-secondary text-center" style={{ maxWidth: "400px" }}>
        Ci dispiace, ma la pagina che hai cercato non esiste.  
        Controlla l'URL o torna alla Homepage.
      </p>

      {/* Pulsante migliorato  */}
      <Link to="/" className="btn btn-dark px-4 py-2 mt-3 shadow-sm">
        🔙 Torna alla Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
