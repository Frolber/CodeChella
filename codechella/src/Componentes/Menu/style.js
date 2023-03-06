import styled from "styled-components";
import { corPrimariaVerao } from "../UI/Variaveis.js";

//Estilos do Burger.

export const StyledBurger = styled.div`
   width: 2rem;
   height: 2rem;
   position: fixed;
   top: 50px;
   right: 5%;
   display: none;

   @media screen and (max-width: 520px) {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
   }

   div {
      width: 2rem;
      height: 0.25rem;
      background-color: #fff;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 300ms ease-in-out;

      &:nth-child(1) {
         transform: ${({ abrir }) => (abrir ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
         transform: ${({ abrir }) =>
            abrir ? "translateX(100%)" : "translateX(0)"};
         opacity: ${({ abrir }) => (abrir ? 0 : 1)};
      }

      &:nth-child(3) {
         transform: ${({ abrir }) => (abrir ? "rotate(-45deg)" : "rotate(0)")};
      }
   }
`;

//Estilos do index.

export const StyledHeader = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 32px 8.3%;
   background-color: ${corPrimariaVerao};

   @media screen and (max-width: 900px) {
      flex-direction: column;
      gap: 32px;
      padding: 32px 5%;
   }

   @media screen and (max-width: 520px) {
      flex-direction: row;
   }
`;

//Estilos do Menu direito.

export const MenuLinks = styled.div`
   display: flex;
   gap: 32px;
   margin-left: 2%;
   align-items: center;

   @media screen and (max-width: 800px) {
      margin-left: 0;
   }

   @media screen and (max-width: 520px) {
      border-top: 3px solid #fff;
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

export const LinkMenu = styled.a`
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

export const DetalheLinkMenu = styled.div`
   display: none;

   @media screen and (max-width: 520px) {
      height: 1px;
      background-color: white;
      width: 100%;
      display: block;
   }
`;
