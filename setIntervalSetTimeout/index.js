
function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}
//*  assim
function  funcaDoInterval() {
    console.log(mostrarHora())
}
 
//setInterval(funcaDoInterval, 1000)

//ou desta forma

const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 3000);


setTimeout(function () {
    console.log('Olá mundo');
}, 5000);