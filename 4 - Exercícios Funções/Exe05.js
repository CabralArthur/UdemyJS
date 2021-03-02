/*

Lidar com números em JavaScript pode dar muita dor de cabeça. 
Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
O resultado será: 0.30000000000000004. 
Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. 
Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. 
Desenvolva uma função JavaScript para que ela 
receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)

*/

function converteNumR$(numero) {
    //Formatando número
    formatado = numero.toFixed(2)
    //Fazendo a troca do ponto pela vírgula
    trocado = String(formatado).replace('.', ',')
    //Adicionao o R$ no começo do número
    final = `R$${trocado}`
    //Imprimindo valor completamente convertido
    console.log(final)
}

converteNumR$(0.30000000000000004)