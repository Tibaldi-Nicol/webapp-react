import React, { useState, useEffect } from "react";
import MovieCard from "../webapp-react/src/components/MovieCard";

// Array statico di film
const initialMovies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2010, image: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2014, image: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", release_year: 2008, image: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "The Matrix", director: "Lana & Lilly Wachowski", genre: "Sci-Fi", release_year: 1999, image: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", release_year: 1994, image: "https://picsum.photos/300/200?random=5" }
];

// Array delle recensioni della community
const communityReviews = [
  { id: 1, movieTitle: "Inception", reviewer: "Marco R.", rating: 5, comment: "Un capolavoro assoluto! Nolan ha superato se stesso con questo film sulla realtà e i sogni." },
  { id: 2, movieTitle: "The Matrix", reviewer: "Giulia M.", rating: 5, comment: "Rivoluzionario! Ha cambiato per sempre il modo di vedere il cinema e la tecnologia." },
  { id: 3, movieTitle: "Interstellar", reviewer: "Luca P.", rating: 4, comment: "Visivamente stupendo e emotivamente coinvolgente. La colonna sonora di Zimmer è perfetta." },
  { id: 4, movieTitle: "Pulp Fiction", reviewer: "Sara T.", rating: 5, comment: "Tarantino al suo meglio. Dialoghi brillanti e una narrazione non lineare geniale." },
  { id: 5, movieTitle: "The Dark Knight", reviewer: "Alessandro C.", rating: 5, comment: "Heath Ledger è stato fenomenale nel ruolo del Joker. Un film indimenticabile." }
];

const Homepage = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [movie, setMovie] = useState(null);
  
  // Funzione che mi recupera l'array che ha l'id passato come parametro
  const fetchMovie = (id) => {
    let foundMovie = null;
    movies.forEach((actualMovie) => {
      if (actualMovie.id === parseInt(id)) {
        foundMovie = actualMovie;
      }
    });
    return foundMovie;
  };

  useEffect(() => {
    // Esempio: recupera il film con id 1 al caricamento della pagina
    const foundMovie = fetchMovie(1);
    setMovie(foundMovie);
  }, []);

  console.log(movie);

  return (
    <div className="container mt-4">
      <h1 className="text-light text-center bg-dark py-3 rounded">🎬 MOVIE MOVES 🎬</h1>
      <h2 className="text-secondary text-center mb-4"><i>The Movies List</i></h2>
      
      {/* Visualizza il film trovato con useEffect */}
      {movie && (
        <div className="alert alert-info mb-4">
          <h5>🎯 Film caricato con useEffect:</h5>
          <strong>{movie.title}</strong> - {movie.director} ({movie.release_year})
        </div>
      )}
            
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-lg-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>

      {/* Sezione Recensioni della Community */}
      <div className="mt-5">
        <h3 className="text-center text-primary mb-4">💬 Our Community Reviews</h3>
        <div className="row g-3">
          {communityReviews.map((review) => (
            <div key={review.id} className="col-12 col-lg-6">
              <div className="card border-primary h-100">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="card-title text-primary fw-bold mb-0">{review.movieTitle}</h6>
                    <div className="text-warning">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="card-text text-muted mb-2">
                    <em>"{review.comment}"</em>
                  </p>
                  <small className="text-secondary">
                    - {review.reviewer}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Sezione per testare la funzione fetchMovie */}
      <div className="mt-5 p-4 bg-light rounded">
        <h4>🔍 Test Funzione Filtro</h4>
        <p>Esempio: <code>fetchMovie(1)</code> restituisce:</p>
        <pre className="bg-dark text-light p-3 rounded">
          {JSON.stringify(fetchMovie(1), null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Homepage;