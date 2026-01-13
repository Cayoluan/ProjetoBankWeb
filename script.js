// Seleciona o formulário de login
const form = document.querySelector('.login-form');

form.onsubmit = (event) => {
    // Impede a página de recarregar ao clicar no botão
    event.preventDefault(); 
    
    // Pega os valores digitados nos campos
    const usuario = event.target.usuario.value;
    const senha = event.target.senha.value;

    // Lógica de verificação (Simulada)
    if (usuario === "admin" && senha === "1234") {
        window.location.href = "page1.html"; 
    } else {
        alert("Usuário ou senha incorretos. Tente admin / 1234");
    }
};