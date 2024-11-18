import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    height: 100vh;

    main {
        padding: 0 8rem;
        margin-top: 2.5rem;
        grid-area: content;
        overflow-y: auto;
        margin-bottom: 3rem;

        h1 {
            margin: 1.5rem 0 2.5rem 0;
        }

        &::-webkit-scrollbar {
            width: 12px;
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

        @media (min-width: 769px) and (max-width: 1024px) {
            padding: 0 1rem;
        }

        @media (max-width: 768px) {
            padding: 0 1rem;
        }
    }
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.5rem;

    textarea {
        grid-column-start: 1;
        grid-column-end: 3;
        margin-top: 2.5rem;
        height: 274px;
        background-color: ${({theme}) => theme.CORES.CINZA.CINZA_900};
        color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
        border-radius: 10px;
        border: none;
        padding: 1.25rem 1rem;
        resize: none;

        &:focus {
            outline: 2px solid ${({theme}) => theme.CORES.PRIMARIA};
        }
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
        color: ${({theme}) => theme.CORES.CINZA.CINZA_200};
        margin: 2.5rem 0 1.5rem 0;
        grid-column-start: 1;
        grid-column-end: 3;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Marcadores = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
`;

export const Tags = styled.div`
    background-color: ${({theme}) => theme.CORES.CINZA.CINZA_900};
    border-radius: 8px;
    padding: 16px;
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    @media (max-width: 425px) {
        justify-content: center;
    }
`;

export const Botoes = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.5rem;
    margin-top: 2.5rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        row-gap: 1rem;
    }
`;