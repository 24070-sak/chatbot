import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contunie from './App';
import rapporterVitauxWeb from './reportWebVitals';

const racine = ReactDOM.createRoot(document.getElementById('root'));
racine.render(
  <React.StrictMode>
    <Contunie />
  </React.StrictMode>
);

// Si vous souhaitez commencer à mesurer les performances de votre application,
// passez une fonction pour enregistrer les résultats (par exemple: rapporterVitauxWeb(console.log))
// ou envoyez vers un point de terminaison d'analyse. En savoir plus: https://bit.ly/CRA-vitals
rapporterVitauxWeb();
