import styled from "styled-components";
import backgroundImg from "../../assets/Imagem cinema.png";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Form = styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1, p, h2 {
        width: 100%;
        text-align: left;
    }

    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.CORES.PRIMARIA};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        font-weight: 500;
    }

    > p {
        font-size: 14px;
        color: ${({theme}) => theme.CORES.CINZA.CINZA_100};
    }

    > a {
        margin-top: 124px;
    }

    >:nth-child(7) {
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;

        h1, p, h2 {
            text-align: center;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    @media (max-width: 768px) {
        display: none;
    }
`;