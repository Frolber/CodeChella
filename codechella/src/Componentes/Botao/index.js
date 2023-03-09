import styled from "styled-components";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { corPrimariaVerao, corPrimariaVeraoHover } from "../UI/Variaveis";

const BotaoTeste = styled.button`
   display: flex;
   align-items: center;
   gap: 1rem;
   background-color: ${corPrimariaVerao};
   color: #fff;
   border: none;
   cursor: pointer;
   padding: 0.5rem 1rem;
   border-radius: 16px;
   box-shadow: 4px 4px 0px 0px black;
   transition: 300ms;
   &:hover{
      background-color: ${corPrimariaVeraoHover};
   }
`;

const Botao = (props) => {
   switch (props.icone) {
      case "ticket":
         return (
            <BotaoTeste>
               {props.children}
               <LocalActivityIcon sx={{ color: "white", fontSize: 32 }} />
            </BotaoTeste>
         );

      case "avançar":
         return (
            <BotaoTeste>
               {props.children}
               <ArrowForwardIcon sx={{ color: "white", fontSize: 32 }} />
            </BotaoTeste>
         );

      case "semIcone":
         return (
            <BotaoTeste>
               {props.children}
            </BotaoTeste>
         );
         default:
            return null;
         
   }
};

export default Botao;
