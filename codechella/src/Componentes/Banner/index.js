
import { Titulo } from "../UI/Titulo";
import { BannerFundo, SloganBanner } from "./style.js";

const BannerApresenta = (props) => {
   return (
      <BannerFundo linkImagem={props.imagemBanner}>
         <SloganBanner>
            <Titulo className="tituloBanner">{props.titulo}</Titulo>
         </SloganBanner>
      </BannerFundo>
   );
};

export default BannerApresenta;
