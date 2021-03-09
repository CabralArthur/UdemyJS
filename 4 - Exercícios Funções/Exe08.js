/*

Pedro joga N jogos de basquete por temporada.

Para saber como está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo.

Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho.

Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo)

*/


function avaliaPontos(stringPontuacoes) {

    //Declarando variável de pontuações que irá separar as pontuações por vírgula
    let pontuacoes = stringPontuacoes.split(", ");

    //Variável que representará a quantidade de vezes em que o record foi quebrado
    let qtdQuebraDeRecords = 0

    //O pior jogo, inicialmente o primeiro
    let piorJogo = 1

    //A maior e a menor pontuação é, inicialmente a que está na posição 1,  
    //posteriormente serão feitas as verificações
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    //Criando estrutura de repetição for, que irá percorrer a lista
    for (let i = 1; i < pontuacoes.length; i++) {

        //Fazendo a verificação se a maior pontuação no indice i é maior do que a pontuação atual
        if (pontuacoes[i] > maiorPontuacao) {
            //Caso seja, a maior pontuação será a verificado
            maiorPontuacao = pontuacoes[i]

            //Com isso, acrescenta-se 1 à quantidade de recordes quebrados
            qtdQuebraDeRecords++

          //Se não, se a pontuação for menor do que a pontuação atual
        } else if (pontuacoes[i] < menorPontuacao) {
            //A menor pontuação será a verificada
            menorPontuacao = pontuacoes[i]
            //E o pior jogo será o do indice i + 1
            piorJogo = i + 1
        }

    }
    return [qtdQuebraDeRecords, piorJogo]
}

let jogos = "0, 1, 2, 3"

console.log(avaliaPontos(jogos))