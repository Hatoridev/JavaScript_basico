// Objeto que contém as poltronas para cada assunto
var poltronas = {
    tecnologia: ['Poltrona 1', 'Poltrona 2', 'Poltrona 3'],
    programacao: ['Poltrona 4', 'Poltrona 5', 'Poltrona 6'],
    musica: ['Poltrona 7', 'Poltrona 8', 'Poltrona 9'],
    cinema: ['Poltrona 10', 'Poltrona 11', 'Poltrona 12']
};

// Função que exibe as poltronas para o assunto selecionado
// Ela também aceita uma função callback para ser chamada após a exibição das poltronas
function exibirPoltronas(assuntoSelecionado, callback) {
    // Obtém as poltronas disponíveis para o assunto selecionado
    var poltronasDisponiveis = poltronas[assuntoSelecionado];
    var htmlPoltronas = '';

    // Cria um elemento HTML para cada poltrona disponível
    for (var i = 0; i < poltronasDisponiveis.length; i++) {
        var poltrona = poltronasDisponiveis[i];

        // Criação do código HTML para cada poltrona com evento de clique
        htmlPoltronas += `
            <div class="poltrona" onclick="marcarPoltrona('${poltrona}')">
                ${poltrona}
            </div>
        `;
    }

    // Adiciona o HTML gerado ao elemento com id "poltronas"
    document.getElementById('poltronas').innerHTML = htmlPoltronas;

    // Chama a função de callback passada como parâmetro
    callback();
}

// Função que é chamada quando o botão "Selecionar Poltrona" é pressionado
function selecionarPoltronaCallback() {
    // Obtém o valor do assunto selecionado no select
    var assuntoSelecionado = document.getElementById('assuntoSelect').value;

    // Chama a função exibirPoltronas passando o assunto selecionado e a função callback
    exibirPoltronas(assuntoSelecionado, function() {
        // Alerta após a exibição das poltronas
        alert('Poltronas para o assunto ' + assuntoSelecionado + ' exibidas com sucesso!');
    });
}

// Função para marcar uma poltrona como ocupada
function marcarPoltrona(poltrona) {
    // Pergunta ao usuário se ele deseja marcar a poltrona
    var desejaMarcar = confirm('Você deseja marcar a ' + poltrona + ' como ocupada?');

    // Se o usuário aceitar, marca a poltrona
    if (desejaMarcar) {
        var poltronaElement = document.querySelectorAll('.poltrona');
        
        // Itera sobre todas as poltronas e marca a selecionada
        for (var i = 0; i < poltronaElement.length; i++) {
            if (poltronaElement[i].innerText === poltrona) {
                poltronaElement[i].classList.add('marcada');
            }
        }
    } else {
        // Se o usuário não aceitar, exibe uma mensagem
        alert('Poltrona não marcada.');
    }
}

