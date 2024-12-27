// Variáveis para o temporizador
let timer;
let timerValue = 0;

// Função para iniciar o temporizador
function startTimer() {
    // Define a função que será chamada a cada 1 segundo (1000ms)
    timer = setInterval(function() {
        // Incrementa o valor do temporizador
        timerValue++;
        // Atualiza a exibição do temporizador no HTML
        document.getElementById("timerDisplay").textContent = timerValue;
    }, 1000); // 1000ms = 1 segundo
}

// Função para parar o temporizador
function stopTimer() {
    // Limpa o temporizador
    clearInterval(timer);
}

// Função para definir um cookie
function setCookie() {
    // Obtém o nome e o valor do cookie dos campos de input
    let name = document.getElementById("cookieName").value;
    let value = document.getElementById("cookieValue").value;

    // Cria o cookie com nome, valor e duração de 7 dias
    let expires = new Date();
    expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 dias
    let expiresString = "expires=" + expires.toUTCString();

    // Define o cookie
    document.cookie = name + "=" + value + ";" + expiresString + ";path=/";

    // Exibe a mensagem de sucesso
    document.getElementById("cookieResult").textContent = "Cookie salvo!";
}

// Função para obter o valor de um cookie
function getCookie() {
    // Obtém todos os cookies armazenados
    let cookies = document.cookie;
    let name = document.getElementById("cookieName").value;

    // Verifica se o cookie existe
    let nameEQ = name + "=";
    let start = cookies.indexOf(nameEQ);
    if (start != -1) {
        // Se o cookie for encontrado, retorna o valor
        start = start + nameEQ.length;
        let end = cookies.indexOf(";", start);
        if (end == -1) end = cookies.length;
        let value = cookies.substring(start, end);
        document.getElementById("cookieResult").textContent = "Valor do Cookie: " + value;
    } else {
        document.getElementById("cookieResult").textContent = "Cookie não encontrado.";
    }
}

// Função para deletar um cookie
function deleteCookie() {
    let name = document.getElementById("cookieName").value;
    // Define o cookie com data expirada para deletá-lo
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    document.getElementById("cookieResult").textContent = "Cookie deletado!";
}

// Adicionando os eventos aos botões
document.getElementById("startTimerBtn").addEventListener("click", startTimer);
document.getElementById("stopTimerBtn").addEventListener("click", stopTimer);

