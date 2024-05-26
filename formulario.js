function enviarFormulario() {
    const confirmacao = confirm("Tem certeza de que deseja enviar o formulário?");
    if (confirmacao) {
        alert("Formulário enviado com sucesso! Obrigado ^^");
        document.querySelector('form').submit();
    } else {
        alert("Envio cancelado.");
    }
}