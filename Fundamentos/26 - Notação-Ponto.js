//Notação ponto é algo extremamente básico no JS
//A notação ponto permite você acessar membros de uma função/objeto
//a partir da notação ponto.


//Notação ponto para acessar console:

console.log(Math.ceil(6.1)); 

//Math é um object em JS e utilizando a notação 
//ponto você acessa uma função nesse objeto.

const obj1 = {};

obj1.nome = 'Bola'; //Utilizando notação ponto para criar dinamicamente
//um atributo dentro desse objeto.

// obj1['nome'] = 'Bola'; Equivalente à linha acima; (Menos Recomendado)

console.log(obj1.nome);

//Notação ponto em funções
function Obj (nome){
    this.nome = nome; //this = você receberá esse atributo nome por parâmetro e tornará esse atributo público.
    //Utilizando o this com funções
    this.exec = function() {
        console.log('Oi, bb!')
    }
}

//Declarando constante com uma função nova com um parâmetro novo.
const obj2 = new Obj('cadeira');

//Declarando constante com uma função nova com um parâmetro novo.
const obj3 = new Obj('Mesa');

//Acessando atributo da constante obj2 através da notação ponto.
console.log(obj2.nome);

//Acessando atributo da constante obj3 através da notação ponto.
console.log(obj3.nome);

//Acessando função da constante obj2 através da notação ponto.
obj2.exec();