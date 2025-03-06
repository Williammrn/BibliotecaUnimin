const Categoria = require('../models/categoria');

exports.createCategoria = async (req, res) => {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res.status(400).json({ message: "O campo nome é obrigatório" });
        }
        const novaCategoria = await Categoria.create({ nome });
        res.status(201).json(novaCategoria);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar categoria", error: error.message });
    }
};

exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar categorias", error: error.message });
    }
};

exports.getCategoriaById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar categoria", error: error.message });
    }
};

exports.updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        categoria.nome = nome;
        await categoria.save();
        res.json({ message: "Categoria atualizada com sucesso", categoria });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar categoria", error: error.message });
    }
};

exports.deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria não encontrada" });
        }
        await categoria.destroy();
        res.json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar categoria", error: error.message });
    }
};
