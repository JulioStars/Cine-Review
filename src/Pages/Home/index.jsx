import { Container, NovoFilme, CardFilmes } from "./styles"

import { Header } from "../../Components/Header"
import { Filme } from "../../Components/Filme"

import { Plus } from '@phosphor-icons/react';

export function Home() {
    return(
        <Container>
            <Header />

            <main>
                <div className="header">
                    <h1>Meus filmes</h1>

                    <NovoFilme to="/news">
                        <Plus size={24}/>
                        Adicionar filme
                    </NovoFilme>
                </div>

                <CardFilmes>
                    <Filme estrelas={5} data={{
                        titulo: 'Interestellar',
                        sinopse: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.'
                        ,
                        tags: [
                            {id: '1', nome: 'Ficção Científica'},
                            {id: '2', nome: 'Drama'},
                            {id: '3', nome: 'Família'}
                        ]
                    }}
                    />

                    <Filme estrelas={5} data={{
                        titulo: "Não, Não Olhe",
                        sinopse: 'Os cuidadores de um rancho de cavalos na Califórnia encontram uma força misteriosa que afeta o comportamento humano e animal.'
                        ,
                        tags: [
                            {id: '1', nome: 'Medo'},
                            {id: '2', nome: 'Abdução'},
                            {id: '3', nome: 'Mistério'}
                        ]
                    }}
                    />

                    <Filme estrelas={4} data={{
                        titulo: "Super Mario Bros",
                        sinopse: 'Mario e seu irmão Luigi são encanadores do Brooklyn, em Nova York. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach. O local é ameaçado por Bowser, rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.'
                        ,
                        tags: [
                            {id: '1', nome: 'Família'},
                            {id: '2', nome: 'Videogame'},
                            {id: '3', nome: 'Aventura'},
                            {id: '4', nome: 'Animação'}
                        ]
                    }}
                    />

                    <Filme estrelas={5} data={{
                        titulo: "Vingadores Ultimato",
                        sinopse: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.'
                        ,
                        tags: [
                            {id: '1', nome: 'Ação'},
                            {id: '2', nome: 'História em Quadrinhos'},
                            {id: '3', nome: 'Multiverso'}
                        ]
                    }}
                    />

                    <Filme estrelas={5} data={{
                        titulo: "Cavaleiro da lua",
                        sinopse: 'Cavaleiro da Lua acompanha Steven Grant, um gentil e educado funcionário de uma loja de souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre que tem transtorno dissociativo de identidade e divide o corpo com o mercenário Marc Spector.'
                        ,
                        tags: [
                            {id: '1', nome: 'Série'},
                            {id: '2', nome: 'Ação'},
                            {id: '3', nome: 'Aventura'},
                            {id: '4', nome: 'Mitologia'}
                        ]
                    }}
                    />

                </CardFilmes>
            </main>
        </Container>
    )
}