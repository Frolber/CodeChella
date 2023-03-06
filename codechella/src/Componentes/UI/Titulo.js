import styled from "styled-components";
import {corTextoVerao} from '../UI/Variaveis.js';

export const Titulo = styled.h1`
   color: ${corTextoVerao};
   font-size: 3.2rem;
   line-height: 4rem;
   text-align: center;
   margin: 0 3%;

   @media screen and (max-width: 520px){
      font-size: 2.2rem;
   }
`