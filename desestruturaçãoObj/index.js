const pessoa ={
    nome:  'Lucas',
    sobrenome: 'Borges',
    idade: 28,
    endereco:{
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome: n = '', sobrenome, idade,
//atribuindo endereço para r: 
endereco:{ rua: r = 123458, numero} } = pessoa;
console.log(n, sobrenome, idade, r, numero);

