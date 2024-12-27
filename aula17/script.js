// Função chamada ao clicar no botão para verificar o número
function verificarNumero() {
    // Obtém o valor digitado pelo usuário no campo de input
    var numero = document.getElementById("numero").value;

    // Tenta executar o código dentro do bloco try
    try {
        // Verifica se o número é menor que 10
        if (numero < 10) {
            // Lança um erro personalizado se o número for menor que 10
            throw "Número menor que 10"; 
        }

        // Se o número for maior ou igual a 10, exibe a mensagem com o número
        alert("Número válido: " + numero);

    } catch (e) {
        // Captura o erro e exibe a mensagem de erro no elemento com id "resultado"
        document.getElementById("resultado").innerHTML = "Erro: " + e;
    }
}

