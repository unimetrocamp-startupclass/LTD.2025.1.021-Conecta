// Description: Classe Usuario para gerenciar usuários com armazenamento local
// e autenticação simples.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');

const authRoutes = require('./routes/auth');
const projetoRoutes = require('./routes/projetosback');

// Configuração do dotenv para carregar variáveis de ambiente
dotenv.config();
const app = express();
const PORT = 3000;

// Configuração do multer para upload de arquivos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/projetos', projetoRoutes);
app.get('/', (req, res) => {
  res.send('Servidor está funcionando! ✅');
});

// Middleware para lidar com erros
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});