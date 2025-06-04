// Importa React per la creazione del componente
import React from "react";

// Importa Link da React Router per permettere la navigazione interna
import { Link } from "react-router-dom";

/**
 * Componente che visualizza la card di un film
 * @param {Object} movie - Oggetto contenente le informazioni del film
 * @returns {JSX.Element} Card con dettagli del film
 */
const MovieCard = ({ movie }) => {
  return (
    // ✅ Contenitore principale della card con un'ombra per un effetto visivo più elegante
    <div className="card h-100 shadow-sm">

      {/* ✅ Se il film ha un'immagine nel database, usa quella. 
          Se l'immagine non è presente, carica un'immagine casuale di Picsum per evitare uno spazio vuoto */}
      <img 
        src={movie.image || `https://picsum.photos/300/200?random=${movie.id}`} 
        className="card-img-top" // Classi di Bootstrap per formattare l'immagine
        alt={movie.title} // Testo alternativo per accessibilità
        style={{ height: '200px', objectFit: 'cover' }} // Mantiene l'immagine proporzionata senza deformarla
      />
      
      {/* ✅ Contenitore interno per il testo e le informazioni del film */}
      <div className="card-body d-flex flex-column">

        {/* ✅ Titolo del film, mostrato in grande */}
        <h5 className="card-title">{movie.title}</h5>

        {/* ✅ Nome del regista, mostrato in testo più piccolo */}
        <p className="card-text text-muted">{movie.director}</p>

        {/* ✅ Genere e anno di uscita del film, formattati in modo compatto */}
        <p className="card-text">
          <small className="text-muted">{movie.genre} | {movie.release_year}</small>
        </p>
        
        {/* ✅ Pulsante per accedere ai dettagli del film */}
        <div className="mt-auto">
          <Link 
            to={`/movies/${movie.id}`} // Genera un link dinamico basato sull'ID del film
            className="btn btn-primary w-100" // Stile del bottone
          >
            🎥 Scopri di più
          </Link>
        </div>

      </div>
    </div>
  );
};

// ✅ Esporta il componente per poterlo usare in Homepage e altre parti del progetto
export default MovieCard;
