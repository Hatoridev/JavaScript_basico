// 1. Operador delete
let pessoa = { nome: "João", idade: 25 }; // Criando um objeto 'pessoa' com propriedades 'nome' e 'idade'
delete pessoa.idade; // Usando o operador delete para remover a propriedade 'idade' do objeto 'pessoa'
// Exibindo o objeto atualizado (sem a propriedade 'idade') no parágrafo com id 'delete'
document.getElementById('delete').innerText = `Após o delete, o objeto pessoa é: ${JSON.stringify(pessoa)}`;

// 2. Operador in
let carro = { marca: "Fiat", modelo: "Palio", ano: 2012 }; // Criando um objeto 'carro' com várias propriedades
let temMarca = "marca" in carro; // Usando o operador 'in' para verificar se a propriedade 'marca' existe no objeto 'carro'
// Exibindo o resultado no parágrafo com id 'in' (true ou false dependendo da existência da propriedade)
document.getElementById('in').innerText = `A propriedade 'marca' existe no objeto carro? ${temMarca}`;

// 3. Operador instanceof
let data = new Date(); // Criando um objeto 'data' usando o construtor 'Date'
let resultado = data instanceof Date; // Usando o operador 'instanceof' para verificar se o objeto 'data' é uma instância do tipo 'Date'
// Exibindo o resultado no parágrafo com id 'instanceof' (true, pois 'data' é uma instância de 'Date')
document.getElementById('instanceof').innerText = `O objeto 'data' é uma instância de 'Date'? ${resultado}`;

// 4. Operador new
let pessoa2 = new Object(); // Usando o operador 'new' para criar uma nova instância do objeto 'Object'
pessoa2.nome = "Maria"; // Adicionando a propriedade 'nome' ao objeto 'pessoa2'
pessoa2.idade = 30; // Adicionando a propriedade 'idade' ao objeto 'pessoa2'
// Exibindo o objeto criado com o operador 'new' no parágrafo com id 'new'
document.getElementById('new').innerText = `Novo objeto criado com 'new': ${JSON.stringify(pessoa2)}`;

// 5. Operador this
function saudacao() {
    this.nome = "Carlos"; // Usando 'this' para se referir ao objeto atual dentro da função
    // Exibindo o valor da propriedade 'nome' no parágrafo com id 'this'
    document.getElementById('this').innerText = `O nome do usuário é: ${this.nome}`;
}
saudacao(); // Chamando a função para demonstrar o uso de 'this'

// 6. Operador typeof
let numero = 42; // Criando uma variável 'numero' com valor 42
let tipo = typeof numero; // Usando o operador 'typeof' para verificar o tipo de dado da variável 'numero'
// Exibindo o tipo de dado da variável 'numero' no parágrafo com id 'typeof'
document.getElementById('typeof').innerText = `O tipo de dado de 'numero' é: ${tipo}`;

// 7. Operador Ternário
let idade = 18; // Definindo uma variável 'idade' com o valor 18
// Usando o operador ternário para verificar se a idade é maior ou igual a 18 e retornar uma string correspondente
let resultadoTernario = idade >= 18 ? "Maior de idade" : "Menor de idade";
// Exibindo o resultado da verificação no parágrafo com id 'ternario'
document.getElementById('ternario').innerText = `Operador Ternário: ${resultadoTernario}`;

