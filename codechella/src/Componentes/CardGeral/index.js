import Botao from "../Botao";
import { CardGeralContainer, CardInformacao, CardTexto, CardTitulo, ImagemArredondada } from "./style";

//invertido precisa ser em row-reverse quando precisar.
const CardGeral = (props) => {
   return(
      <CardGeralContainer invertido={props.invertido}>
         <p>{props.invertido}</p>
            <ImagemArredondada src={props.linkImagem} alt='teste' />
            <CardInformacao>
               <CardTitulo> 
                  {props.tituloCard}
               </CardTitulo>
               <CardTexto>{props.children}</CardTexto>
               <Botao icone={props.iconeBotao}>{props.descricaoBotao}</Botao>
            </CardInformacao>
            
         </CardGeralContainer>
   )
}

export default CardGeral