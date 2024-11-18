import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 4rem 0;
    }

    p {
        text-align: justify;
    }
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 .5rem;
`;

export const TituloNota = styled.div`
    display: flex;
    align-items: baseline;
    gap: 20px;
    margin-top: 1.5rem;

    > h1 {
        font-size: 2.25rem;
    }

    > div {
        display: flex;

        > svg {
            color: ${({theme}) => theme.CORES.PRIMARIA};
            font-size: 1.25rem;
        }
    }

    @media (max-width: 375px) {
        flex-direction: column;
    }
`;

export const Nota = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 1.5rem 0 2.5rem 0;

    @media (max-width: 375px) {
        flex-direction: column;
        align-items: start;
    }
`;

export const Relogio = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 8px;

    svg {
        color: ${({theme}) => theme.CORES.PRIMARIA};
        font-size: 1.3rem;
    }

    @media (max-width: 375px) {
        margin: 0;
    }
`;

export const Perfil = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    img {
        height: 1.3rem;
        border: 1px solid ${({theme}) => theme.CORES.CINZA.CINZA_600};
        border-radius: 50%;
    }
`;

export const Tags = styled.div`
    margin: 0 0 2.5rem 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: 8px;
`;