// Objeto que representa as poltronas disponíveis para cada assunto
var poltronas = {
    tecnologia: ['Poltrona 1', 'Poltrona 2', 'Poltrona 3'], // Poltronas para o assunto 'Tecnologia'
    programacao: ['Poltrona 4', 'Poltrona 5', 'Poltrona 6'], // Poltronas para o assunto 'Programação'
    musica: ['Poltrona 7', 'Poltrona 8', 'Poltrona 9'], // Poltronas para o assunto 'Música'
    cinema: ['Poltrona 10', 'Poltrona 11', 'Poltrona 12'] // Poltronas para o assunto 'Cinema'
};

// Função chamada quando o botão de selecionar poltrona é clicado
function selecionarPoltrona() {
    // Obtém o assunto selecionado pelo usuário
    var assuntoSelecionado = document.getElementById('assuntoSelect').value;
    
    // Acessa as poltronas disponíveis para o assunto selecionado
    var poltronasDisponiveis = poltronas[assuntoSelecionado];
    
    // Variável para armazenar o HTML das poltronas
    var htmlPoltronas = '';

    // Loop para criar os elementos de poltronas a partir do array
    for (var i = 0; i < poltronasDisponiveis.length; i++) {
        var poltrona = poltronasDisponiveis[i];

        // Criação de um div para cada poltrona, com a classe poltrona
        htmlPoltronas += `
            <div class="poltrona" onclick="marcarPoltrona('${poltrona}')">
                ${poltrona} <!-- Nome da poltrona exibido na tela -->
            </div>
        `;
    }

    // Insere as poltronas no HTML da página, dentro da div com id 'poltronas'
    document.getElementById('poltronas').innerHTML = htmlPoltronas;
}

// Função para marcar uma poltrona como ocupada
function marcarPoltrona(poltrona) {
    // Pergunta ao usuário se deseja marcar a poltrona
    var desejaMarcar = confirm('Você deseja marcar a ' + poltrona + ' como ocupada?');
    
    // Se o usuário confirmar, marca a poltrona
    if (desejaMarcar) {
        // Obtém todos os elementos com a classe 'poltrona'
        var poltronaElement = document.querySelectorAll('.poltrona');
        
        // Loop para verificar qual poltrona foi clicada e marcar como ocupada
        for (var i = 0; i < poltronaElement.length; i++) {
            // Verifica se o nome da poltrona corresponde ao nome exibido
            if (poltronaElement[i].innerText === poltrona) {
                // Adiciona a classe 'marcada' à poltrona clicada
                poltronaElement[i].classList.add('marcada');
            }
        }
    } else {
        alert('Poltrona não marcada.'); // Exibe um alerta caso o usuário não queira marcar
    }
}

