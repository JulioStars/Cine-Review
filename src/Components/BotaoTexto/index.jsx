import { Container } from "./styles";
import { ArrowLeft } from "@phosphor-icons/react";


export function BotaoTexto({titulo, ...rest}) {
    return(
        <Container {...rest}>
            <ArrowLeft size={20} />
            {titulo}
        </Container>
    )
}