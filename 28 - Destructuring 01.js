//Aula referente ao novo operador introduzido do ES 2015
//Ele é um operador de desestruturação, ou seja:
//Ele tira a estrutura de um elemento.

//Exemplo: Objeto --> Extrair atributos de objeto.
//Exemplo 2: Array --> Tirar elementos de uma array.

//Ele possui duas formas de escrita, para objetos se usam as chavez
//e para arrays utilizam-se colchetes.

//Criando objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Supondo que eu precise extrair as informações do nome e da idade

const { nome: n, idade: i } = pessoa; //As chaves representam o operador de desestruturação

//Acessando as atribuições através do console.log
console.log(n, i);

//Utilizando novamente o operador de desestruturação para selecionar
//as atribuições desejadas no objeto endereco, no caso do cep, ele retornaria undefined, 
//porém foi definido um valor padrão para ele, ou seja, quando não houver nada, retorne "Não há"

const {endereco: { logradouro: l, numero: nu, cep = 'Não há CEP'}} = pessoa;

//Acessando as atribuições através do console.log
console.log(l,nu,cep);