//Cadeira de protótipos (prototype chain)

Object.prototype.attr0 = '0' //Não recomendado

const avo = {attr1: 'A'}//O avô tem

const pai = {__proto__:avo, attr2: 'B'}//O pai tem atributo 1?, não, vou procurar no avô

const filho = {__proto__:pai, attr3: 'C'}//O filho tem atributo 1?, não, vou procurar no pai

console.log(filho.attr1)
console.log(filho.attr0) // // Caso ele não encontre, retorna undefined

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //Shadowing = Sombreando valor
}

const volvo = {
    modelo: 'V40',
    velMax: 100,
    status(){                   //super acessa o método do protótipo 
        return `${this.modelo}: ${super.status()}` //Sombreando a função status
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabelecendo a relação de protótipo e carro
Object.setPrototypeOf(volvo, carro) //Estabelecendo a relação de protótipo e carro

console.log(ferrari) //Só imprimirá os atributos que envolvem de fato o objeto ferrari
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())