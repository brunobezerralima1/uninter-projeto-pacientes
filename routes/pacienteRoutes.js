const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, pacienteController.getAll);
router.post('/', authMiddleware, pacienteController.create);

module.exports = router;
