//Aula sobre mecanismos de tratamento de erros

function tratarErroELancar(erro){
    throw new Error('Ocorreu um erro de processamento...') //throw irá retornar a mensagem
}

//Essa função irá converter letra para maiúscula e concatenará com algumas exclamações
function imprimirNomeGritado(obj){
    try{ //Primeiramente no try você insere códigos potencialmente 'perigosos'
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e){ //Caso ocorra um erro, ele irá executar essa função
        tratarErroELancar(e)
    } finally{ //Objeto final à ser executado
        console.log('Final')
    }
    
}

const obj = {name: 'Roberto'}; //Exemplo correto
const obj = {nome: 'Roberto'}; //Exemplo incorreto
imprimirNomeGritado(obj);