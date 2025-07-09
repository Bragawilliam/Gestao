// Admin padrão
const admin = {
    username: "admin",
    password: "1234"
};

// Inicializa localStorage com admin, se ainda não existir
if (!localStorage.getItem("usuarios")) {
    localStorage.setItem("usuarios", JSON.stringify([admin]));
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        const user = usuarios.find(u => u.username === username && u.password === password);

        if (user) {
            alert(`Bem-vindo(a), ${user.username}!`);
            localStorage.setItem("usuarioLogado", JSON.stringify(user));
            window.location.href = "index.html"; // Redireciona para outra página
        } else {
            alert("Usuário ou senha inválidos.");
        }
    });
});

// Função para cadastrar novos usuários (pode ser usada em outro script ou formulário)
function cadastrarUsuario(novoUsuario, novaSenha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(u => u.username === novoUsuario)) {
        alert("Este nome de usuário já está em uso.");
        return;
    }

    usuarios.push({ username: novoUsuario, password: novaSenha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Usuário cadastrado com sucesso!");
}
