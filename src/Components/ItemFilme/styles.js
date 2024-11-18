import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 1rem;
    gap: 8px;
    border-radius: 10px;
    overflow: hidden;
    width: 180px;
    justify-content: space-between;

    background-color: ${({theme, eNovo}) => eNovo ? "transparent" : theme.CORES.FUNDO};
    border: ${({theme, eNovo}) => eNovo ? `1px dashed ${theme.CORES.CINZA.CINZA_300}` : "none"};

    button {
        color: ${({theme}) => theme.CORES.PRIMARIA};
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
    }

    input {
        background-color: transparent;
        width: fit-content;
        border: none;
        color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
        width: 100%;
        
        &:focus {
            outline: none;
        }
    }

    @media (max-width: 320px) {
        width: 100%;
    }
`;