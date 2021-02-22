//Criando constante numérica utilizando const.
const peso1 = 1.0;

//Criando constante numérica utilizando cont e Number, que converte a string em número.
const peso2 = Number('1.0');

//Definindo duas notas (constantes)
const av1 = 9.1;
const av2 = 9.4;

//Calculando valor total da soma das duas
const total = (av1 * peso1) + (av2 * peso2)

//Calculando média
const media = total / (peso1 + peso2)

//Printando valor da média com 2 casas decimais
console.log(media.toFixed(2))

//Printando valor da média em binário
console.log(media.toString(2)) 

//Printando tipo do valor da média
console.log(typeof media)
