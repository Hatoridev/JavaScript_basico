// Definindo alguns exemplos de objetos e tipos primitivos

// Exemplo de Objeto Boolean
var booleano = new Boolean(true);
console.log("Objeto Boolean: " + booleano);  // Exibe o objeto Boolean

// Exemplo de Objeto Number
var numero = new Number(42);
console.log("Objeto Number: " + numero);  // Exibe o objeto Number

// Exemplo de Objeto String
var texto = new String("Olá, Mundo!");
console.log("Objeto String: " + texto);  // Exibe o objeto String

// Exemplo de Objeto Array
var lista = new Array(1, 2, 3, 4, 5);
console.log("Objeto Array: " + lista);  // Exibe o objeto Array

// Exemplo de Objeto Date
var data = new Date();
console.log("Objeto Date: " + data);  // Exibe a data e hora atual

// Exemplo de Objeto Math
var raizQuadrada = Math.sqrt(16);
console.log("Objeto Math: " + raizQuadrada);  // Exibe a raiz quadrada de 16

// Exemplo de Objeto RegExp (Expressões Regulares)
var regex = new RegExp("\\d+");
console.log("Objeto RegExp: " + regex);  // Exibe a expressão regular

// Exemplo de Objeto Function (Funções como objetos)
var soma = new Function("a", "b", "return a + b;");
console.log("Objeto Function: " + soma(5, 3));  // Exibe a soma de 5 e 3

// Exemplo de Objeto Error
try {
    var erro = new Error("Algo deu errado!");
    throw erro;  // Lança um erro
} catch (e) {
    console.log("Objeto Error: " + e.message);  // Exibe a mensagem do erro
}

// Exemplo de Objeto RangeError
try {
    throw new RangeError("Erro de intervalo");
} catch (e) {
    console.log("Objeto RangeError: " + e.message);  // Exibe a mensagem do erro
}

// Exemplo de Objeto TypeError
try {
    var obj = null;
    obj.toString();  // Vai lançar um TypeError porque 'obj' é null
} catch (e) {
    console.log("Objeto TypeError: " + e.message);  // Exibe a mensagem do TypeError
}

// Exemplo de Objeto URIError
try {
    decodeURIComponent("%");  // Vai lançar um URIError
} catch (e) {
    console.log("Objeto URIError: " + e.message);  // Exibe a mensagem do URIError
}

// Exibindo os objetos no HTML
document.getElementById("objetos").innerHTML = `
    <p><strong>Booleano:</strong> ${booleano}</p>
    <p><strong>Number:</strong> ${numero}</p>
    <p><strong>String:</strong> ${texto}</p>
    <p><strong>Array:</strong> ${lista}</p>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Math (Raiz quadrada de 16):</strong> ${raizQuadrada}</p>
    <p><strong>RegExp:</strong> ${regex}</p>
    <p><strong>Function (Soma 5 + 3):</strong> ${soma(5, 3)}</p>
    <p><strong>Erro:</strong> Algo deu errado!</p>
    <p><strong>RangeError:</strong> Erro de intervalo</p>
    <p><strong>TypeError:</strong> Não pode converter null para string</p>
    <p><strong>URIError:</strong> Erro de decodificação de URI</p>
`;

