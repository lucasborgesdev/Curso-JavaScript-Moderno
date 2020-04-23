const nome = ['Lucas', 'Borges'];
const pessoa = {
                  nome: 'Lucas',
                  sobrenome: 'Borges',
}
// for classico geralmente com interaveis (arrays ou strings);
// for in - retorna o indice ou chave (string, array ou objetos);
// for of - retorna o valor de si(interaveis, arrays ou string);
for (let chave of pessoa) {
  console.log(chave, pessoa)
}

//exemplo normal 

for (let i=0; i <nome.length; i++) {
  //console.log(nome[i]);
}
console.log('###')
//for in 
for (let i in nome) {
   //console.log(nome[i]);
}
console.log('###')
for ( let valor of nome) {
  //console.log(valor);
}
nome.forEach(function(valor, indice, array){
  console.log(valor, indice)
});