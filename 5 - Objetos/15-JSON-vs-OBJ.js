//JSON (JavaScript Object Notation) é um formato de comunicação textual
//Simples de ser lido e interpretado no computador, por isso 
//pode ser lido em basicamente todas linguagens.

const obj = {a:1, b:2, c:3, soma(){return a+b+c}} //Objeto
//Convertendo para JSON
console.log(JSON.stringify(obj)) //Gera no formato textual

//O JSON irá excluir a função devido ao fato
//de que o JSON é um formato de dados (não executável)

//Não é um formato JSON Válido
//console.log(JSON.parse("{a:1,b:2,c:3}"))

//Formato inválido
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))

//Formato válido, ocorre pois o valor de atributo 
//deve estar entre aspas duplas, bem como as strings
console.log(JSON.parse('{"a":true,"b":2.5,"c":3}'))

//Sites:

//JSON 5 - JSON For Humans
//JSON Validator
