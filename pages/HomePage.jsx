// Importa React, necessario per creare componenti React
import React, { useEffect, useState } from "react";

// Importa il componente MovieCard che verrà usato per visualizzare ogni film
import MovieCard from "../webapp-react/src/components/MovieCard"; // Assicurati che il percorso sia corretto

// Importa axios per effettuare richieste HTTP al backend
import axios from "axios";

// ✅ Array statico di film come fallback (se il backend non risponde)
// Questo array viene mostrato inizialmente per evitare che la pagina sia vuota
const initialMovies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2010, image: "inception.jpg" },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2014, image: "interstellar.jpg" },
  { id: 3, title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", release_year: 2008, image: "dark_knight.jpg" },
  { id: 4, title: "The Matrix", director: "Lana & Lilly Wachowski", genre: "Sci-Fi", release_year: 1999, image: "matrix.jpg" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", release_year: 1994, image: "pulp_fiction.jpg" }
];

// ✅ Componente Homepage - mostra la lista dei film
const Homepage = () => {
  // Stato per gestire i film ricevuti dall'API
  const [movies, setMovies] = useState(initialMovies);

  // Stato per gestire il caricamento (spinner di attesa)
  const [loading, setLoading] = useState(true);

  // ✅ Effetto che viene eseguito quando il componente viene montato
  // Questo effetto chiama il backend per ottenere la lista aggiornata dei film
  useEffect(() => {
    axios.get("http://localhost:3000/api/films")
      .then((resp) => {
        console.log("Dati ricevuti dal server:", resp.data);

        // Verifica se la risposta contiene un array di film
        if (Array.isArray(resp.data)) {
          setMovies(resp.data); // Imposta lo stato con i film ricevuti
        } else if (resp.data.data && Array.isArray(resp.data.data)) {
          setMovies(resp.data.data); // Alternativa nel caso la struttura della risposta sia diversa
        } else {
          console.log("Formato dati non riconosciuto, uso dati statici.");
        }
      })
      .catch((err) => {
        console.error("Errore nel caricamento dei film:", err);
        console.log("Uso i dati statici come fallback."); // Se il backend non risponde, usa il fallback
      })
      .finally(() => {
        setLoading(false); // Una volta completata la richiesta, il caricamento termina
      });
  }, []); // L'array vuoto significa che l'effetto viene eseguito solo una volta (al primo rendering)

  // ✅ Se i dati sono ancora in fase di caricamento, mostra uno spinner
  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Caricamento...</span>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Ritorna la struttura visibile della Homepage
  return (
    <div className="container mt-5">
      {/* Titolo principale della pagina */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">🎬 MOVIE MOVES 🎬</h1>
        <p className="lead text-muted">The Movies List</p>
      </div>

      {/* Griglia per mostrare tutti i film */}
      <div className="row g-4">
        {movies.map((movie) => (
          // Ogni film viene passato a MovieCard come "props"
          <div key={movie.id} className="col-12 col-md-6 col-lg-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Esporta il componente per poterlo usare in altre parti del progetto
export default Homepage;
