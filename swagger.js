// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ambulance Management API',
      version: '1.0.0',
      description: 'API for managing ambulances',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}/api`,
      },
    ],
  },
  // Path to the API docs
  apis: ['./routes/*.js', './models/*.js'], // files containing annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
