import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.CORES.CINZA.CINZA_900};
    color: ${({theme}) => theme.CORES.CINZA.CINZA_300};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme}) => theme.CORES.NEUTRAS.BRANCO};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.CORES.CINZA.CINZA_300};
        }

        &:focus {
            outline: none;
        }
    }

    > svg {
            margin-left: 16px;
        }    
`;