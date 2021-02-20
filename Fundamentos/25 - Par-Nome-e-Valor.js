//Aula sobre o importante conceito referente à objetos
//Conceito par Nome / Valor

//Antes de vermos os exemplos, deve-se entender o que é conceito léxico.

//O que é contexto léxico? É o contexto em que a sua variável 
//foi definida fisicamente no código. 


//Exemplo de um par nome(saudacao) e valor('Olá')
const saudacao = 'Olá'; //Contexto léxico 1: nesse caso ele foi definido
//no nível do arquivo Par-Nome-e-Valor.js

function exec(){
    const saudacao = 'Faala';//Constante léxico 2: nesse caso o contexto da palavra
    return saudacao; //é o contexto da função.
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao); //Será printado a const saudação do contexto léxico 1

console.log(exec()); //Será printado a const saudação do contexto léxico 2

console.log(cliente); //Printando o objeto cliente
