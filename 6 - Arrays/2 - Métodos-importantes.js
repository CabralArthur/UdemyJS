const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

//Pop remove o último elemento da array
pilotos.pop()
console.log(pilotos)

//Push adicionar na última posição da aray
pilotos.push('Silva')
console.log(pilotos)

//Shift remove o primeiro elemento da aray
pilotos.shift()
console.log(pilotos)

//Já o unshift, como o nome sugere, adiciona um elemento na primeira posição do array
pilotos.unshift('Cabral')
console.log(pilotos)

//Splice pode adicionar e remover elementos


//Para adicionar elementos
pilotos.splice(2, 0, 'Botas', 'Massa') //A partir do índice 2, não removerá ninguém e adicionará Botas e Massa
console.log(pilotos)

//Para adicionar elementos
pilotos.splice(3, 1,) //A partir do índice 2, removerá 1 elemento
console.log(pilotos)

//Splice retorna um novo array a partir do índice desejado
const algunsPilotos = pilotos.slice(4)
console.log(algunsPilotos)

//Splice retorna um novo array a partir do índice desejado
const algunsPilotos2 = pilotos.slice(1, 4) //Do ínidice zero ao índice 4, porém elemento do índice 4 não irá entrar
console.log(algunsPilotos2)