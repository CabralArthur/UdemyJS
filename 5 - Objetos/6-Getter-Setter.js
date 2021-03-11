const sequencia = {
    _valor: 1, //Convenção, dizendo que essa variável é pretendida ser acessada internamente
    get valor() { return this._valor++ }, //Aumentando em 1 o valor do número
    set valor(valor) { //Mudando o valor
        if (valor > this._valor) { //apenas se o valor for maior
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900

console.log(sequencia.valor, sequencia.valor)
