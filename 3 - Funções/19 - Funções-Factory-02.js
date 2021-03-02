//Exemplo de Factory Function Antes da aula

function criarProduto(nomeDoProduto, precoDoProduto) {
    return {
        nome: nomeDoProduto,
        preco: precoDoProduto,
        desconto: 0.1 // 10% de desconto
    };

};

console.log(criarProduto('Celular', 10, 00));