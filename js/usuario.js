// Description: Classe Usuario para gerenciar usuários com armazenamento local
class Usuario {
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  salvar() {
    localStorage.setItem(this.email, JSON.stringify(this));
  }

// Método estático para autenticar um usuário com email e senha
  static autenticar(email, senha) {
    const dados = localStorage.getItem(email);
    if (!dados) return null;
    const usuario = JSON.parse(dados);
    return usuario.senha === senha ? usuario : null;
  }

  // Método estático para verificar se um usuário já existe com base no email
  static jaExiste(email) {
    return !!localStorage.getItem(email);
  }
}
