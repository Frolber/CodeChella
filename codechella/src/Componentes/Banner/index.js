import styled from "styled-components";
import bannerVerao from "../../Assets/bannerVerao.png";
import {corTextoVerao} from '../UI/Variaveis.js';

const BannerFundo = styled.div`
   width: 100vw;
   height: 17.5rem;
   background-image: url(${(props) => props.imagemBanner});
   background-repeat: no-repeat;
   background-size: cover;
`;

const SloganBanner = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   h1 {
      color: ${corTextoVerao};
      font-size: 3.2rem;
      line-height: 4rem;
      text-align: center;
      margin: 0 3%;

      @media screen and (max-width: 520px){
         font-size: 2.2rem;
      }
   }
`;

const BannerApresenta = () => {
   return (
      <BannerFundo imagemBanner={bannerVerao}>
         <SloganBanner>
            <h1>Boas-vindas ao #CodeChella2023!</h1>
         </SloganBanner>
      </BannerFundo>
   );
};

export default BannerApresenta;
