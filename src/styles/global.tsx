import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin:0;
  padding:0;
  box-sizing: 0;
}

:focus {
  outline:0;
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme["yellow-500"]};
}

body { 
  background-color: ${(props) => props.theme["gray-50"]};
  color: ${(props) => props.theme["gray-600"]};
  --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size:1rem;
}

html {
  // quando o meu usuário estiver com uma tela
  @media(max-width:1080px){
    font-size: 93.75%; // isso resulta em 15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; // isso resulta em 14px
  }
}

`;
