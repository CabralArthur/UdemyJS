/*
Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente.
*/

function calcExpo(base, expoente) {
    //Declarando variével resultado, que será o resultado final
    let resultado = base;
    if (expoente == 1 || expoente == 0) {
        console.log(`${base} elevado a 1 é ${resultado}`)
    } else {
        //Iniciando uma estrutura de repetição for
        for (i = 2; i <= expoente; i++) {
            //Ela irá somar o resultado com a base inicial
            resultado *= base;
        };
        //Ao final do cédigo, iró imprimir o resultado
        console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);
    };
};

calcExpo(7, 2);

//Em JavaScript temos a funçóo pow, Exemplo:
console.log(`Utilizando a função pow (power), 7 ao quadrado é ${Math.pow(7, 2)}`);