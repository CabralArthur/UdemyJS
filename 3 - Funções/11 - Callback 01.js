//Callback significa "chamar de volta"

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//O Conceito da função callback é: Passar uma função
//para outra função, e quando determinado evento acontecer.
//A função será chamada de volta.


//Nesse caso, para cada elemento do array, ele irá chamar
//de volta a função imprimir.
fabricantes.forEach(imprimir) //Nesse caso o forEach servirá para cada valor de índice e nome

//Já aqui, temos apenar um parâmetro na função
//o parâmetro "a" será cada elemento percorrido na array.
fabricantes.forEach(function (a) {
    console.log(a)
})