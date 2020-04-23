
const fruta = ['banana', 'melão', 'maça'];


const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Borges',
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);,
    
}
