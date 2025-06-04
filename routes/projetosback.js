const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({ dest: path.join(__dirname, '../uploads') });

let projetos = [];
let id = 1;

// Criar projeto
router.post('/', upload.single('arquivo'), (req, res) => {
  const { titulo, descricao, limite, tutor } = req.body;

  const arquivo = req.file ? req.file.filename : null;

  if (!titulo || !descricao || !limite || !tutor) {
    return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
  }

  const projeto = {
    _id: id++,
    titulo,
    descricao,
    limite: parseInt(limite),
    tutor,
    arquivo,
    inscritos: []
  };

  projetos.push(projeto);
  res.status(201).json({ mensagem: 'Projeto criado com sucesso', projeto });
});

// Buscar todos os projetos
router.get('/', (req, res) => {
  res.json(projetos);
});

// Inscrição em projeto
router.post('/:id/inscrever', (req, res) => {
  const { email } = req.body;
  const projeto = projetos.find(p => p._id == req.params.id);

  if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
  if (projeto.inscritos.length >= projeto.limite) return res.status(400).json({ error: 'Vagas esgotadas' });

  projeto.inscritos.push(email);
  res.json({ mensagem: 'Inscrição realizada com sucesso' });
});

module.exports = router;
