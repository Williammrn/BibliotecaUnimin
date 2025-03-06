const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Categoria = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false  // Para evitar erros com createdAt e updatedAt
});

module.exports = Categoria;
