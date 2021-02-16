//Declarando variável sem atribuir valor. 

let valor; //Não inicializada.

//Valor inicial da variável será undefined.
console.log(valor);

//null significa que se você tem uma variável ela não aponta para nenhum
//endereço de memória.

valor = null; //Ausência de valor.
console.log(valor);

//Se você tentar acessar algo de uma variável que aponta para o nada, ocorrerá problema.
//exemplo: console.log(valor.toString()) [ERRO!!!].

//Declarando objeto constante
const produto = {};

//Pedindo preço, no produto. Porém retornará undefined, 
//pelo fato de não estar definido previamente.
console.log(produto.preco);

//Declarando preço dentro do produto.
produto.preco = 3.5;

//Nesse caso será sim impresso a chave preço com valor de 3.5.
console.log(produto.preco); 

//evite atribuir undefined, deixe para a linguagem.
produto.preco = undefined; //Preço indefinido

console.log(produto.preco);
console.log(produto);

//Se você terá que definir explicitamente, opte pelo null e não pelo undefined.
produto.preco = null; //Sem preço
console.log(produto.preco);
console.log(produto);