import { Container } from "./styles";

export function Botao({titulo, primario = true}) {
    return(
        <Container type="button" className={primario ? 'primario' : 'secundario'}>
            {titulo}
        </Container>
    )
}