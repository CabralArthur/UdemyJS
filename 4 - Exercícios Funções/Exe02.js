/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie uma função que recebe os comprimentos dos três
lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados.

(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/

function checaTriangulo(lado1 = 1, lado2 = 1, lado3 = 1) {

    //Nesse caso, se todos os lados foram iguais
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {

        //Faz-se a impressão da mensagem informando que ele é equilátero

        console.log('O triângulo em questão é equilátero')

        //Se não, se no mínimo 2 lados forem iguais
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {

        //Faz-se a impressão da mensagem informando que ele é isósceles
        console.log('O triângulo em questão é isósceles')

        //Se não, se todos os lados forem diferentes
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {

        //Faz-se a impressão da mensagem informando que ele é escaleno
        console.log('O triângulo em questão é escaleno')

    } else {
        console.log('Inválido')
    }

}

checaTriangulo(1, 2, 1)