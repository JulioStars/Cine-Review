import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

    main {
        padding: 0 8rem;
        overflow-y: auto;
        height: 85vh;

        .header {
            display: flex;
            justify-content: space-between;
            margin: 3rem 0;
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            padding: 0 2rem
        }

        @media (max-width: 768px) {
            padding: 0 1rem;

            .header {
                flex-direction: column;
                align-items: center;

                > h1 {
                    margin-bottom: 1rem;
                }
            }
        }

        &::-webkit-scrollbar {
            width: 0.75rem;
        }

        &::-webkit-scrollbar-track {
            background: ${({theme}) => theme.CORES.FUNDO};
        }

        &::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.CORES.PRIMARIA};
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${({theme}) => theme.CORES.CINZA.CINZA_700};
        }
    }

`;

export const NovoFilme = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    border: none;
    background-color: ${({theme}) => theme.CORES.PRIMARIA};
    color: ${({theme}) => theme.CORES.FUNDO};
    font-size: 1rem;
    width: 210px;
    height: 48px;

    &:hover {
        filter: brightness(0.7);
    }

    @media (max-width: 768px) {
            width: 100%;
        }
`;

export const CardFilmes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 730px;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
    }
`;