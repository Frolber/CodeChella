import styled from "styled-components";

export const BannerFundo = styled.div`
   width: 100vw;
   height: 17.5rem;
   background-image: url(${(props) => props.linkImagem});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center center;
   background-color: rgba(255,255,255,0.4);
   background-blend-mode: screen;
`;

export const SloganBanner = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   .tituloBanner {
      margin: 92px 3%;
   }
`;