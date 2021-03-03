/*
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”,
de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,-5, 12.

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*/

//Criando função que irá calcular o Delta
function Delta(a, b, c) {
    return (
        Math.pow(b, 2) - (4 * a * c)
    )
}

//Criando função que irá calcular a equação do segundo grau
function calculaSegundoGrau(a, b, c) {
    //Declarando função Delta dentro de uma variável
    delta = Delta(a, b, c)
    //Caso o valor de Delta seja menor do que zero
    //Ocorrerá a impressão de uma string
    if (delta < 0) {
        return 'Delta é negativo'
    } else { //Caso o valor de delta não seja menor do que zero

        //Declarando cálculo da raiz quadrada de delta
        deltasquare = Math.sqrt(delta)

        //Fazendo o cálculo de x1 (ou x- linha)
        x1 = (-b + deltasquare) / (2 * a)

        //Fazendo o cálculo de x1 (ou x- duas linhas)
        x2 = (-b - deltasquare) / (2 * a)

        //Retornando Array
        return [x1.toFixed(1), x2.toFixed(1)]
    }

}

//Declarando função dentro a variável resultado
resultado = calculaSegundoGrau(7, 3, 4)

//Imprimindo resultado final
console.log(resultado)