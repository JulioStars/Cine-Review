import { Container } from "./styles";

export function Tag({titulo, ...rest}) {
    return(
        <Container {...rest}>
            {titulo}
        </Container>
    )
}