// import { Container} from "./styles";
// import { Tag } from "../Tag";

// import { Star } from '@phosphor-icons/react';

// export function Filme({data, ...rest}) {
//     return(
//         <Container to="/details/1" {...rest}>
//             <div>
//                 <h1>{data.titulo}</h1>
//                 <div>
//                     <Star weight="fill"/>
//                     <Star weight="fill"/>
//                     <Star weight="fill"/>
//                     <Star weight="fill"/>
//                     <Star weight="fill"/>
//                 </div>
//             </div>
//             <p>
//                 {data.sinopse}
//             </p>

//             {
//                 data.tags &&
//                 <footer>
//                     {
//                         data.tags.map(tag => <Tag key={tag.id} titulo={tag.nome}/>)
//                     }
//                 </footer>
//             }
//         </Container>
//     )
// }

import { Container } from "./styles";
import { Tag } from "../Tag";
import { Star } from '@phosphor-icons/react';

export function Filme({ data, estrelas = 5, ...rest }) {  // A prop "estrelas" define a quantidade de estrelas, com valor default de 5.
    return (
        <Container to="/details/1" {...rest}>
            <div>
                <h1>{data.titulo}</h1>
                <div>
                    {[...Array(estrelas)].map((_, index) => (
                        <Star key={index} weight="fill" />
                    ))}
                    {[...Array(5 - estrelas)].map((_, index) => (  // Preenche com estrelas vazias até o total de 5
                        <Star key={index + estrelas} weight="regular" />
                    ))}
                </div>
            </div>
            <p>{data.sinopse}</p>

            {data.tags && (
                <footer>
                    {data.tags.map((tag) => (
                        <Tag key={tag.id} titulo={tag.nome} />
                    ))}
                </footer>
            )}
        </Container>
    );
}
