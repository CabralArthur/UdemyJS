/*

Elabore duas funções que recebem três parâmetros:
capital inicial, taxa de juros e tempo de aplicação.

A primeira função retornará o montante da aplicação
financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

function retornaMontanteSimples(CapInicial, TaxaJuros, TempoAplic) {
    jurosTotal = CapInicial * (TaxaJuros / 100) * TempoAplic;
    montante = CapInicial + jurosTotal
    console.log(montante.toFixed(1))
};

retornaMontanteSimples(100, 10, 100);

function retornaMontanteComposto(CapAplicado, TaxaJuros, TempoAplic) {
    Montante = CapAplicado * Math.pow(1 + (TaxaJuros / 100), TempoAplic)
    console.log(Montante.toFixed(1))
};

retornaMontanteComposto(100, 10, 100);

