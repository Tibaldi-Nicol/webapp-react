// Importa il modulo React per costruire il componente
import React from "react";

// Importa Link da React Router per permettere la navigazione
import { Link } from "react-router-dom";

// Componente NotFoundPage: viene mostrato quando l'utente accede a una pagina non esistente
const NotFoundPage = () => {
  return (
    // Contenitore principale - Full-screen (vh-100) con allineamento verticale e sfondo chiaro
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      
      {/* Testo grande per indicare errore 404 */}
      <h1 className="display-1 text-danger fw-bold">404</h1>

      {/* Messaggio chiaro per informare l'utente che la pagina non è stata trovata */}
      <h2 className="text-dark fw-semibold">Pagina non trovata</h2>

      {/* Testo descrittivo con un massimo di 400px di larghezza per una migliore leggibilità */}
      <p className="mt-3 text-secondary text-center" style={{ maxWidth: "400px" }}>
        Ci dispiace, ma la pagina che hai cercato non esiste.  
        Controlla l'URL o torna alla Homepage.
      </p>

      {/* Pulsante per tornare alla Homepage - Usa Link di React Router per navigare senza ricaricare */}
      <Link to="/" className="btn btn-dark px-4 py-2 mt-3 shadow-sm">
        🔙 Torna alla Homepage
      </Link>
    </div>
  );
};

// Esporta il componente per poterlo usare nelle route dell'app
export default NotFoundPage;
