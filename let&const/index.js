const verdadeiro = true;

//let tem escopo de bloco {... bloco }
// var so tem escopo de funcao 

//Global
let nome = 'Lucas';//  criando
var nomme2= 'Lucas';

var nome2 = 'Borges' //redeclarada.

//Dentro do bloco maior
if(verdadeiro){
    let nome = 'Borges'; // criando 
    var nomme2 ='Lucas'
    //console.log(nome, nomme2);
    
//Dentro do bloco menor
    if(verdadeiro){
        
        var nomme2 ='Outra coisa';
        let nome ='tanto faz'
        
    }
}
//console.log(nome, nomme2);


var sobrenome = 'Borges';

function falaOi(){
    //var nome = 'luquinhas'
    var sobrenome= "Borges";
    if(verdadeiro){
        //dentro do bloco 
        let nome = 'lucasMaster';

        console.log(nome);
        console.log(sobrenome);
    }
    //fora do bloco
    console.log(nome);
}

// console.log(sobrenome);
falaOi();
