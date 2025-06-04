import React, { useState } from "react";
import { Link } from "react-router-dom";

// Array di film iniziali
const initialMovies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2010, image: "https://picsum.photos/150/200?random=1" },
  { id: 2, title: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", release_year: 2014, image: "https://picsum.photos/150/200?random=2" },
  { id: 3, title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", release_year: 2008, image: "https://picsum.photos/150/200?random=3" },
  { id: 4, title: "The Matrix", director: "Lana & Lilly Wachowski", genre: "Sci-Fi", release_year: 1999, image: "https://picsum.photos/150/200?random=4" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", genre: "Crime", release_year: 1994, image: "https://picsum.photos/150/200?random=5" }
];

const Homepage = () => {
  const [movies] = useState(initialMovies);

  return (
    <>
      <h1 className="text-light text-center bg-dark py-3">🎬 MOVIE MOVES 🎬</h1>
      <h2 className="text-secondary text-center"><i>The Movies List</i></h2>

      <div className="container mt-4">
        <div className="row justify-content-center">
          {movies.map(({ id, title, director, genre, release_year, image }) => (
            <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
              <div className="card bg-secondary text-light">
                <img src={image} alt={title} className="card-img-top rounded" />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{title}</h5>
                  <h6><em>{director}</em></h6>
                  <p>{genre} | {release_year}</p>
                  <Link className="btn btn-dark btn-sm" to={`/movies/${id}`}>
                    🎥 Scopri di più
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
