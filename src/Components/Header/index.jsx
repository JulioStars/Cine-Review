import { Container, Perfil } from "./styles";

import { Input } from "../Input";

export function Header() {
    return(
        <Container>
            <h1>CineReview</h1>

            <Input placeholder="Pesquisar pelo título" type="text"/>

            <Perfil to="/profile">
                <div>
                    <strong>Julio Freitas</strong>
                    <a href="#">Sair</a>
                </div>
                <img src="https://github.com/JulioStars.png" alt="Foto do usuário"/>
            </Perfil>
        </Container>
    )
}