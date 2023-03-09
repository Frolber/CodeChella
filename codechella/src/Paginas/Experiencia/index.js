import bannerVeraoExperiencia from "../../Assets/Banner/Verao/bannerVeraoExperiencia.png";
import BannerApresenta from "../../Componentes/Banner";

const Experiencia = () => {
   return (
      <>
         <BannerApresenta
            imagemBanner={bannerVeraoExperiencia}
            titulo="A Experiência"
         />
         <h1>Isso é uma experiencia!</h1>
      </>
   );
};

export default Experiencia;
