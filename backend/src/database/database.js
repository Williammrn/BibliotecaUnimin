const { Sequelize } = require('sequelize');
require('dotenv').config(); // Para carregar variáveis de ambiente

// Criação da instância Sequelize
const sequelize = new Sequelize(
    process.env.BIBLIOTECA,    // Nome do banco de dados
    process.env.POSTGRES_USER, // Usuário do banco de dados
    process.env.POSTGRES_PASSWORD, // Senha do banco de dados
    {
        host: process.env.DB_HOST,    // Host do banco de dados (geralmente 'localhost' ou IP)
        dialect: 'postgres',  // Tipo de banco de dados (neste caso, PostgreSQL)
        logging: false,       // Se você não quiser ver os logs SQL
    }
);

// Função para testar a conexão com o banco de dados
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

// Testando a conexão ao iniciar o servidor
testConnection();

// Exporta a instância do Sequelize para ser usada em outros arquivos
module.exports = sequelize;
