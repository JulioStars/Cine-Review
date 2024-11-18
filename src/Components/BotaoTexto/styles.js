import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    color: ${({theme}) => theme.CORES.PRIMARIA};
    font-size: 1rem;
    display: flex;
    align-items: end;
    width: fit-content;

    &:hover {
        filter: brightness(.7);
    }
`;