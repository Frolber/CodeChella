import logo from "../../Assets/logoChellaWhite.svg";
import Burger from "./Burger";
import { Cabecalho, MenuEstilizado } from "./style.js";

const Menu = () => {
   return (
      <Cabecalho>
         <MenuEstilizado>
            <div>
               <a href="/">
                  <img
                     src={logo}
                     alt="Logo com estilo descontraído escrito CodeChella"
                  />
               </a>
            </div>
            <Burger />
         </MenuEstilizado>
      </Cabecalho>
   );
};

export default Menu;
