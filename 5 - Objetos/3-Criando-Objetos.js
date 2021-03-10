//Usando a notação literal

const obj1 = {} //Forma literal

console.log(obj1)

//Utilizando a função construtora new

const obj2 = new Object
console.log(obj2)

//Criando próprias funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //Utilizando this, variável fica pública (Atributo público)
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    } //Esse método também ficará visível
}

const p1 = new Produto('Caneta', 10, 0.15)
//Imprimindo método
console.log(p1.getPrecoComDesconto())

//Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 1000, 4)

console.log(f1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Julia'
console.log(filha)

//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)