import logo from "../../Assets/logoChellaWhite.svg";
import Burger from "./Burger";
import { StyledHeader } from "./style.js";

const Menu = () => {
   return (
      <StyledHeader>
         <div>
            <a href="/">
               <img
                  src={logo}
                  alt="Logo com estilo descontraído escrito CodeChella"
               />
            </a>
         </div>
         <Burger />
      </StyledHeader>
   );
};

export default Menu;
