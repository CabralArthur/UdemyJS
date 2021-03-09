/*

Crie uma função que verifica se um número inteiro 
passado como parâmetro é divisível 
por 3 e retorne true ou false.

*/

function eDiv(num){
    //Verificando se o resto da divisão por 3 é 0 (ou seja, se é divisível)
    if(num % 3 == 0){
        //Se for, imprimirá true
        console.log(true)
    }else{
        //Se não, imprimirá false
        console.log(false)
    }
}

//Função utilizada com o número 3
eDiv(3)

//Função utilizada com o número 1
eDiv(1)
