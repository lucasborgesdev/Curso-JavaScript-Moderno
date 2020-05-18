const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criarLi() {
    const li = document.createElement('li');
    return li;
}

// e => evento
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value)
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarBotaoApagar(li) {
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText  = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');

    li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('apagar')){
    el.parentElement.remove();
    salvarTarefas();
    }
    
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto =  tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    console.log(listaDeTarefas);
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adcionaTarefasSalva() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
    //console.log(listaDeTarefas)
}

adcionaTarefasSalva()
