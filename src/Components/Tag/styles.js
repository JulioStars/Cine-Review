import styled from "styled-components";

export const Container = styled.span`
    padding: 4px 16px;
    background-color: ${({theme}) => theme.CORES.CINZA.CINZA_700};
    border-radius: 8px;
    font-size: .75rem;
    color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
    margin-right: 8px;
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
`;