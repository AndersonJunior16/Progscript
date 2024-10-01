function mostrar_resposta() {
    var selectElement = document.getElementById('perguntas');
    var selectedValue = selectElement.value;

    if (selectedValue === "") {
        alert("Por favor, selecione uma pergunta");
        return
    }

    var texto_pergunta = selectElement.options[selectElement.selectedIndex].text;
    var texto_resposta = "";

    if (selectedValue == "1") {
        texto_resposta = "JavaScript é uma linguagem de programação interpretada, de alto nível.";
    } else if (selectedValue == "2") {
        texto_resposta = "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento HTML.";
    } else if (selectedValue == "3") {
        texto_resposta = "Funções em JavaScript são blocos de código reutilizáveis que podem ser chamados em diferentes partes.";
    } else if (selectedValue == "4") {
        texto_resposta = "Eventos em JavaScript são ações que ocorrem no navegador, como cliques e movimentos do mouse.";
    }

    var table = document.getElementById('respostas_tabela');
    var nova_linha = table.insertRow(-1);
    var celula_pergunta = nova_linha.insertCell(0);
    var celula_resposta = nova_linha.insertCell(1);

    celula_pergunta.innerHTML = texto_pergunta
    celula_resposta.innerHTML = texto_resposta  

}

function limpar_resposta() {
    var table = document.getElementById('respostas_tabela');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}
