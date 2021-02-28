//Nessa aula será visto a importância da função
//e algumas possibilidades que são
//presentes ao se trabalhar com funções.

//Função em JS:
//1 - First-Class-Object
//2 - High-Order Function (Função de alta ordem)

//Isso tudo significa que é possível tratar função como um
//dado. É possível passar uma função como parâmetro,
//retornar função como resposta dentro de outra função.

//1 - Criar função de forma literal

function fun1() { }; //Toda função em JS retorna o valor undefined, por padrão.


//2 - Armazenando função em uma variável

const fun2 = function () { };

//3 - Armazenando função dentro de um array

const array = [function (a, b) { return a + b }, fun1, fun2];

//Retornando função na posição 0
console.log(array[0](2, 3));

//3 - Armazenando função em um atributo de objetos

//Declarando objeto
const obj = {};

//Declarando chave falar e valor função que retorna a string
obj.falar = function () { return 'Opa' };

//Imprimindo função presente no objeto
console.log(obj.falar());

//4 - Passando função como parâmetro

function run(fun) {
    fun() //Para invocar a função é necessário passar os parâmetros
}

run(function () { console.log('Executando...') })

//5 - Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    };
};

//Primeiro modo de fazer:
soma(2, 3)(4)

//Segundo modo de fazer:
const cincoMais = soma(2, 3);
cincoMais(4);