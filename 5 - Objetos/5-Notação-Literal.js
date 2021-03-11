const a = 1
const b = 2
const c = 3

//Antigamente era necessário criar um objeto utilizando a seguinte duplicidade:
const obj1 = { a: a, b: b, c: c }

//Atualmente, com a melhoria presente no ES6, utilizamos
const obj2 = { a, b, c }


//Criando atributo a partir de uma variável
const nomeAttr = 'nota'
const valorAttr = 8

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj4)


const obj5 = {
    //Forma antiga de utilizar função dentro de objeto
    funcao1: function () {
        //...
    },

    //Forma Atual
    funcao2() {
        //...
    }
}

console.log(obj5)