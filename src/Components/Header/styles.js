import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    background-color: ${({theme}) => theme.CORES.FUNDO};
    border-bottom: 1px solid ${({theme}) => theme.CORES.CINZA.CINZA_600};
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding: 1.5rem 8rem;
    gap: 0.5rem;
    grid-area: header;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${({theme}) => theme.CORES.PRIMARIA};
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 1.5rem 2rem;
        gap: 1.5rem;
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
        grid-template-columns: 3fr 1fr;
        gap: 1.5rem;

        h1 {
            display: none;
        }
    }
`;

export const Perfil = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;

    > img {
        height: 4rem;
        border-radius: 50%;
        margin-left: 10px;
        border: 1px solid ${({theme}) => theme.CORES.CINZA.CINZA_600};
    }

    > div {
        display: flex;
        flex-direction: column;
        text-align: end;

        & strong {
                font-size: 0.875rem;
                color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
            }

        & a {
                font-size: 0.875rem;
                color: ${({theme}) => theme.CORES.CINZA.CINZA_300};
            }
    }

    @media (max-width: 425px) {
        > div {
            display: none;
        }
    }
`;