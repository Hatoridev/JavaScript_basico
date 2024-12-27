// Função para contar de 1 a 10 usando o loop do...while
function contar() {
    var contador = 1; // Inicializa a variável contador com o valor 1
    var resultado = ''; // Variável que armazenará o resultado a ser exibido

    // Loop do...while que executa pelo menos uma vez e repete enquanto o contador for menor ou igual a 10
    do {
        resultado += "Número " + contador + "<br>"; // Concatena o número atual ao resultado
        contador++; // Incrementa o contador em 1 a cada iteração
    } while (contador <= 10); // A condição é verificada após a execução do bloco

    // Exibe o resultado na div com id "resultado"
    document.getElementById('resultado').innerHTML = resultado; 
}

