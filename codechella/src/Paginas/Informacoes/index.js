import bannerVeraoInfogerais from "../../Assets/Banner/Verao/bannerVeraoInfogerais.png";
import BannerApresenta from "../../Componentes/Banner";

const Informacoes = () => {
   return (
      <>
         <BannerApresenta
            imagemBanner={bannerVeraoInfogerais}
            titulo="Informações Gerais"
         />
         <h1>Isso é a melhor página!</h1>
      </>
   );
};

export default Informacoes;
