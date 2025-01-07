// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { connectDB, sequelize } = require('./config/database');
require('dotenv').config();
const ambulanceRoutes = require('./routes/ambulanceRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import the Swagger config

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.get('/', (req, res) => {
  res.send("Ambulance Management API");
});

app.use('/api', ambulanceRoutes);

// Start the server
const startServer = async () => {
  await connectDB();

  // Sync models with the database
  await sequelize.sync({ force: false });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
};

startServer();
