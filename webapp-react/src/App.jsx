import DefaultLayout from "./layout/Defaultlayout"; // Corretto il nome dell'import
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../../pages/HomePage";
import MoviePage from "../../pages/MoviePage";
import NotFoundPages from "../../pages/NotFoundPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Definisce la route con il layout */}
        <Route element={<DefaultLayout />}> 
          {/* Definisce la route principale (Homepage) */}
          <Route index element={<Homepage/>} />
          <Route path="/movies/:id" element={<MoviePage/>}></Route>
          <Route path="*" element={<NotFoundPages/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;