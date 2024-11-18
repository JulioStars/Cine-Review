import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: ${({theme}) => theme.CORES.PRIMARIA};
    color: ${({theme}) => theme.CORES.FUNDO};
    font-size: 1rem;
    padding: 1rem;

    &:hover {
        filter: brightness(0.7);
    }

    &.primario {
        background-color: ${({theme}) => theme.CORES.PRIMARIA};
        color: ${({theme}) => theme.CORES.FUNDO};
    }

    &.secundario {
        background-color: ${({theme}) => theme.CORES.CINZA.CINZA_900};
        color: ${({theme}) => theme.CORES.PRIMARIA};
    }
`;