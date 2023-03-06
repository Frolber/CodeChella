import {MenuLinks, LinkMenu,DetalheLinkMenu} from './style.js'

const MenuDireito = ({ abrir }) => {
   return (
      <MenuLinks abrir={abrir}>
         <LinkMenu href="/experiencia">A experiência</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/mapadesetores">Mapa de Setores</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/Informacoes">Informações</LinkMenu>
         <DetalheLinkMenu />
         <LinkMenu href="/Ingresso">Ingresso</LinkMenu>
      </MenuLinks>
   );
};

export default MenuDireito;
