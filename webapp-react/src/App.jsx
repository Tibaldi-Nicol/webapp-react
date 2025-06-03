import DefaultLayout from "./layout/Defaultlayout"; // Corretto il nome dell'import
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Definisce la route con il layout */}
        <Route element={<DefaultLayout />}> 
          {/* Definisce la route principale (Homepage) */}
          <Route index element={<h1>Homepage</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;