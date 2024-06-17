import Link from "next/link"
export default function Home() {
    return (
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="section-one-title">Os melhores Boardgamers Natalanses</p>
                            <p className="section-one-text">Descubra uma rede vibrante de jogadores apaixonados, compartilhando dicas, estratégias e experiências em nossos fóruns dedicados. Conheça os mestres locais, como Pedro "O Estrategista", Maria "A Encantadora", João "O Perfeccionista" e Ana "A Aprendiz", e aprenda com suas experiências e insights..</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Conheça os principais jogadores da cidade de Natal/RN</h4>
                            <div className="text-center">
                                <Link href="/points" className="btn btn-outline-light py-3 px-5"><h4>Conhecer</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-3">Localize-nos no Mapa</h4>
                            <p className="py-3">
                            Procurando por diversão e estratégia em Natal, RN? Não procure mais! Aqui está como você pode nos encontrar facilmente através do mapa:

Passo 1: Abra Seu Aplicativo de Mapas Favorito:
Abra o aplicativo de mapas em seu dispositivo móvel ou acesse um serviço de mapas online em seu navegador da web. Você pode usar aplicativos populares como Google Maps, Apple Maps ou MapQuest.

Passo 2: Insira o Endereço:
Digite nosso endereço em Natal, RN, para nos localizar com precisão. Nosso endereço completo é [Insira o Endereço Completo do Local].

Passo 3: Use Palavras-Chave:
Se você preferir usar palavras-chave em vez de um endereço específico, você pode procurar por termos como "jogos de tabuleiro em Natal, RN" ou "loja de jogos de tabuleiro perto de mim".

Passo 4: Explore os Resultados:
Explore os resultados fornecidos pelo seu aplicativo de mapas. Procure por nossa loja ou local de encontro destacado no mapa. Você também pode procurar por ícones de jogos de tabuleiro ou marcar nossos eventos e torneios próximos.

Passo 5: Obtenha Direções:
Depois de nos localizar no mapa, você pode obter direções detalhadas para chegar até nós a pé, de carro, de transporte público ou de bicicleta, dependendo da sua preferência.

Dica Extra:
Se você estiver em dúvida ou tiver dificuldade em nos encontrar, não hesite em nos contatar diretamente. Nossa equipe terá prazer em ajudá-lo a navegar pelo mapa e a chegar até nós sem problemas.

Com estas simples etapas, você estará pronto para se juntar à diversão e aventura dos jogos de tabuleiro em Natal, RN. Esperamos vê-lo em breve!
                            </p>
                            <div className="text-center">
                                <Link href="/map" className="btn btn-outline-dark py-3 px-5"><h4>Consultar o mapa</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}