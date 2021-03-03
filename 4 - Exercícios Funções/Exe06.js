/*

Elabore duas funções que recebem três parâmetros:
capital inicial, taxa de juros e tempo de aplicação.

A primeira função retornará o montante da aplicação
financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

//Criando função que retornará o montente calculando por juros simples
function retornaMontanteSimples(CapInicial, TaxaJuros, TempoAplic) {

    //No cálculo de Juros Simples = Capital Inicial * Taxa de Juros (Que é dividido por 100) * Tempo de Aplicação
    jurosTotal = CapInicial * (TaxaJuros / 100) * TempoAplic;

    //Fazendo o cálculo do montente final
    montante = CapInicial + jurosTotal

    //Imprimindo valor do montante(Formatado)
    console.log(montante.toFixed(1))
};

//Chamando função
retornaMontanteSimples(100, 10, 100);

//Criando função que retornará o montante calculando por juros compostos
function retornaMontanteComposto(CapAplicado, TaxaJuros, TempoAplic) {

    //No calculo de juros simples, o montante é : M = C * (1 + i)^^n
    Montante = CapAplicado * Math.pow(1 + (TaxaJuros / 100), TempoAplic)

    //Imprimindo valor do montante(Formatado)
    console.log(Montante.toFixed(1))
};

retornaMontanteComposto(100, 10, 100);

