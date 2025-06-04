import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente che visualizza la card di un film
 * @param {Object} movie - Oggetto contenente le informazioni del film
 * @returns {JSX.Element} Card con dettagli del film
 */
const MovieCard = ({ movie }) => {
  return (
    <div className="card bg-secondary text-light h-100">
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="card-img-top rounded-top" 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="fw-bold mb-2">{movie.title}</h5>
        <h6 className="mb-2"><em>{movie.director}</em></h6>
        <p className="mb-3 flex-grow-1">{movie.genre} | {movie.release_year}</p>
        <Link className="btn btn-dark btn-sm mt-auto" to={`/movies/${movie.id}`}>
          🎥 Scopri di più
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;