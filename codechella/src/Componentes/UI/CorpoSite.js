import styled from "styled-components";
import { corUmGradienteVerao, corDoisGradienteVerao, corTresGradienteVerao } from "./Variaveis";

export const CorpoSite = styled.body`
height: 100vh;
background-image: linear-gradient(${corUmGradienteVerao}, ${corDoisGradienteVerao}, ${corTresGradienteVerao});
`