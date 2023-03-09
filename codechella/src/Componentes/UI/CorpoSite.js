import styled from "styled-components";
import {
   corUmGradienteVerao,
   corDoisGradienteVerao,
   corTresGradienteVerao,
} from "./Variaveis";

export const CorpoSite = styled.main`
   height: 100vh;
   background-image: linear-gradient(
      ${corUmGradienteVerao},
      ${corDoisGradienteVerao},
      ${corTresGradienteVerao}
   );
   display: flex;
   flex-direction: column;
   align-items: center;
`;
