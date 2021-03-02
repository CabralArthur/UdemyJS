//Função construtora para pessoa
const criarPessoa = nomeDaPessoa => {
    return {
        falar: () => console.log(`Meu nome é ${nomeDaPessoa}`)
    };
};

const p2 = criarPessoa('João')

p2.falar()