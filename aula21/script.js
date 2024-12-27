// Função para validar o e-mail usando expressão regular
function validarEmail() {
    // Obtendo o valor do campo de input de e-mail
    var email = document.getElementById("email").value;

    // Expressão regular para validar o formato do e-mail (letras, números, @, ponto e domínio)
    var regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verificando se o e-mail corresponde ao formato da expressão regular
    if (regExpEmail.test(email)) {
        // Se o formato for válido, exibe uma mensagem de sucesso
        document.getElementById("resultado-email").innerHTML = "E-mail válido!";
        document.getElementById("resultado-email").style.color = "green"; // Cor verde para sucesso
    } else {
        // Se o formato for inválido, exibe uma mensagem de erro
        document.getElementById("resultado-email").innerHTML = "E-mail inválido. Por favor, insira um e-mail válido.";
        document.getElementById("resultado-email").style.color = "red"; // Cor vermelha para erro
    }
}

// Função para formatar o CPF utilizando expressão regular
function formatarCPF() {
    // Obtendo o valor do campo de input de CPF
    var cpf = document.getElementById("cpf").value;

    // Expressão regular para formatar o CPF (xxx.xxx.xxx-xx)
    var regExpCPF = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

    // Aplicando a formatação do CPF se a entrada corresponder ao padrão
    if (regExpCPF.test(cpf)) {
        // Substituindo a entrada com a formatação adequada
        var cpfFormatado = cpf.replace(regExpCPF, "$1.$2.$3-$4");
        // Exibindo o CPF formatado
        document.getElementById("resultado-cpf").innerHTML = "CPF formatado: " + cpfFormatado;
        document.getElementById("resultado-cpf").style.color = "green"; // Cor verde para sucesso
    } else {
        // Exibindo uma mensagem de erro se o CPF não for válido
        document.getElementById("resultado-cpf").innerHTML = "CPF inválido. Por favor, insira um CPF válido.";
        document.getElementById("resultado-cpf").style.color = "red"; // Cor vermelha para erro
    }
}

