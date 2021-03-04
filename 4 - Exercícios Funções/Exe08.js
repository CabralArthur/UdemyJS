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

n = [1, 800, 500];

function comparaJogos(list) {
    //Criando variável referente ao pior jogo, que armazena inicialmente uma variável indefinida
    let menorNum = undefined;

    //Criando variável referente à maior pontuação, que armazena inicialmente uma variável indefinida
    let maiorPonto = undefined;

    //Variável que irá armazenar a quantidade de vezes que o recorde foi batido
    let record = 0;

    for (var i = 0; i < list.length; i++) {

        menorNum = list[0];

        maiorPonto = list[i];

        if (menorNum > list[i + 1]) {

            menorNum = list[i + 1];

        }

        if (maiorPonto < list[i + 1]) {

            maiorPonto = list[i + 1];

            record++;
        };

    };

    console.log(record);
    console.log(maiorPonto);
    console.log(menorNum);


};

comparaJogos(n);