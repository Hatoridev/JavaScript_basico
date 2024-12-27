// Função para exibir a data e hora no formato UTC e local
function mostrarData() {
    var dataAtual = new Date(); // Cria um novo objeto Date que contém a data e hora atual
    
    // Exibindo a data e hora no formato UTC
    var resultadoUTC = "Data e Hora no UTC: " + dataAtual.toUTCString(); // Converte a data atual para o formato UTC
    document.getElementById("resultado-utc").innerHTML = resultadoUTC; // Exibe o resultado no parágrafo com o id 'resultado-utc'

    // Exibindo a data e hora no formato local
    var resultadoLocal = "Data e Hora Local: " + dataAtual.toString(); // Converte a data atual para o formato local
    document.getElementById("resultado-local").innerHTML = resultadoLocal; // Exibe o resultado no parágrafo com o id 'resultado-local'
}

