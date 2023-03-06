import bannerVerao from "../../Assets/bannerVerao.png";
import { Titulo } from "../UI/Titulo";
import { BannerFundo, SloganBanner } from "./style.js";

const BannerApresenta = () => {
   return (
      <BannerFundo imagemBanner={bannerVerao}>
         <SloganBanner>
            <Titulo>Boas-vindas ao #CodeChella2023!</Titulo>
         </SloganBanner>
      </BannerFundo>
   );
};

export default BannerApresenta;
