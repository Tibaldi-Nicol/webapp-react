import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

/**
 * Definisce un layout predefinito per l'app, includendo l'header e una sezione principale
 * @returns {JSX.Element} Il layout con l'header e lo spazio per il contenuto dinamico
 */
const DefaultLayout = () => {
  return (
    <>
      {/* Intestazione dell'app */}
      <Header />
      
      {/* Contenitore principale per le pagine */}
      <main className="container">
        {/** Qui verranno renderizzate le pagine cambiate dinamicamente */}
        <Outlet />
      </main>
    </>
  );
};

// Esporta il layout per poterlo usare nelle route
export default DefaultLayout;
