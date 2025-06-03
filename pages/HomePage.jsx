import React from "react";

const Homepage = () => {
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
          {/* Card del film */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <img
                src="https://picsum.photos/200/300"
                alt="Movie"
                className="card-img-top"
              />
              <div className="card-body text-center">
                <h3 className="text-primary">Titolo del Film</h3>
                <h4><em>Autore</em></h4>
                <p>Descrizione breve del film.</p>
                <a href="#" className="btn btn-primary">
                  Scopri di più
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
