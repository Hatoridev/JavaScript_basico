// Função que será chamada quando o botão for clicado
function ligar() {
    // 1. Solicita o nome do usuário através de um prompt
    var nome = window.prompt("Digite seu nome:");

    // 2. Verifica se o nome foi inserido
    if (nome !== null && nome.trim() !== "") {
        // Exibe o nome do usuário na página
        document.getElementById("nome-usuario").textContent = nome;

        // 3. Altera a imagem da lâmpada para a versão "ligada"
        document.getElementById("lampada").src = "https://images.app.goo.gl/zCwz36CLvioknpP87";
    } else {
        // Caso o nome não tenha sido inserido, mostra um alerta
        alert("Nome não inserido. A lâmpada permanecerá apagada.");
    }
}

