import { createGlobalStyle } from "styled-components";
import { MainStyles } from "./data/GlobalData";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:  ${MainStyles.primaryFont}
}
`;
