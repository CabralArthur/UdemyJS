/*

Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.

O programa recebe como parâmetros dois valores numéricos 
e uma string referente à operação e a realize com os valores 
numéricos na ordem que foram inseridos. 

Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e 3. 

Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 

Crie um caso default para operações inválidas

*/

calculadora = function (num1,operador,num2){
    switch (operador) {
        case "+":
            soma = num1 + num2;
            console.log(`A soma entre ${num1} e ${num2} é ${soma}.`);
            break;
        case "-":
            subtracao = num1 - num2;
            console.log(`A subtração entre ${num1} e ${num2} é ${subtracao}.`);
            break;
        case "*":
            multiplicacao = num1 * num2;
            console.log(`A multiplicação entre ${num1} e ${num2} é ${multiplicacao}.`);
            break;
        case "/":
            divisao = num1 / num2;
            console.log(`A divisão entre ${num1} e ${num2} é ${divisao}.`);
            break;
        default:
            console.log('Operação Inválida')
            break;
    }
}

calculadora(1,"*",1);
calculadora(10,"*",10);
