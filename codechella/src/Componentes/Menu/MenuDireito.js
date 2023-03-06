import styled from "styled-components";
import { corPrimariaVerao } from "../UI/Variaveis.js";

const MenuLinks = styled.div`
   display: flex;
   gap: 32px;
   margin-left: 2%;

   @media screen and (max-width: 800px) {
      margin-left: 0;
   }

   @media screen and (max-width: 520px) {
      flex-flow: column nowrap;
      background-color: ${corPrimariaVerao};
      padding: 1rem;
      gap: 0;
      position: fixed;
      transform: ${({ abrir }) =>
         abrir ? "translateX(0)" : "translateX(100%)"};
      top: 90px;
      right: 0;
      transition: transform 300ms ease-in-out;
   }
`;

const LinkMenu = styled.a`
   font-family: "Raleway", sans-serif;
   font-size: 1.25rem;
   font-weight: 700;
   color: #fff;
   text-decoration: none;
   text-align: center;

   @media screen and (max-width: 520px) {
      padding: 1rem 0;
   }
`;

const DetalheLinkMenu = styled.div`
   display: none;

   @media screen and (max-width: 520px) {
      height: 1px;
      background-color: white;
      width: 100%;
      display: block;
   }

`

const MenuDireito = ({ abrir }) => {
   return (
      <MenuLinks abrir={abrir}>
         <LinkMenu href="/experiencia">A experiência</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/mapadesetores">Mapa de Setores</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/Informacoes">Informações</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/Ingresso">Ingresso</LinkMenu>
      </MenuLinks>
   );
};

export default MenuDireito;
