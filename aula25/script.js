// Função para o evento DOM0, quando o botão é clicado diretamente via HTML (atributo onclick)
function dom0Event() {
    alert('Evento DOM0 acionado!');
}

// Função para o evento DOM2, onde o evento é associado com addEventListener
function addDom2Event() {
    // Seleciona o botão pelo id
    var button = document.getElementById('dom2Btn');

    // Adiciona o evento 'click' usando addEventListener (DOM2)
    button.addEventListener('click', function() {
        alert('Evento DOM2 acionado!');
    });
}

// Função para abrir uma nova janela (BOM)
function openNewWindow() {
    // Usa o objeto window do BOM para abrir uma nova janela
    window.open('https://www.google.com', '_blank');
}

// Função para obter a localização do usuário (BOM)
function getLocation() {
    // Verifica se o navegador suporta geolocalização (BOM)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            alert('Localização: Latitude: ' + position.coords.latitude + ', Longitude: ' + position.coords.longitude);
        });
    } else {
        alert('Geolocalização não é suportada por este navegador.');
    }
}

// Função para mostrar as informações do navegador (BOM)
function getBrowserInfo() {
    var info = 'Informações sobre o navegador:\n\n';
    info += 'Navegador: ' + navigator.appName + '\n';
    info += 'Versão: ' + navigator.appVersion + '\n';
    info += 'Idioma: ' + navigator.language + '\n';
    info += 'Plataforma: ' + navigator.platform + '\n';
    alert(info);
}

// A função addDom2Event será chamada quando o DOM carregar para garantir que o elemento esteja disponível
window.onload = function() {
    addDom2Event(); // Chamando a função para adicionar o evento DOM2
}

