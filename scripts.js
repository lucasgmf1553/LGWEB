function toggleMenu() {
    var nav = document.querySelector('nav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
}
document.getElementById("orcamento-btn").addEventListener("click", function() {
    // Número de telefone para redirecionar (substitua pelo seu)
    var phoneNumber = "15988110928";
    
    // Mensagem pré-definida (substitua pela sua)
    var message = "Olá! Gostaria de solicitar um orçamento.";

    // Formate o link para redirecionar para o WhatsApp com a mensagem pré-definida
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Redirecione para o link do WhatsApp
    window.location.href = whatsappLink;
});
