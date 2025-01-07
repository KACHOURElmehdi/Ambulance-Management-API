// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, sequelize } = require('./config/database');
require('dotenv').config();
const ambulanceRoutes = require('./routes/ambulanceRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Swagger Documentation
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.get('/', (req, res) => {
  res.send('API de Gestion d\'Ambulances');
});

app.use('/api', ambulanceRoutes);

// Démarrer le serveur
const startServer = async () => {
  await connectDB();

  // Synchroniser les modèles avec la base de données
  await sequelize.sync({ force: false });

  app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
    console.log(`Documentation Swagger disponible sur http://localhost:${PORT}/api-docs`);
  });
};

startServer();
