//A utilização da função construtora
//é similar ao utilizar classe em java.

//Criando função construtora carro
function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo Privado
    let velocidadeAtual = 0

    //Método Público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima;
        };
    };

    //Método Público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    };
};

//Criando um novo 'Carro'
const uno = new Carro;

//Utilizando função acelerar
uno.acelerar();

//Imprimindo velocidade atual
console.log(uno.getVelocidadeAtual);

//Fazendo a mesma coisa
const ferrari = new Carro(350, 20);

//Utilizando função acelerar
ferrari.acelerar();

ferrari.acelerar();

ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());

//O 'Carro' é uma function
console.log(typeof (Carro));

//Já ferrari, é um objeto
console.log(typeof (ferrari));