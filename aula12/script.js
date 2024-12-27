// Função que verifica a combinação de linguagem de programação e banco de dados
function verificarTecnologia() {
    // Obtém o valor da linguagem de programação selecionada pelo usuário
    var linguagem = document.getElementById("linguagem").value;

    // Obtém o valor do banco de dados selecionado pelo usuário
    var banco = document.getElementById("banco").value;

    // Obtém o elemento HTML onde o resultado será exibido
    var resultadoDiv = document.getElementById("resultado");

    // Inicia a estrutura condicional switch para verificar a linguagem de programação
    switch (linguagem) {
        case "java":
        case "c":
        case "javascript":
        case "python":
            // Se a linguagem for reconhecida, entra no próximo switch para verificar o banco de dados
            switch (banco) {
                case "sqlserver":
                case "postgresql":
                case "oracle":
                case "mysql":
                    // Se o banco de dados for reconhecido, exibe uma mensagem com as duas tecnologias
                    resultadoDiv.textContent = linguagem.charAt(0).toUpperCase() + linguagem.slice(1) +
                    " é uma linguagem de programação que pode ser usada com o banco de dados " + banco.charAt(0).toUpperCase() + banco.slice(1) + "!";
                    resultadoDiv.className = "resultado banco"; // Aplica a classe de cor vermelha para indicar banco de dados
                    break;
                default:
                    // Caso o banco de dados não seja reconhecido, exibe uma mensagem de erro com cor amarela
                    resultadoDiv.textContent = banco.charAt(0).toUpperCase() + banco.slice(1) +
                    " não é um banco de dados conhecido para " + linguagem.charAt(0).toUpperCase() + linguagem.slice(1) + "!";
                    resultadoDiv.className = "resultado desconhecido"; // Aplica a classe de cor amarela para resultado desconhecido
                    break;
            }
            break;
        default:
            // Caso a linguagem de programação não seja reconhecida, exibe uma mensagem de erro com cor amarela
            resultadoDiv.textContent = linguagem.charAt(0).toUpperCase() + linguagem.slice(1) +
            " não é uma linguagem de programação conhecida!";
            resultadoDiv.className = "resultado desconhecido"; // Aplica a classe de cor amarela para resultado desconhecido
            break;
    }
}

