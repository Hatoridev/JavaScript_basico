// Função para definir um Cookie
function setCookie() {
    // Obtém o nome e valor do cookie dos campos de input
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

// Função para obter um Cookie
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

// Função para deletar um Cookie
function deleteCookie() {
    let name = document.getElementById("cookieName").value;
    // Define o cookie com data expirada para deletá-lo
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    document.getElementById("cookieResult").textContent = "Cookie deletado!";
}

// Função para salvar no LocalStorage
function setLocalStorage() {
    // Obtém o nome e valor do LocalStorage
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    
    // Define o item no LocalStorage
    localStorage.setItem(key, value);
    
    // Exibe a mensagem de sucesso
    document.getElementById("storageResult").textContent = "Valor salvo no LocalStorage!";
}

// Função para obter do LocalStorage
function getLocalStorage() {
    let key = document.getElementById("storageKey").value;
    
    // Obtém o item do LocalStorage
    let value = localStorage.getItem(key);
    
    if (value) {
        document.getElementById("storageResult").textContent = "Valor do LocalStorage: " + value;
    } else {
        document.getElementById("storageResult").textContent = "Item não encontrado no LocalStorage.";
    }
}

// Função para deletar do LocalStorage
function deleteLocalStorage() {
    let key = document.getElementById("storageKey").value;
    
    // Deleta o item do LocalStorage
    localStorage.removeItem(key);
    document.getElementById("storageResult").textContent = "Item deletado do LocalStorage!";
}

// Função para salvar no SessionStorage
function setSessionStorage() {
    let key = document.getElementById("storageKey").value;
    let value = document.getElementById("storageValue").value;
    
    // Define o item no SessionStorage
    sessionStorage.setItem(key, value);
    
    document.getElementById("storageResult").textContent = "Valor salvo no SessionStorage!";
}

// Função para obter do SessionStorage
function getSessionStorage() {
    let key = document.getElementById("storageKey").value;
    
    // Obtém o item do SessionStorage
    let value = sessionStorage.getItem(key);
    
    if (value) {
        document.getElementById("storageResult").textContent = "Valor do SessionStorage: " + value;
    } else {
        document.getElementById("storageResult").textContent = "Item não encontrado no SessionStorage.";
    }
}

// Função para deletar do SessionStorage
function deleteSessionStorage() {
    let key = document.getElementById("storageKey").value;
    
    // Deleta o item do SessionStorage
    sessionStorage.removeItem(key);
    document.getElementById("storageResult").textContent = "Item deletado do SessionStorage!";
}

// Função para alterar o texto de um elemento
function changeTextContent() {
    document.getElementById("textExample").textContent = "Texto alterado!";
}

// Função para alterar a cor de fundo do body
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Função para adicionar um novo elemento
function addElement() {
    let newElement = document.createElement("div");
    newElement.textContent = "Novo Elemento Adicionado!";
    document.getElementById("elementExample").appendChild(newElement);
}

