//Boolean possui dois valores: true e false

//Variável "isAtivo" inicialmente com valor falso.
let isAtivo = false; 

console.log(isAtivo);

//Variável "isAtivo" agora, com valor verdadeiro,
isAtivo = true;

console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //Utilização da Negação dupla (Negação Lógica), que irá retornar o valor verdadeiro (original).
console.log(!isAtivo); //No caso de uma única negação, se o valor era verdadeiro, torna-se falso

//Valores Verdadeiros:
console.log("Valores Verdadeiros:")

//Números Naturais.
console.log(!!3);

//Números Reais.
console.log(!!-1);

//String com apenas um espaço.
console.log(!!' ');

//String Normal.
console.log(!!'Texto');

//Array.
console.log(!![]);

//Objeto Literal.
console.log(!!{});

//Tipo Infinito.
console.log(!!Infinity);

//Siruação de Atribuição em que a resolução é verdadeira.
console.log(!!(isAtivo = true));


//Valores Falsos
console.log("Valores Falsos:")

//O valor zero.
console.log(!!0);

//String Vazia.
console.log(!!'');

//Valor null.
console.log(!!null);

//Valor NaN.
console.log(!!NaN);

//Valor undefined.
console.log(!!undefined);

//Valor undefined.
console.log(!!(isAtivo = false));

//Exemplo 1, operação lógica:

//Ele retornará verdadeiro se houver pelo menos um valor verdadeiro
console.log(!!('' || null || 0 || ' '));

//Exemplo prático:

let nome = ''; //Valor falso

console.log(nome || 'Desconhecido'); //Nesse exemplo, caso o nome não esteja válido (true) ele imprimirá o nome "Desconhecido";