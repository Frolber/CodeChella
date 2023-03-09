import bannerVeraoMapa from "../../Assets/Banner/Verao/bannerVeraoMapa.png";
import BannerApresenta from "../../Componentes/Banner";

const MapaDeSetores = () => {
   return (
      <>
         <BannerApresenta
            imagemBanner={bannerVeraoMapa}
            titulo="Mapa de setores"
         />
         <h1>Isso é um mapa de setores!</h1>
      </>
   );
};

export default MapaDeSetores;