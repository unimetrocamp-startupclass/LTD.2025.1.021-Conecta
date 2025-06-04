// Define a classe Projeto, que representa um projeto com título, descrição, etc.
class Projeto {
  // Construtor para criar um novo objeto Projeto
  constructor(titulo, descricao, limite, arquivo = null, inscritos = [], _id = null, tutor = '') {
    this.titulo = titulo;
    this.descricao = descricao;
    this.limite = limite;
    this.arquivo = arquivo;
    this.inscritos = inscritos;
    this._id = _id;
    this.tutor = tutor;
  }

// Método estático para criar um novo projeto via API
 static async criar(formData) {
  try {
    const res = await fetch('http://localhost:3000/api/projetos', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      const erro = await res.text();
      console.error("Erro no backend:", erro);
      return false;
    }

    return true;
  } catch (e) {
    console.error("Erro de rede ou fetch:", e);
    return false;
  }
}

  // Método estático para inscrever um usuário em um projeto via API
  static async inscrever(projetoId, email) {
    const res = await fetch(`http://localhost:3000/api/projetos/${projetoId}/inscrever`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return res;
  }

  // Método estático para buscar todos os projetos via API
  static async buscarTodos() {
    const res = await fetch('http://localhost:3000/api/projetos');
    const lista = await res.json();
    return lista.map(p => new Projeto(p.titulo, p.descricao, p.limite, p.arquivo, p.inscritos, p._id, p.tutor));
  }

  // Método para renderizar o projeto em um container HTML
  renderizar(container) {
    const div = document.createElement('div');
    div.className = 'col-md-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm p-3">
        <h5 class="card-title">${this.titulo}</h5>
        <p>${this.descricao}</p>
        <p><strong>Vagas:</strong> ${this.inscritos.length} / ${this.limite}</p>
        <p><strong>Tutor:</strong> ${this.tutor}</p>
        ${this.arquivo ? `<a href="http://localhost:3000/uploads/${this.arquivo}" target="_blank">Download do Arquivo</a><br/>` : ''}
        <button onclick="Projeto.handleInscricao('${this._id}')" ${this.inscritos.length >= this.limite ? 'disabled' : ''}>
          Inscrever-se
        </button>
      </div>
    `;
    container.appendChild(div);
  }

  // Método estático para buscar um projeto específico pelo ID via API
  static async handleInscricao(projetoId) {
    const email = prompt("Digite seu e-mail para se inscrever:");
    if (!email) return;

    const res = await Projeto.inscrever(projetoId, email);
    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Erro ao se inscrever.');
    } else {
      Projeto.renderizarTodos();
    }
  }

  // Método estático para renderizar todos os projetos na página
  static async renderizarTodos() {
    const projetos = await Projeto.buscarTodos();
    const container = document.getElementById('lista-projetos');
    container.innerHTML = '';
    projetos.forEach(p => p.renderizar(container));
  }
}
