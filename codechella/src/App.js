import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Experiencia from "./Paginas/Experiencia";
import Informacoes from "./Paginas/Informacoes";
import Ingresso from "./Paginas/Ingresso";
import Inicio from "./Paginas/Inicio";
import MapaDeSetores from "./Paginas/MapaDeSetores";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={ <Inicio />} />
            <Route path="/experiencia" element={ <Experiencia />} />
            <Route path="/mapadesetores" element={ <MapaDeSetores />} />
            <Route path="/informacoes" element={ <Informacoes />} />
            <Route path="/ingresso" element={ <Ingresso />} />
            <Route path="*" element={<div>Página não encontrada :F</div>} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
