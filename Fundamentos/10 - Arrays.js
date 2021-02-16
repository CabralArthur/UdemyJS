//Array é uma forma de agrupar múltiplos 
//valores de forma linear.

//O Array é uma estrutura indexada, ou seja:
//você acessa os elementos pelo índice.


//Declarando Array com notas.
const notas = [7.7, 8.9, 6.3, 9.2];

//Printanto valor da array no índice declarado.
console.log(notas[0], notas[3]);

//Adicionando Elemento no array.
notas[4] = 7.5;

//Printando Array.
console.log(notas)

//Printanto tamanho do array.
console.log(notas.length);

//Método mais normal de adicionar elementos em um array.
notas.push({id:3}, false, null, 'teste');

//Printando Array Final.
console.log(notas);

//A Array possui o tipo Objeto
console.log(typeof notas); 