/*

Crie uma função que irá receber
dois valores, o dividendo e o divisor.

A função deverá imprimir o resultado
e o resto da divisão destes dois valores.

*/

function divisao(dividendo, divisor) {
    //Fazendo o cálculo da divisão
    resultado = dividendo / divisor;
    //Fazendo o cálculo do resto da divisão
    resto = dividendo % divisor;

    //Imprimindo o resultado da divisão
    console.log(`O resultado da divisão entre ${dividendo} e ${divisor} é ${resultado.toFixed(1)}`)

    //Imprimindo o resto da divisão
    console.log(`E o resto da divisão entre ${dividendo} e ${divisor} é ${resto.toFixed(1)}`)
}

//Chamando função
divisao(2, 1);