// Importa React per la creazione del componente
import React, { useEffect, useState } from "react";

// Importa useParams per leggere i parametri della URL, e Link per la navigazione interna con React Router
import { useParams, Link } from "react-router-dom";

// Importa axios per effettuare richieste HTTP al backend
import axios from "axios";

// Componente principale che mostra i dettagli di un singolo film
const MoviePage = () => {
  // Legge l'ID del film dalla URL (es: /movies/1 → id sarà "1")
  const { id } = useParams();

  // Stato per memorizzare i dati del film ricevuti dall'API
  const [movie, setMovie] = useState(null);

  // Stato per gestire il caricamento dei dati (mentre aspettiamo la risposta del server)
  const [loading, setLoading] = useState(true);

  // Stato per gestire eventuali errori (es. film non trovato)
  const [error, setError] = useState(null);

  // Effettua una chiamata API quando il componente viene montato (o quando l'ID del film cambia)
  useEffect(() => {
    // Funzione asincrona per recuperare i dettagli del film
    const fetchMovie = async () => {
      try {
        // Effettua una richiesta GET al backend usando axios
        const resp = await axios.get(`http://localhost:3000/api/films/${id}`);

        // Log dei dati ricevuti per verificare che l'immagine sia presente
        console.log("Dettaglio film ricevuto:", resp.data);

        // Imposta i dati del film nello stato
        setMovie(resp.data);
      } catch (err) {
        // Se la richiesta fallisce (es: film non esistente), gestisce l'errore
        console.error("Errore nel caricamento del film:", err);
        setError("Film non trovato");
      } finally {
        // Dopo la richiesta, disattiva lo stato di caricamento
        setLoading(false);
      }
    };

    // Chiama la funzione per recuperare i dati del film
    fetchMovie();
  }, [id]); // Usa "id" come dipendenza: se cambia, ricarica i dati

  // Se il film è ancora in fase di caricamento, mostra un'animazione di caricamento
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </div>
      </div>
    );
  }

  // Se il film non è stato trovato o c'è stato un errore, mostra un messaggio di avviso
  if (error || !movie) {
    return (
      <div className="container mt-5 text-center">
        <h2 className="text-danger">❌ Film non trovato</h2>
        <p>Il film che stai cercando non esiste.</p>

        {/* Pulsante per tornare alla Homepage */}
        <Link to="/" className="btn btn-primary">
          🔙 Torna alla Homepage
        </Link>
      </div>
    );
  }

  // Se i dati sono stati caricati correttamente, mostra le informazioni del film
  return (
    <div className="container mt-5">
      <div className="row">
        
        {/* Colonna di sinistra con l'immagine del film */}
        <div className="col-md-4 text-center">
          <img 
            src={movie.image} // Percorso dell'immagine ricevuto dall'API
            alt={movie.title} // Testo alternativo per migliorare l'accessibilità
            className="img-fluid rounded shadow" // Stile dell'immagine
          />
        </div>

        {/* Colonna di destra con i dettagli del film */}
        <div className="col-md-8">
          <h1 className="display-4 mb-3">{movie.title}</h1>

          <div className="mb-4">
            <h5 className="text-muted">🎬 Dettagli del Film</h5>
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p><strong>Anno di uscita:</strong> {movie.release_year}</p>
          </div>

          {/* Se il film ha una descrizione, viene mostrata */}
          {movie.abstract && (
            <div className="mb-4">
              <h5 className="text-muted">📝 Descrizione</h5>
              <p>{movie.abstract}</p>
            </div>
          )}

          {/* Sezione Recensioni - Mostra le recensioni degli utenti se presenti */}
          <div className="mt-5">
            <h3 className="text-primary">💬 Recensioni della Community</h3>

            {/* Verifica se il film ha recensioni - Se sì, le mostra in una lista */}
            {movie.reviews?.length > 0 ? (
              <div className="row g-3">
                {movie.reviews.map((review) => (
                  <div key={review.id} className="col-12">
                    <div className="card border-primary">
                      <div className="card-body">
                        <h6 className="text-primary fw-bold">
                          {review.name} - ⭐{review.vote}
                        </h6>
                        <p className="text-muted"><em>"{review.text}"</em></p>
                        <small className="text-secondary">
                          🕒 {new Date(review.created_at).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">Nessuna recensione disponibile.</p>
            )}
          </div>

          {/* Pulsanti di navigazione */}
          <div className="d-flex gap-2 mt-4">
            <Link to="/" className="btn btn-secondary">
              🔙 Torna alla Lista
            </Link>
            <button className="btn btn-primary">
              ⭐ Aggiungi ai Preferiti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Esporta il componente per poterlo usare nel sistema di routing
export default MoviePage;
