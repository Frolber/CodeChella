import styled from "styled-components";
import { fonteMiniTitulo, fonteTexto } from "../../Componentes/UI/Variaveis";

export const CardGeralContainer = styled.article.attrs(props => ({
   invertido: props.invertido || "row",
}))`
   display: flex;
   flex-direction: ${props => props.invertido};
   margin: 4rem 7.5rem;
   justify-content: space-between;
   max-width: 1200px;
   gap: 48px;

   @media screen and (max-width: 900px) {
      flex-direction: column;
   }
`;

export const ImagemArredondada = styled.img`
   border-radius: 16px;
   overflow: hidden;
   width: 100%;
   height: 381px;
   object-fit: cover;
`;

export const CardInformacao = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   gap: 2rem;
`;

export const CardTitulo = styled.h2`
   text-align: center;
   font-family: ${fonteMiniTitulo};
   font-weight: 700;
   font-size: 2rem;
`;

export const CardTexto = styled.p`
   font-family: ${fonteTexto};
   font-weight: 500;
   font-size: 1.25rem;
`;
