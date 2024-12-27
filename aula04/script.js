// Declarando variáveis com diferentes palavras-chave e tipos de dados

// Usando 'var' (geralmente usado em escopo global ou de função)
var nome = "João"; // Tipo string
var idade = 25; // Tipo number
var isAluno = true; // Tipo boolean
var pessoa = { nome: "Maria", idade: 30 }; // Tipo object (objeto com propriedades)
var nada; // Tipo undefined (variável declarada mas sem valor atribuído)
var valorNulo = null; // Tipo null (ausência intencional de valor)

// Usando 'let' (deve ser usado em blocos, como dentro de funções ou condicionais)
let cidade = "São Paulo"; // Tipo string
let altura = 1.75; // Tipo number

// Usando 'const' (para variáveis cujo valor não pode ser alterado)
const corFavorita = "azul"; // Tipo string (constante)


// Função para exibir os valores das variáveis e seus tipos
function exibirResultados() {
  // Obter o elemento que exibirá os resultados
  const resultados = document.getElementById("resultados");

  // Exibe as variáveis e seus tipos no HTML
  resultados.innerHTML = `
    <h2>Valores das Variáveis:</h2>
    <p><strong>Nome:</strong> ${nome} (Tipo: ${typeof nome})</p>
    <p><strong>Idade:</strong> ${idade} (Tipo: ${typeof idade})</p>
    <p><strong>É aluno?</strong> ${isAluno} (Tipo: ${typeof isAluno})</p>
    <p><strong>Pessoa:</strong> ${JSON.stringify(pessoa)} (Tipo: ${typeof pessoa})</p>
    <p><strong>Variável 'nada':</strong> ${nada} (Tipo: ${typeof nada})</p>
    <p><strong>Valor Nulo:</strong> ${valorNulo} (Tipo: ${typeof valorNulo})</p>
    <p><strong>Cidade:</strong> ${cidade} (Tipo: ${typeof cidade})</p>
    <p><strong>Altura:</strong> ${altura} (Tipo: ${typeof altura})</p>
    <p><strong>Cor Favorita (const):</strong> ${corFavorita} (Tipo: ${typeof corFavorita})</p>
  `;
}

// Chama a função para exibir os resultados assim que a página carregar
window.onload = exibirResultados;

