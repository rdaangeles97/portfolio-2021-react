import { createGlobalStyle } from "styled-components";
import { MainStyles } from "./data/GlobalData";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background-color:${MainStyles.primaryColor};
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:  ${MainStyles.primaryFont};
}
`;

export const MainSection = styled.section`
  border: 1px solid red;
  max-width: 100rem;
`;
