import styled from "styled-components";

export const Container = styled.div`

`;

export const Header = styled.header`
    height: 144px;
    background-color: ${({theme}) => theme.CORES.CINZA.CINZA_900};
    padding: 0 144px;
    display: flex;
    align-items: center;

    @media (max-width: 650px) {
        padding: 1.3rem .5rem;

        align-items: start;
    }
`;

export const Content = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    > div:nth-child(3),
    > div:nth-child(5) {
        margin-top: 8px;
    }

    > :nth-child(6) {
        margin-top: 24px;
    }

    > :nth-child(7) {
        margin-top: 3rem;
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;
    
    width: 186px;
    height: 186px;

    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    > label {
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.CORES.PRIMARIA};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.CORES.CINZA.CINZA_700};
        }
    }
`;