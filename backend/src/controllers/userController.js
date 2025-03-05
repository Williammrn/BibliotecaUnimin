// controllers/userController.js
const User = require('../models/user');  // Verifique o caminho

exports.createUser = async (req, res) => {
    const { nome, email, senha, telefone } = req.body;

    if (!nome || !email || !senha || !telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const user = await User.create({ nome, email, senha, telefone });  // A criação do usuário deve funcionar aqui
        res.status(201).json({ message: 'Usuário criado com sucesso!', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
};
// controllers/userController.js
exports.createUser = async (req, res) => {
    const { nome, email, senha, telefone } = req.body;

    if (!nome || !email || !senha || !telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    try {
        const user = await User.create({ nome, email, senha, telefone });
        res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();  // Recuperando todos os usuários
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'Nenhum usuário encontrado' });
        }
        res.json(users);  // Retorna os usuários encontrados
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar usuários', error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);  // Procurando o usuário pelo ID
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao recuperar usuário', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const { nome, email, senha, telefone } = req.body;
        user.nome = nome || user.nome;
        user.email = email || user.email;
        user.senha = senha || user.senha;
        user.telefone = telefone || user.telefone;

        await user.save();  // Salvando as alterações
        res.json({ message: 'Usuário atualizado com sucesso!', usuario: user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        await user.destroy();  // Deletando o usuário
        res.json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar usuário', error: error.message });
    }
};

exports.getUserByEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'O campo email é obrigatório' });
    }

    try {
        const user = await User.findOne({
            where: { email },
            attributes: ['id', 'nome', 'senha', 'telefone'] // Retornando os campos desejados
        });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};