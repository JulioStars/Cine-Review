import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme}) => theme.CORES.FUNDO};
        color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
    }

    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-track {
    background: ${({theme}) => theme.CORES.CINZA.CINZA_600};
    }

    ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.CORES.PRIMARIA};
    }

    ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.CORES.CINZA.CINZA_700};
    }

    @media (max-width: 768px) {
        body {
            font-size: 14px;
        }
    }

    @media (max-width: 425px) {
        body {
            font-size: 12px;
        }
    }
`