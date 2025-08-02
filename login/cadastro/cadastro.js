document.addEventListener('DOMContentLoaded', () => {
  const cadastroForm = document.getElementById('cadastro-form');
  const loginContainer = document.querySelector('.login-container');
  const errorMessageElement = document.getElementById('error-message');

  const nameInput = document.getElementById('name');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');

  if (cadastroForm) {
    cadastroForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      // Validações
      if (!name || !username || !password || !confirmPassword) {
        showError('Por favor, preencha todos os campos.');
        return;
      }

      if (password.length < 6) {
        showError('A senha deve ter pelo menos 6 caracteres.');
        return;
      }

      if (password !== confirmPassword) {
        showError('As senhas não coincidem. Tente novamente.');
        return;
      }

      // Se tudo estiver correto (simulação)
      alert('Conta criada com sucesso! Você será redirecionado para o login.');
      // Corrigido: O caminho correto para subir um nível e encontrar login.html
      window.location.href = '../login.html';
    });
  }

  function showError(message) {
    loginContainer.classList.add('form-error');
    errorMessageElement.textContent = message;
  }
});