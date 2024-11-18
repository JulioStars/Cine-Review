import { Container, Form, Botoes, Marcadores, Tags } from "./styles";

import { Header } from "../../Components/Header";
import { BotaoTexto } from "../../Components/BotaoTexto";
import { Input } from "../../Components/Input";
import { Botao } from "../../Components/Botao";
import { ItemFilme } from "../../Components/ItemFilme";

export function News() {
    return(
        <Container>
            <Header />

            <main>
                <BotaoTexto to="/" titulo="Voltar" />

                <h1>Novo filme</h1>

                <Form>
                    <Input placeholder="Título" />

                    <Input placeholder="Sua nota (de 0 a 5)" />

                    <textarea placeholder="Obeservações" />

                    <Marcadores>
                        <h2>Marcadores</h2>
                        <Tags>
                            <ItemFilme valor="React" />
                            <ItemFilme eNovo placeholder="Novo marcador" />
                        </Tags>
                    </Marcadores>

                    <Botoes>
                        <Botao primario={false} titulo="Excluir filme"/>
                        <Botao titulo="Salvar alterações"/>
                    </Botoes>
                </Form>
            </main>
        </Container>
    )
}