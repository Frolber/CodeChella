import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Experiencia from "./Paginas/Experiencia";
import Informacoes from "./Paginas/Informacoes";
import Ingresso from "./Paginas/Ingresso";
import Inicio from "./Paginas/Inicio";
import MapaDeSetores from "./Paginas/MapaDeSetores";
import { GlobalStyle } from "./Componentes/GlobalStyle.js";
import BannerApresenta from "./Componentes/Banner";

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Menu />
         <body>
         <BannerApresenta />

         <Routes>
            <Route path="/" element={ <Inicio />} />
            <Route path="/experiencia" element={ <Experiencia />} />
            <Route path="/mapadesetores" element={ <MapaDeSetores />} />
            <Route path="/informacoes" element={ <Informacoes />} />
            <Route path="/ingresso" element={ <Ingresso />} />
            <Route path="*" element={<div>Página não encontrada :F</div>} />
         </Routes>
         </body>
      </BrowserRouter>
      
   );
}

export default App;
