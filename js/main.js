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

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = 'login.html';
}

async function criarProjeto(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const sucesso = await Projeto.criar(formData);
  if (sucesso) {
    form.reset();
    Projeto.renderizarTodos();
  } else {
    alert('Erro ao criar projeto.');
  }
}

window.onload = () => {
  if (document.getElementById('lista-projetos')) {
    Projeto.renderizarTodos();
  }
};
