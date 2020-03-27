// vai mostar o ultipo true 
//console.log('LUCAS' && true && 'Borges')
//  -> true || false || null = true

function falaOi(){
    return 'Oi';
}

const vaiExecutar = 'JoãoZinho';

console.log(vaiExecutar && falaOi());

//OR precisa de uma afirmação positiva para retornar o o valor true que é o da String
console.log(0 || false || null || 'Luca Borges' || true)

const corUsuario='vermelho';

//const corUsuario=null;
const corPadro = corUsuario || 'preto';

console.log(corPadro);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
// vai retornar 'false'como string ****
