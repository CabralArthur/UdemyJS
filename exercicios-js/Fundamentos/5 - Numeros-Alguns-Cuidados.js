//1 - JavaScript possui um tipo "Infinity", exemplo:

console.log(10 / 0);

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//2 - Deve-se tomar cuidado também com o tipo string utilizado junto à números.
//Pode funcionar, mas com certeza não é o recomendado, exemplos:

//Caso funcional:

console.log("10" / 2);

//Caso não funcional: (NaN = Not a Number)

console.log("10,2" / 2);

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//3 - JavaScript não multiplica strings, exemplo:

console.log("Show" * 2); //Imprimirá NaN

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//4 - Em JavaScript não há precisão total nas operações com decimais, exemplo:

console.log(0.1 + 0.7);