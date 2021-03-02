//Função Auto-Invocada é uma função que é declarada,
//mesmo sem nome, e na hora da declaração você já utiliza
//essa função.

//IIFE -> Immediately Invoked Function Expressed

(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente')
})()// --> Invocando a função