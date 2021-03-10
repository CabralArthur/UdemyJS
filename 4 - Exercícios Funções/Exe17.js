/*

Um funcionário irá receber um aumento de acordo 
com o seu plano de trabalho, de acordo com a tabela abaixo:

Plano Aumento
A      10%
B      15%
C      20%

Faça uma função que leia o plano de trabalho 
e o salário atual de um funcionário e calcula e imprime o seu novo salário. 

Use a estrutura switch e faça um caso default que indique que o plano é inválido.


*/

function aumentoPorPlano(plano, salarioAtual) {
    switch (plano) {
        case "A":
            salarioAtual += (salarioAtual * 0.1);
            console.log(`Seu salário atual é ${salarioAtual}`);
            break;
        case "B":
            salarioAtual += (salarioAtual * 0.15);
            console.log(`Seu salário atual é ${salarioAtual}`);
            break;
        case "C":
            salarioAtual += (salarioAtual * 0.2);
            console.log(`Seu salário atual é ${salarioAtual}`);
            break;
        default:
            console.log('Plano Inválido')
            break;
    }
}


aumentoPorPlano('A', 100);
aumentoPorPlano('Z', 100);