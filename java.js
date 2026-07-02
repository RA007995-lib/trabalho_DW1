document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");
    if (nome.trim() !== "") {
        mensagem.textContent = "Obrigado pelo contato, " + nome + "!";
    } else {
        mensagem.textContent = "Por favor, insira seu nome.";
    }
});
