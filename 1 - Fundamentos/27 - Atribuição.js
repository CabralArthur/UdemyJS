//Passando brevemente sobre o operador de atribuição.

//Existe o operador de Atribuição e algumas variações.

//Atribuição da constante a
const a = 7;

//Atribuição da variável b
let b = 3;

b += a; //É o mesmo que fazer b = b + a (Agora o valor de b é 10)
console.log(b);

b -= 4; //É o mesmo que fazer b = b - 4 (Agora o valor de b é 6) 
console.log(b);

b *= 2; //É o mesmo que fazer b = b * 2 (Agora o valor de b é 12)
console.log(b);

b /= 2; //É o mesmo que fazer b = b / 2 (Agora o valor de b é 6)
console.log(b);

//Por fim, utilizando a operação módulo(resto da divisão) 
b %= 2; //É o mesmo que fazer b = b % 2 (Se o resto da divisão por par, imprimirá 0, se for ímpar, imprimirá 1)