// Importa React, la libreria principale per la creazione dell'interfaccia utente
import React from 'react';

// Importa StrictMode, una modalità speciale che aiuta a identificare potenziali problemi nel codice
import { StrictMode } from 'react';

// Importa createRoot da React DOM per inizializzare il rendering dell'app
import { createRoot } from 'react-dom/client';

// Importa Bootstrap per lo stile, garantendo che la UI utilizzi componenti predefiniti e responsive
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa il file CSS personalizzato dell'app per eventuali stili aggiuntivi
import './index.css';

// Importa il componente principale dell'applicazione
import App from './App';

// ✅ Individua l'elemento con ID "root" nel DOM e lo utilizza come punto di ingresso per il rendering di React
const root = createRoot(document.getElementById('root'));

// ✅ Renderizza l'applicazione dentro StrictMode, che aiuta a identificare errori e cattive pratiche
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
