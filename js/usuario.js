class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  salvar() {
    localStorage.setItem(this.email, JSON.stringify(this));
  }

  static autenticar(email, senha) {
    const dados = localStorage.getItem(email);
    if (!dados) return null;
    const usuario = JSON.parse(dados);
    return usuario.senha === senha ? usuario : null;
  }

  static jaExiste(email) {
    return !!localStorage.getItem(email);
  }
}
