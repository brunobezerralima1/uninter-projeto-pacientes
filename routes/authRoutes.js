const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [{ email: 'usuario@email.com', senha: bcrypt.hashSync('senha123', 8) }];

router.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ email }, 'segredo', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
