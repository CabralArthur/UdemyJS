//Crie uma função que dado dois valores 
//(passados como parâmetros) mostre no console a 
//soma, subtração, multiplicação e divisão desses valores.

const calcularNums = function (val1, val2) {

    //Imprimindo mensagem mostrando quais foram os números escolhidos
    console.log(`Os números escolhidos foram ${val1} e ${val2}`)
    //Mostrando soma no console
    console.log(`${val1} + ${val2} = ${val1 + val2}`)
    //Mostrando subtração no console
    console.log(`${val1} - ${val2} = ${val1 - val2}`)
    //Mostrando multiplicação no console
    console.log(`${val1} * ${val2} = ${val1 * val2}`)
    //Mostrando divisão no console
    console.log(`${val1} ÷ ${val2} = ${val1 / val2}`)

}

calcularNums(1, 2)