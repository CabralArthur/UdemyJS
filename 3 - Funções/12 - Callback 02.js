//Aula mostrando a diferença entre um código
//que foi usado o callback e um em que não é usado

// *-Sem Callback-*


//O objetivo é retornar todas as notas menores do que 7
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Declarando array, inicialmente vazia
let notasBaixas1 = [];

//Inserindo Estrutura de repetição for
for (let i in notas) {
    //Que irá verificar se a nota na posição i é menor do que 7
    if (notas[i] < 7) {
        //Caso seja, irá adicionar na array de notas baixas
        notasBaixas1.push(notas[i])
    };
};

console.log(notasBaixas1);

// *-Com Callback-*

//Utilizando a função filter, que irá filtrar
//os elementos de um array, em cima de um determinado critério
//que será uma função callback. 

//Para cada elemento, essa função será chamada. 
//Se a função retornar true, será adicionado no array novo, se não, não entrará.
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
})

//Imprimindo array
console.log(notasBaixas2);

//Utilizando a função filter com uma arrow function, deixando
//o código mais curto
const notasBaixas3 = notas.filter(nota => nota < 7);

//Imprimindo Array
console.log(notasBaixas3);