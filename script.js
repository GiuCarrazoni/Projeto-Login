function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    if (!email) {
        messageElement.textContent = 'Por favor, insira seu e-mail.';
        messageElement.style.display = 'block';
        return;
    }

    if (!validateEmail(email)) {
        messageElement.textContent = 'Por favor, insira um e-mail válido.';
        messageElement.style.display = 'block';
        return;
    }

    if (!password) {
        messageElement.textContent = 'Por favor, insira sua senha.';
        messageElement.style.display = 'block';
        return;
    }

    if (password.length < 6) {
        messageElement.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        messageElement.style.display = 'block';
        return;
    }

    messageElement.textContent = 'Login bem-sucedido!';
    messageElement.className = 'success';
    messageElement.style.display = 'block';
}


