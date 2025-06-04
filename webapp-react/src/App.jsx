// Importa React
import React from "react";

// Importa BrowserRouter, Routes e Route da React Router per la gestione della navigazione
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importa il layout principale dell'app
import DefaultLayout from "./layout/Defaultlayout";

// Importa le pagine che verranno visualizzate nelle route
import Homepage from "../../pages/HomePage"; // Pagina principale con la lista dei film
import MoviePage from "../../pages/MoviePage"; // Pagina di dettaglio per ogni film
import NotFoundPage from "../../pages/NotFoundPages"; // Pagina mostrata quando un URL non esiste

// Componente principale dell'app
function App() {
  return (
    // BrowserRouter gestisce la navigazione dell'app (è il contenitore principale delle route)
    <BrowserRouter>
      {/* Routes è il componente che contiene tutte le route dell'app */}
      <Routes>

        {/* Route principale con un layout definito */}
        {/* Tutte le pagine che fanno parte di DefaultLayout vengono annidate sotto questa route */}
        <Route path="/" element={<DefaultLayout />}>

          {/* Route principale: quando l'utente visita "/" viene mostrata la Homepage */}
          <Route index element={<Homepage />} />

          {/* Route dinamica: mostra la pagina di un film specifico usando l'ID nella URL */}
          <Route path="movies/:id" element={<MoviePage />} />

          {/* Route di fallback: se l'utente visita un URL non esistente, viene mostrata la pagina 404 */}
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Esporta il componente App per essere usato in altre parti del progetto
export default App;
