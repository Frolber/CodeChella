import bannerVeraoIngresso from "../../Assets/Banner/Verao/bannerVeraoIngresso.png";
import BannerApresenta from "../../Componentes/Banner";

const Ingresso = () => {
   return (
      <>
         <BannerApresenta
            imagemBanner={bannerVeraoIngresso}
            titulo="Ingresso"
         />
         <h1>Isso é um ingresso!</h1>
      </>
   );
};

export default Ingresso;