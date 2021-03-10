//Aula sobre Orientação à Objetos

//Código não executável (Conceitos)

//Paradigma Procedural:
//Foco na função (procedimento)

procedimento(valor1, valor2, valor3)

// Paradigma de Objetos:

//Dados --> Funções dentro dos dados
objeto = {
    valor1, //Valores
    valor2,
    valor3,
    processamento() { //Funções, comportamento do objeto
        //....
    }
}

objeto.processamento() //Presente dentro do objeto (foco passou a ser o objeto)


//Princípios importantes

//-*-*-*-*-*-1. Abstração *-*-*-*-*-*-*-*

//Pegar o objeto do mundo real 
//e entender como traduzi-lo para dentro do sistema

//-*-*-*-**2.Encapsulamento -*-*-*-*-*-*

//Possuir os detalhes de implementação "escondidos"
//e mostrar uma interface simples (Interface de comunicação) 
//para interação com o objeto.

//O encapsulamento é importante para não ocorrer um grande nível
//de acoplamento (objetos com exposição grande de detalhes internos do objeto).

//É mais importante se preocupar com comunicação do que com implementação interna

//*-*-*-*-*-*- 3. Herança *-*-*-*-*-*-*--*

//Existem formas de reusar código

//1-Reuso a partir de composição
//Motor + Porta + Rodas --> Carro (Motor presente no carro)

//2-Reuso a partir de herança
//Receber características e atributos a partir de um elemento pai

//*-*-*-*-*-*-4. Polimorfismo *-*-*-*-*-*-*--*

//Múltiplas formas, exemplo: Celular
//Marcas do celular: Iphone, Samsung, Xiaomi
