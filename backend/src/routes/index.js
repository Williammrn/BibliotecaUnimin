
// Importando o controlador
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definindo as rotas

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);  // Rota para listar todos os usuários
router.get('/users/:id', userController.getUserById);
router.post('/users/email', userController.getUserByEmail);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;

