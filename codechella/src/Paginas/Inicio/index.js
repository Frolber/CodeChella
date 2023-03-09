import bannerVeraoInicio from "../../Assets/Banner/Verao/bannerVeraoInicio.png";
import pessoasAnimadas from "../../Assets/Banner/Verao/pessoasAnimadas.png";
import BannerApresenta from "../../Componentes/Banner";
import CardGeral from "../../Componentes/CardGeral";

const Inicio = () => {
   return (
      <>
         <BannerApresenta
            imagemBanner={bannerVeraoInicio}
            titulo="Boas-vindas ao #CodeChella2023!"
         />
         <CardGeral
            linkImagem={pessoasAnimadas}
            tituloCard="<11 e 12 de Março> Aluródromo de São Paulo"
            iconeBotao="ticket"
            descricaoBotao="Garanta o seu ingresso"
         >
            Hora de programar nossa memória com novas lembranças! Uma nova
            experiência sobre música, linguagens e, claro, tecnologia! Somos um
            festival diverso, com vários artistas e referências. Divirta-se!
         </CardGeral>
         
      </>
   );
};

export default Inicio;
