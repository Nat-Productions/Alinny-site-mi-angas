document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.querySelector('.login-container');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMessageElement = document.getElementById('error-message');

  loginForm.addEventListener('submit', (event) => {
    // Impede o envio padrão do formulário, que recarregaria a página
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Verifica se o login e a senha são 'adm'
    if (username === 'adm' && password === 'adm') {
      // Se correto, redireciona para a página principal
      loginContainer.classList.remove('form-error');
      // O caminho '../index.html' assume que a pasta 'login' está dentro de 'alinny-site'
      window.location.href = '../index.html';
    } else {
      // Se incorreto, exibe a mensagem de erro
      errorMessageElement.textContent = 'Login ou senha errados, tente novamente ou clique em "esqueci minha senha"';
      loginContainer.classList.add('form-error');
    }
  });

  // Função para esconder o erro quando o usuário começar a digitar
  const hideErrorOnInput = () => {
    if (loginContainer.classList.contains('form-error')) {
      loginContainer.classList.remove('form-error');
    }
  };

  usernameInput.addEventListener('input', hideErrorOnInput);
  passwordInput.addEventListener('input', hideErrorOnInput);
});