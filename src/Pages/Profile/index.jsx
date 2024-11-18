import { Container, Header, Content, Form, Avatar } from "./styles";

import { BotaoTexto } from "../../Components/BotaoTexto";
import { Input } from "../../Components/Input";
import { Botao } from "../../Components/Botao";

import { Camera, User, EnvelopeSimple, Lock } from "@phosphor-icons/react";

export function Profile() {
    return(
        <Container>
            <Header>
                <BotaoTexto to="/" titulo="Voltar" />
            </Header>
            
            <main>
                <Content>
                    <Form>
                        <Avatar>
                            <img src="https://github.com/JulioStars.png" alt="Foto do usuário" />

                            <label htmlFor="avatar">
                                <Camera />

                                <input id="avatar" type="file"/>
                            </label>
                        </Avatar>

                        <Input
                        placeholder="Nome"
                        type="text"
                        icon={User}
                        />

                        <Input
                        placeholder="E-mail"
                        type="text"
                        icon={EnvelopeSimple}
                        />

                        <Input
                        placeholder="Senha atual"
                        type="password"
                        icon={Lock}
                        />

                        <Input
                        placeholder="Nova senha"
                        type="password"
                        icon={Lock}
                        />

                        <Botao titulo="Salvar"/>
                        <BotaoTexto to="/SignIn" titulo="Sair" />
                    </Form>
                </Content>
            </main>
        </Container>
    )
}