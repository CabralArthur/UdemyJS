//Mostrando alguns exemplos mais de função

//Armazenando uma função em uma variável:

const imprimirSoma = function(a,b){
    console.log(a + b);
};

//Inicializando a função que imprime a soma.
imprimirSoma(2,3);

//Armazenando uma função arrow em uma variável:
const soma = (a,b) =>{ //Essa setinha substitui o nome function.
    return a + b
};

//Printando a função soma.
console.log(soma(2,3));

//Função com retorno implícito
const subtracao = (a,b) => a - b; //(a,b) são os parâmetros e a - b o retorno da função

//Printando a função subtração.
console.log(subtracao(2,3));

