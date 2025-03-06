
// Importando o controlador
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const categoriaController = require('../controllers/categoriaController')

// Definindo as rotas user
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);  // Rota para listar todos os usuários
router.get('/users/:id', userController.getUserById);
router.post('/users/email', userController.getUserByEmail);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rotas para Categorias
router.post('/categorias', categoriaController.createCategoria);
router.get('/categorias', categoriaController.getAllCategorias);
router.get('/categorias/:id', categoriaController.getCategoriaById);
router.put('/categorias/:id', categoriaController.updateCategoria);
router.delete('/categorias/:id', categoriaController.deleteCategoria);

module.exports = router;

