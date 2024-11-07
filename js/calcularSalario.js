// Arquivo: calcularSalario.js

// Função Calcular Salário do Vendedor
function calcularSalario() {
  
    // Obtendo os valores dos inputs
    let nome = document.getElementById('nome').value;
    let fixo = parseFloat(document.getElementById('fixo').value);
    let vendas = parseFloat(document.getElementById('vendas').value);

    // Verificando se os valores são números
    if (nome !== "" && fixo !== ""  && vendas !==0) 
    {
        salario = fixo + vendas * 0.15;
        document.getElementById('resultado').textContent = "Valor Salário Mensal do(a) Vendedor " + nome + ": R$ " + salario.toFixed(2);
    }
    else
    {
        document.getElementById('resultado').textContent = '*** Favor Informar Dados do Cliente.';
    }
}

// Função Limpar Mensagens
function limpar() {
    document.getElementById('nome').value = "";
    document.getElementById('fixo').value = "";
    document.getElementById('vendas').value = "";

    document.getElementById('resultado').textContent = "Área de Mensagens";
}