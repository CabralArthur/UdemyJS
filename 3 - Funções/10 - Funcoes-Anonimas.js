//Aula sobre funções anônimas...

//Armazenando função anônima (sem nome) dentro de uma variável
const soma = function (x, y) {
    return x + y;
}

//a operação recebe por padrão a soma que recebe os valores de x e y (nesse caso a e b)
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

//Receberemos o resultado 7
imprimirResultado(3, 4);

//Provando que o valor da soma é o padrão
imprimirResultado(3, 4, soma);

//Mudando a operação para uma operação de subtração
imprimirResultado(3, 4, function (x, y) {
    return x - y; //Passou a usar a operação de subtração
});

//Mudando a operação para uma operação de multiplicação
imprimirResultado(3, 4, (x, y) => x * y); //Receberá o resultado 12

//Utilizando função anônima dentro de objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

//Irá imprimir a string definida
pessoa.falar()