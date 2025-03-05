const express = require('express');  // Importação do Express (mantida uma vez)
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/index');  // Corrigindo o nome da variável para ser consistente
const { sequelize } = require('../src/models/user');
const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(userRoutes);  // Define a rota '/api' que usa 'userRoutes'

sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));
});
