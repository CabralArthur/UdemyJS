//Simulação do que acontece quando utiliza-se o operador new
//(Criando operador New)

function Aula(nome,videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

console.log(aula1, aula2)

//simulando o operador new

//O operador receberá uma função e um conjunto de parâmetros
function novo(f,...params){
    //Criará o objeto
    const obj = {}
    //Associará o .__proto__ (protótipo do objeto) com o prototype da função
    obj.__proto__ = f.prototype
    //Execurtará a função f passando como objeto de contexto o objeto criado e os parâmetros presentes na função
    f.apply(obj, params)
    //Retornando o objeto
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)