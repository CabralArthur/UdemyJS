//Conceito de função:

//Imagine que uma função é como uma receita de bolo.
//Uma função é uma ação, ela executa um processo baseado
//em uma sentença de código.

//Ela define um bloco associado {} (corpo da função) que contém
//todas as sentenças de códigos necessárias.


//1 - Função sem retorno:

function imprimirSoma(a, b){ //a e b são parâmetros

    console.log(a + b);

} //Coloque bons nomes nas suas funções

//Retornará o valor da soma normalmente
imprimirSoma(1,2);

//Retornará a concatenação das strings, quaisquer que sejam
imprimirSoma("1","2");

//Retornará o valor da soma normalmente
imprimirSoma(1,3,4,5,6);

imprimirSoma(); //Retornará NaN(Not a Number)

//2 - Função com retorno:

function soma(a = 1,b = 1){ //Declarando os parâmetros a e b, sendo que b tem valor padrão 0. Isso significa que na falta de b o valor será 0
    return a + b;
};

console.log(soma(2)); //Nesse caso, somou-se 2 + 0 = 2...
