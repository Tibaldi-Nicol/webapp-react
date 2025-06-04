import React, { useState } from "react";
import MovieCard from "../webapp-react/src/components/MovieCard";

// Array statico di film
const initialMovies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2010, image: "https://picsum.photos/300/200?random=1" },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2014, image: "https://picsum.photos/300/200?random=2" },
  { id: 3, title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", release_year: 2008, image: "https://picsum.photos/300/200?random=3" },
  { id: 4, title: "The Matrix", director: "Lana & Lilly Wachowski", genre: "Sci-Fi", release_year: 1999, image: "https://picsum.photos/300/200?random=4" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", release_year: 1994, image: "https://picsum.photos/300/200?random=5" }
];

const Homepage = () => {
  const [movies] = useState(initialMovies);

  return (
    <div className="container mt-4">
      <h1 className="text-light text-center bg-dark py-3 rounded">🎬 MOVIE MOVES 🎬</h1>
      <h2 className="text-secondary text-center mb-4"><i>The Movies List</i></h2>
            
      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-lg-4">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
