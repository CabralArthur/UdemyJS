//A classe surgiu com a versão do ECMAScript 2015

class Lancamento{
    constructor(nome='Genérico', valor = 0){ //Função construtora padrão
        this.nome = nome
        this.valor = valor
    } 
}

class cicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)


const contas = new cicloFinanceiro(6,2018) //Mês 6, ano de 2018
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())