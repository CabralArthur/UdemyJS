//Hoisting = Içar (Jogar para cima)

//Hoisting é o comportamento padrão de mover a declaração para o TOPO

//Tal efeito acontece quando você declara uma variável usando VAR

console.log("a =", a);

var a = 2;

console.log("a =", a);


//O feito acima é o mesmo que:

//var a
//console.log("a =", a); (Undefined)

//a = 2;

//console.log("a =", a);
