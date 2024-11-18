import { Container} from "./styles";

import { Plus, X } from "@phosphor-icons/react"

export function ItemFilme({valor, eNovo, onClick, ...rest}) {
    return(
        <Container eNovo={eNovo}>
            <input type="text" value={valor} readOnly={!eNovo} {...rest}/>

            <button type="button" onClick={onClick} className={eNovo ? 'adicionar' : 'remover'}>
                { eNovo ? <Plus weight="bold"/> : <X weight="bold"/>}
            </button>
        </Container>
    )
}