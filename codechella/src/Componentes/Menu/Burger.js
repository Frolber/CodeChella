import { useState } from "react";
import MenuDireito from "./MenuDireito";
import {StyledBurger} from './style.js'



const Burger = () => {
   const [abrir, setAbrir] = useState(false);

   return (
      <>
         <StyledBurger abrir={abrir} onClick={() => setAbrir(!abrir)}>
            <div />
            <div />
            <div />
         </StyledBurger>
         <MenuDireito abrir={abrir} />
      </>
   );
};

export default Burger;
