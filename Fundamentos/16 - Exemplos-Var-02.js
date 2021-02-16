//Exemplo 3 - Mostrando Escopo Global

//Declarando variável número com valor 1, no escopo de fora
var numero = 1;

{
    //Declarando variável número com valor 2, no escopo de dentro
    var numero = 2;
    console.log("dentro =", numero);
}

//Como as variáveis do tipo var não diferenciam o escopo, 
console.log( "fora =", numero);