const express = require('express');
const router = express.Router();

// Exemplo de rota de login
router.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // Aqui você colocaria a lógica real de autenticação
  if (email === 'admin@conecta.com' && senha === '123456') {
    return res.status(200).json({ mensagem: 'Login bem-sucedido' });
  } else {
    return res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
});

module.exports = router;
