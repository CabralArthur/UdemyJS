//Operadores Relacionais, também são operadores binários.
//Quando se faz uma operação utilizando um operador relacional
//sempre retornará uma resposta verdadeira (true) ou falsa (false)

//Fazendo comparação sem comparar tipo
console.log('01)', '1' == 1);

//Fazendo comparação considerando tipo
console.log('02)', '1' === 1);

//Fazendo comparação de diferença sem comparar tipo
console.log('03)', '3' != 3);

//Fazendo comparação de diferença considerando tipo
console.log('04)', '3' !== 3);

//Fazendo comparação de menor que
console.log('05)', 3 < 2);

//Fazendo comparação de maior que
console.log('06)', 3 > 2);

//Fazendo comparação de menor igual
console.log('07)', 3 <= 2);

//Fazendo comparação de maior igual
console.log('08)', 3 >= 2);

//0 Significa a data de referência do JS (01/01/1970)
const d1 = new Date(0);  
const d2 = new Date(0);

//fazendo comparação de d1 e d2
console.log('09)', d1 === d2); //Ele irá comparar o endereço de memória. (false)

//fazendo comparação de d1 e d2
console.log('10)', d1 == d2); //Ele irá comparar o endereço de memória também. (false)

console.log('11)', d1.getTime() == d2.getTime()); //Nesse caso eles possuem o mesmo tipo e o mesmo valor.
