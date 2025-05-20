const fs = require('fs');
const path = './models/pacientes.json';

exports.getAll = (req, res) => {
  const data = JSON.parse(fs.readFileSync(path));
  res.json(data);
};

exports.create = (req, res) => {
  const data = JSON.parse(fs.readFileSync(path));
  const novoPaciente = { id: data.length + 1, ...req.body };
  data.push(novoPaciente);
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
  res.status(201).json(novoPaciente);
};
