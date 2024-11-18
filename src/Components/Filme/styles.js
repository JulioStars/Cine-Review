import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    padding: 1.5rem 2rem;
    background-color: ${({theme}) => theme.CORES.PRIMARIA_OPACA};
    border-radius: 1rem;
    display: grid;
    border: none;
    row-gap: 1rem;
    text-align: left;

    h1 {
        color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
        margin-bottom: 0.5rem;
    }

    svg {
        color: ${({theme}) => theme.CORES.PRIMARIA};
    }

    p {
        font-size: 1rem;
        color: ${({theme}) => theme.CORES.CINZA.CINZA_200};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    footer {
        margin-top: 1rem;

        display: flex;
        flex-wrap: wrap;
        row-gap: 1rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;


        footer {
            margin-top: 0;
        }
    }
`;