// Função para autenticar o usuário
function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;
  const storedUser = localStorage.getItem(email);
  if (storedUser && JSON.parse(storedUser).senha === senha) {
    // Redirecionar para dashboard.html
    localStorage.setItem('usuarioLogado', email);
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
  const existingUser = localStorage.getItem(email);
  if (existingUser) {
    alert('Este e-mail já está cadastrado!');
    return;
  }
  const newUser = { nome, email, senha };
  localStorage.setItem(email, JSON.stringify(newUser));
  alert('Cadastro realizado com sucesso!');
}

// Função para fazer logout do usuário
function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = 'login.html';
}

// Description: Função assíncrona para criar um projeto
async function criarProjeto(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  const res = await fetch('http://localhost:3000/api/projetos', {
    method: 'POST',
    body: formData
  });

  if (res.ok) {
    form.reset();
    renderizarProjetos();
  } else {
    alert('Erro ao criar projeto.');
  }
}

// Description: Função assíncrona para inscrever um usuário em um projeto
async function inscrever(projetoId) {
  const email = prompt("Digite seu e-mail para se inscrever:");
  if (!email) return;

  const res = await fetch(`http://localhost:3000/api/projetos/${projetoId}/inscrever`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  const data = await res.json();
  if (!res.ok) {
    alert(data.error || 'Erro ao se inscrever.');
  } else {
    renderizarProjetos();
  }
}

// Description: Função assíncrona para renderizar a lista de projetos
async function renderizarProjetos() {
  const res = await fetch('http://localhost:3000/api/projetos');
  const projetos = await res.json();
  const container = document.getElementById('lista-projetos');
  container.innerHTML = '';

  projetos.forEach(proj => {
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm p-3"><h5 class="card-title">${proj.titulo}</h5>
      <p>${proj.descricao}</p>
      <p><strong>Vagas:</strong> ${proj.inscritos.length} / ${proj.limite}</p>
      ${proj.arquivo ? `<a href="http://localhost:3000/uploads/${proj.arquivo}" target="_blank">Download do Arquivo</a><br/>` : ''}
      <button onclick="inscrever('${proj._id}')" ${proj.inscritos.length >= proj.limite ? 'disabled' : ''}>Inscrever-se</button>
    `;
    container.appendChild(div);
  });
}

window.onload = () => {
  if (document.getElementById('lista-projetos')) {
    renderizarProjetos();
  }
};
