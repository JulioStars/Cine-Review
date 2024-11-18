import { Container, Form, Background } from "./styles";

import { Input } from "../../Components/Input";
import { Botao } from "../../Components/Botao";

import { Link } from "react-router-dom";

import { EnvelopeSimple, Lock } from "@phosphor-icons/react";

export function SignIn() {
    return(
        <Container>
            <Form>

                <h1>Cine Review</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

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

                <Botao titulo="Entrar"/>

                <Link to="/register">Criar Conta</Link>

            </Form>

            <Background />
        </Container>
    )
}