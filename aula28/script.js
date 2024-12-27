// Função para adicionar um novo elemento na árvore DOM
function addNewElement() {
    let newElement = document.createElement("p"); // Cria um novo elemento <p>
    newElement.textContent = "Este é um novo parágrafo adicionado dinamicamente!"; // Define o texto do novo elemento
    
    let parentElement = document.getElementById("parentElement"); // Obtém o elemento com id "parentElement"
    parentElement.appendChild(newElement); // Adiciona o novo elemento como filho de "parentElement"
    
    document.getElementById("output").textContent = "Novo elemento adicionado com sucesso!"; // Exibe a mensagem de sucesso
}

// Função para remover o último elemento dentro de #parentElement
function removeElement() {
    let parentElement = document.getElementById("parentElement"); // Obtém o elemento pai onde os filhos estão
    
    if (parentElement.lastElementChild) { // Verifica se há um filho para remover
        parentElement.removeChild(parentElement.lastElementChild); // Remove o último filho
        document.getElementById("output").textContent = "Último elemento removido!"; // Exibe a mensagem de sucesso
    } else {
        document.getElementById("output").textContent = "Não há elementos para remover!"; // Exibe a mensagem caso não haja filhos
    }
}

// Função para carregar dados de um arquivo TXT usando AJAX
function loadData() {
    let xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest para requisição AJAX
    
    xhr.open("GET", "dados.txt", true); // Abre uma requisição GET para o arquivo "dados.txt"
    
    xhr.onload = function() { // Define a função de callback para quando a requisição for concluída
        if (xhr.status == 200) { // Verifica se o status da requisição foi bem-sucedido (código 200)
            document.getElementById("ajaxResult").textContent = xhr.responseText; // Exibe o conteúdo do arquivo TXT
        } else {
            document.getElementById("ajaxResult").textContent = "Erro ao carregar o arquivo!"; // Exibe uma mensagem de erro
        }
    };
    
    xhr.send(); // Envia a requisição
}

// Função para carregar dados de um arquivo XML usando AJAX
function loadXMLData() {
    let xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest para requisição AJAX
    
    xhr.open("GET", "dados.xml", true); // Abre uma requisição GET para o arquivo "dados.xml"
    xhr.onload = function() { // Define a função de callback para quando a requisição for concluída
        if (xhr.status == 200) { // Verifica se o status da requisição foi bem-sucedido
            let xmlDoc = xhr.responseXML; // Converte a resposta em XML
            let element = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue; // Acessa o valor do primeiro elemento <name>
            document.getElementById("ajaxResult").textContent = "Nome do XML: " + element; // Exibe o conteúdo do elemento <name>
        } else {
            document.getElementById("ajaxResult").textContent = "Erro ao carregar o XML!"; // Exibe mensagem de erro
        }
    };
    
    xhr.send(); // Envia a requisição
}

// Função para carregar dados de um arquivo HTML usando AJAX
function loadHTMLData() {
    let xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest para requisição AJAX
    
    xhr.open("GET", "dados.html", true); // Abre uma requisição GET para o arquivo "dados.html"
    xhr.onload = function() { // Define a função de callback para quando a requisição for concluída
        if (xhr.status == 200) { // Verifica se a requisição foi bem-sucedida
            document.getElementById("ajaxResult").innerHTML = xhr.responseText; // Insere o conteúdo HTML diretamente no DOM
        } else {
            document.getElementById("ajaxResult").textContent = "Erro ao carregar o HTML!"; // Exibe mensagem de erro
        }
    };
    
    xhr.send(); // Envia a requisição
}

// Função para carregar dados JSON usando AJAX
function loadJSONData() {
    let xhr = new XMLHttpRequest(); // Cria um novo objeto XMLHttpRequest para requisição AJAX
    
    xhr.open("GET", "dados.json", true); // Abre uma requisição GET para o arquivo "dados.json"
    xhr.onload = function() { // Define a função de callback para quando a requisição for concluída
        if (xhr.status == 200) { // Verifica se a requisição foi bem-sucedida
            let jsonData = JSON.parse(xhr.responseText); // Converte a resposta em JSON
            document.getElementById("ajaxResult").textContent = "Nome do JSON: " + jsonData.name; // Exibe o valor de "name" no JSON
        } else {
            document.getElementById("ajaxResult").textContent = "Erro ao carregar o JSON!"; // Exibe mensagem de erro
        }
    };
    
    xhr.send(); // Envia a requisição
}

// Função para requisição AJAX Cross Browser
function crossBrowserRequest() {
    let xhr;
    
    // Cria o objeto XMLHttpRequest de maneira compatível com todos os navegadores
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); // Para navegadores modernos
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Para IE antigo
    }
    
    xhr.open("GET", "dados.txt", true); // Abre a requisição GET para o arquivo "dados.txt"
    
    xhr.onreadystatechange = function() { // Define a função de callback para acompanhar o status da requisição
        if (xhr.readyState == 4 && xhr.status == 200) { // Verifica se a requisição foi concluída e bem-sucedida
            document.getElementById("proxyResult").textContent = "Arquivo carregado: " + xhr.responseText; // Exibe o conteúdo do arquivo
        }
    };
    
    xhr.send(); // Envia a requisição
}

