// Função para mostrar as propriedades de um objeto usando o loop for...in
function mostrarPropriedades() {
    // Definindo um objeto com algumas propriedades
    var pessoa = {
        nome: "João",       // Propriedade nome
        idade: 25,          // Propriedade idade
        profissão: "Desenvolvedor", // Propriedade profissão
        cidade: "São Paulo" // Propriedade cidade
    };

    var resultado = ''; // Variável para armazenar o resultado das propriedades
    // Usando o loop for...in para percorrer as propriedades do objeto pessoa
    for (var propriedade in pessoa) {  // A variável "propriedade" vai receber cada chave do objeto "pessoa"
        resultado += propriedade + ": " + pessoa[propriedade] + "<br>";  // Concatenando o nome da propriedade e o seu valor ao resultado
    }

    // Exibindo o resultado no HTML
    document.getElementById('resultado').innerHTML = resultado;  // Colocando o resultado dentro da div com id "resultado"
}

