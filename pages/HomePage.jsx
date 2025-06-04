import React, { useState } from "react";
import { Link } from "react-router-dom";

// Array di oggetti che rappresentano i film iniziali
const initialMovies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    release_year: 2010,
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    id: 2,
    title: "Interstellar",
    director: "Christopher Nolan",
    genre: "Sci-Fi",
    release_year: 2014,
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    genre: "Action",
    release_year: 2008,
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    id: 4,
    title: "The Matrix",
    director: "Lana & Lilly Wachowski",
    genre: "Sci-Fi",
    release_year: 1999,
    image: "https://picsum.photos/200/300?random=4"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    genre: "Crime",
    release_year: 1994,
    image: "https://picsum.photos/200/300?random=5"
  }
];

const Homepage = () => {
  // Stato per gestire l'elenco dei film
  const [movies, setMovies] = useState(initialMovies);

  return (
    <>
      {/* Titolo principale */}
      <h1 className="text-primary text-center">MOVIE MOVES</h1>
      <h2 className="text-center">
        <i>The Movies List</i>
      </h2>

      {/* Sezione per i film */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {/* Mappa i film e li visualizza come card */}
          {movies.map((movie) => (
            <div key={movie.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img src={movie.image} alt={movie.title} className="card-img-top" />
                <div className="card-body text-center">
                  <h3 className="text-primary">{movie.title}</h3>
                  <h4><em>{movie.director}</em></h4>
                  <p>{movie.genre} | {movie.release_year}</p>
                  <Link className="btn btn-primary" to={`/movies/${movie.id}`}>
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
