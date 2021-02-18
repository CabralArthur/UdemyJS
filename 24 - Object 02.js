//Nessa aula teremos apenas algumas comprarações entre
//Função e objeto

//O tipo de um objeto é uma função
console.log(typeof Object);

//Porém se adicionarmos uma instância ao objeto, será um object
console.log(typeof new Object);

//Declarando constante cliente
const Cliente = function() {};

//Exemplo inicial com cliente (function)
console.log(typeof Cliente);

//Adicionando instância ao cliente (object)
console.log(typeof new Cliente);


//Declarando classe Produto
class Produto {}; //ES 2015

//Exemplo inicial com Produto (function)
console.log(typeof Produto);

//Adicionando instância ao Produto (object)
console.log(typeof new Produto);