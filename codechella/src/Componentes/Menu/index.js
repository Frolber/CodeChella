import styled from 'styled-components';
import logo from '../../Assets/logoChellaWhite.svg';
import {corPrimariaVerao} from '../UI/Variaveis.js';
import Burger from './Burger';



const StyledHeader = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 32px 8.3% ;
   background-color: ${corPrimariaVerao};

   @media screen and (max-width: 800px) {
      flex-direction: column;
      gap: 32px;
      padding: 32px 5%;
   }

   @media screen and (max-width: 520px) {
      flex-direction: row;
   }
`

const Menu = () => {

   return (
      <header>
         <StyledHeader>
            <div>
               <a href='/'>
                  <img src={logo} alt='Logo com estilo descontraído escrito CodeChella'/>
               </a>
            </div>
            <Burger/>
         </StyledHeader>
      </header>
   )
}

export default Menu;