//Criando função compara com this
let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global); //O this é considerado o objeto global (São a mesma coisa)
//No caso do browser o global é o window (De modo geral)

//Declarando obj (Um objeto, obviamente).
const obj = {};

//Associando a função comparaComThis ao objeto
comparaComThis = comparaComThis.bind(obj);

//Ao comparar novamente, com o global, o resultado será falso
comparaComThis(global);

//Ao comparar com o objeto, receberemos o resultado true
comparaComThis(obj);

//Pergunta: Será que o this continuará apontando para o global?
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global) //False
comparaComThisArrow(module.exports) //
//R: Não, devido ao fato dessa função ter sido definida dentro
//de um módulo do node (Cada arquivo do node é um módulo).

//Utilizando bind para (tentar) associar a função ao objeto...
comparaComThisArrow = comparaComThisArrow.bind(obj);
//Nesse caso, a associação não funciona, devido ao fato de que a arrow function é mais 'forte'
comparaComThisArrow(obj)