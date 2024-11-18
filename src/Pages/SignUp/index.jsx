import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";
import { Botao } from "../../Components/Botao";
import { BotaoTexto } from "../../Components/BotaoTexto";

import { User, EnvelopeSimple, Lock } from "@phosphor-icons/react";

export function SignUp() {
    return(
        <Container>
            <Form>

                <h1>Cine Review</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

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
                placeholder="Senha"
                type="password"
                icon={Lock}
                />

                <Botao titulo="Cadastrar"/>

                <BotaoTexto to="/SignIn" titulo="Voltar para o login"/>

            </Form>

            <Background />
        </Container>
    )
}