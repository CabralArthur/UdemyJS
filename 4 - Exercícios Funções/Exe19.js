/**

O cardápio de uma lanchonete é o seguinte:

Código  Descrição do Produto     Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50


Implemente uma função que receba
como parâmetros o código do item pedido, a quantidade
e calcule o valor a ser pago por aquele lanche.

Considere que a cada execução somente será calculado um item. Use o
comando switch.

Crie um caso default para produto não existente.

*/

function caixaLanchonete(codigo, qtde) {
    let valor = 0
    switch (codigo) {
        case 100:
            valor += 3 * qtde;
            console.log(`Você pagará R$${valor},00`)
            break;
        case 200:
            valor += 4 * qtde;
            console.log(`Você pagará R$${valor},00`)
            break;
        case 300:
            valor += 5.5 * qtde;
            console.log(`Você pagará R$${valor},00`)
            break;
        case 400:
            valor += 7.5 * qtde;
            console.log(`Você pagará R$${valor},00`)
            break;
        default:
            console.log('Produto Não Existente, tente novamente')
            break;
    }
}

caixaLanchonete(100, 10)