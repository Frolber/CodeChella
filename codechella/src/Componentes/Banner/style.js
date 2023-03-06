import styled from "styled-components";

export const BannerFundo = styled.div`
   width: 100vw;
   height: 17.5rem;
   background-image: url(${(props) => props.imagemBanner});
   background-repeat: no-repeat;
   background-size: cover;
`;

export const SloganBanner = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;