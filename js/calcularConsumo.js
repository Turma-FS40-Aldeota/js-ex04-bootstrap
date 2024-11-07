// Arquivo: combustivel.js

// Função Calcular Consumo de Combustível
function calcularConsumo() {
  
    // Obtendo os valores dos inputs
    let nome = document.getElementById('nome').value;
    let tipo = document.getElementById('tipo').value;
    let consumo = parseFloat(document.getElementById('consumo').value);

    if (tipo === "1") {
        valor = consumo * 0.60;
    }
    else if (tipo === "2") {
        valor = consumo * 0.48;

    }
    else if (tipo === "3") {
        valor = consumo * 1.29;
    }

    // Verificando se os valores são números
    if (nome !== "" && tipo !== ""  && consumo !==0) 
    {
        document.getElementById('resultado').textContent = "Valor Consumo Mensal do(a) Cliente " + nome + ": R$ " + valor.toFixed(2);
    }
    else
    {
        document.getElementById('resultado').textContent = '*** Favor Informar Dados do Cliente.';
    }
    

}

// Função Limpar Mensagens
function limpar() {
    document.getElementById('nome').value = "";
    document.getElementById('tipo').value = "---";
    document.getElementById('consumo').value = "";

    document.getElementById('resultado').textContent = "Área de Mensagens";
}