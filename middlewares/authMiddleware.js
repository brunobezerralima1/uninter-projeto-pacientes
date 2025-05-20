const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token não fornecido' });

  try {
    jwt.verify(token, 'segredo');
    next();
  } catch {
    res.status(403).json({ message: 'Token inválido' });
  }
};
