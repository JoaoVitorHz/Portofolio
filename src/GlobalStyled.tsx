import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    :root{
        --black: #000;
        --white: #FFF;
        --mainColor: #6456c8;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        width: 100vw;
        overflow-x: hidden;
    }
`;