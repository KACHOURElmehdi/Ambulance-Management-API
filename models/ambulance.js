// models/ambulance.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

/**
 * @swagger
 * components:
 *   schemas:
 *     Ambulance:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the ambulance
 *         name:
 *           type: string
 *           description: The name of the ambulance
 *         status:
 *           type: string
 *           description: The status of the ambulance
 *         location:
 *           type: string
 *           description: The current location of the ambulance
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the ambulance was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the ambulance was last updated
 *     AmbulanceInput:
 *       type: object
 *       required:
 *         - name
 *         - status
 *         - location
 *       properties:
 *         name:
 *           type: string
 *         status:
 *           type: string
 *         location:
 *           type: string
 */

const Ambulance = sequelize.define('Ambulance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'ambulances',
  timestamps: true,
});

module.exports = Ambulance;
