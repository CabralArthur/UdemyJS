//Template Strings surgiram para deixar o código mais elegantes

//Declarando constante com nome
const nome = "Rebeca";

//Contatenação Normal
const concatenacao = "Olá, " + nome + "!";

//Utilizando Template String
const template = `Olá, ${nome}!`

//Imprimindo as duas (mesmo resultado)
console.log(concatenacao);
console.log(template);

//Template String também podem ser usadas em expressões numéricas:
console.log(`1 + 1 = ${1 + 1}`);

//Utilizando Arrow Function para colocar texto em UpperCase
const up = texto => texto.toUpperCase();

//Imprimindo resultado final
console.log(`Ei, ${up('cuidado')}!`);