//String: Cadeia de Caracteres

const escola = "Cod3r"; //Nome do curso.

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O charAt retorna a letra que está no índice presente na função.

//Nesse caso, o índice foi 4.
console.log(escola.charAt(4)); 

//Porém nesse caso não há índice 5 e ele voltará vazio.
console.log(escola.charAt(5));

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O charCodeAt retorna o número referente à tabela unicode.
console.log(escola.charCodeAt(3));

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O indexOf retorna a caractere referente ao index presente na função.
console.log(escola.indexOf('3'));

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O substring irá imprimir do indice presente na função para frente.
console.log(escola.substring(1));

//Nesse caso são delimitados o indice inicial e o indice final -1 (pois ele não é incluído)
console.log(escola.substring(0,3));

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//A função concat, como o próprio nome já sugere, concatena à string o que é colocado na função.
console.log(escola.concat("!").concat(" Escola"))

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O replace irá trocar a caractere do índice escolhido pela determinada na função.
console.log(escola.replace(3, "e"));

//-=-=-=-=-=--=-=-=-=-=--=-=-=-=--=-=-=-=-=--=-=-=-=-=//

//O .split() separa a string pelo que é determindado dentro da função e coloca em uma array.
console.log("Ana, Maria, Pedro").split(' ');