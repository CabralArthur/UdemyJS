//Função Factory: Uma função que retorna um objeto
//Factory: Fábrica, pois ela tem o objetivo de fabricar uma
//nova instância de um objeto.

function criarPessoa() {
    return {
        nome: 'Ana',
        Sobrenome: 'Maria'
    }
}

console.log(criarPessoa())