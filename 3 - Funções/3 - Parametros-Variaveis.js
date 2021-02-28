//Criando função soma que não receberá parâmetros
function soma() {
    let soma = 0
    for (i in arguments) { //Recuperando parâmetros
        soma += arguments[i]  //Somando à variável soma
    }
    return soma;
}

//Sem parâmetros, retornará o valor zero
console.log(soma());

//Com parâmetros numéricos, irá retornar o valor 6 (soma entre os números)
console.log(soma(1, 2, 3));

//Com parâmetros numéricos e não numéricos irá concatenar 
console.log(soma(1, "oi", 2));