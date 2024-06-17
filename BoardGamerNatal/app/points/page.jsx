export default function Points(){
//collection of points
const points = [
    {
        title: "Pedro \"O Estrategista\"",
        description: "Pedro é uma figura proeminente na comunidade de jogos de tabuleiro de Natal, RN. Com sua mente afiada e sua habilidade estratégica excepcional, ele se destaca como um mestre tático em uma variedade de jogos de tabuleiro. Sua paixão pelo jogo é evidente em sua abordagem meticulosa e sua dedicação em sempre buscar a vitória.",
        image: "estrategista.jpg"
    },

    {
        title: "Maria \"A Encantadora\"",
        description: "Maria é uma figura cativante na comunidade de jogos de tabuleiro de Natal, RN. Sua presença calorosa e sua habilidade em criar uma atmosfera acolhedora tornam-na uma favorita entre os jogadores. Ela não apenas domina os jogos com sua inteligência e estratégia, mas também traz uma energia contagiante para cada encontro.",
        image: "encantadora.jpg"
    },

    {
        title: "João \"O Perfeccionista\"",
        description: "João é um jogador meticuloso e determinado na comunidade de jogos de tabuleiro de Natal, RN. Sua busca implacável pela excelência e sua dedicação incansável o destacam como um dos jogadores mais respeitados e temidos à mesa. Ele aborda cada jogo com uma mentalidade focada e uma determinação inabalável para alcançar a vitória.",
        image: "perfeccionista.jpg"
    },

    {
        title:  "Ana \"A Aprendiz\"",
        description: "Ana é uma presença energética e curiosa na comunidade de jogos de tabuleiro de Natal, RN. Como uma jogadora relativamente nova, ela traz uma abordagem refrescante e uma sede de aprendizado para cada encontro. Sua disposição para enfrentar novos desafios e sua determinação em melhorar a tornam uma adição valiosa à comunidade de jogos.",
        image: "aprediz.jpg"
    }
]

    return (
        <>
             <h1 className="text-center text-secondary">
                Os melhores Jogadores de Natal/RN
             </h1>

             <div className="container">
                {
                    points.map((point, index) =>{
                        return(
                        <div key={index} className="row my-3 border rounded-5 p-3">
                            <div className="col-md-4"> 
                                <img src={`assets//imagens/${point.image}`} alt={point.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h4>{point.title}</h4>
                                <p>{point.description}</p>
                            </div>
                        </div> 
                        )                    
                    })
                    
                } 
                          
             </div>
             
        </>
 
)}