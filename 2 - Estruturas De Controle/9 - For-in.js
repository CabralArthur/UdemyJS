//Aula sobre o For/in
//O For in percorre os atributos de uma determinada estrutura(Objeto, array..)

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Aparecida',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`O ${atributo} é ${pessoa[atributo]}`)
};