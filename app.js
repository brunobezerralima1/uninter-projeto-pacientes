const express = require('express');
const bodyParser = require('body-parser');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/pacientes', pacienteRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
