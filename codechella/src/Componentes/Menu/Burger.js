import styled from "styled-components";
import { useState } from "react";
import MenuDireito from "./MenuDireito";

const StyledBurger = styled.div`
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
