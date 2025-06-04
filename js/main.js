// Função chamada quando o formulário de login é enviado
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;
  const user = Usuario.autenticar(email, senha);

  if (user) {
    localStorage.setItem("usuarioLogado", JSON.stringify(user));
    window.location.href = 'dashboard.html';
  } else {
    alert('Credenciais inválidas!');
  }
}

// Função chamada quando o formulário de cadastro é enviado
function handleCadastro(event) {
  event.preventDefault();
  const nome = document.querySelector('#cadastro input[name="nome"]').value;
  const email = document.querySelector('#cadastro input[name="email"]').value;
  const senha = document.querySelector('#cadastro input[name="senha"]').value;

  if (!nome || !email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }

  if (Usuario.jaExiste(email)) {
    alert('Este e-mail já está cadastrado!');
    return;
  }

  const novoUsuario = new Usuario(nome, email, senha);
  novoUsuario.salvar();
  alert('Cadastro realizado com sucesso!');
}

// Função para fazer logout do usuário
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = 'login.html';
}

// Função assíncrona para criar um projeto (usada no envio do formulário de criação)
async function criarProjeto(event) {
  event.preventDefault();
  console.log("Enviando projeto...");

  const form = document.getElementById('form-projeto');
  const formData = new FormData(form);

  const sucesso = await Projeto.criar(formData);

  if (sucesso) {
    alert("Projeto cadastrado com sucesso!");
    form.reset();
  } else {
    alert("Erro ao cadastrar projeto.");
  }
}


// Quando a página carrega completamente...
window.onload = () => {
  if (document.getElementById('lista-projetos')) {
    Projeto.renderizarTodos();
  }
};
