// routes/ambulanceRoutes.js
const express = require('express');
const router = express.Router();
const ambulanceController = require('../controllers/ambulanceController');

/**
 * @swagger
 * tags:
 *   name: Ambulances
 *   description: API for managing ambulances
 */

/**
 * @swagger
 * /ambulances:
 *   post:
 *     summary: Create a new ambulance
 *     tags: [Ambulances]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AmbulanceInput'
 *     responses:
 *       201:
 *         description: Ambulance created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ambulance'
 *       500:
 *         description: Server error
 */
router.post('/ambulances', ambulanceController.createAmbulance);

/**
 * @swagger
 * /ambulances:
 *   get:
 *     summary: Retrieve a list of ambulances
 *     tags: [Ambulances]
 *     responses:
 *       200:
 *         description: A list of ambulances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ambulance'
 *       500:
 *         description: Server error
 */
router.get('/ambulances', ambulanceController.getAllAmbulances);

/**
 * @swagger
 * /ambulances/{id}:
 *   get:
 *     summary: Get an ambulance by ID
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ambulance ID
 *     responses:
 *       200:
 *         description: Ambulance data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ambulance'
 *       404:
 *         description: Ambulance not found
 *       500:
 *         description: Server error
 */
router.get('/ambulances/:id', ambulanceController.getAmbulanceById);

/**
 * @swagger
 * /ambulances/{id}:
 *   put:
 *     summary: Update an ambulance
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ambulance ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AmbulanceInput'
 *     responses:
 *       200:
 *         description: Ambulance updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ambulance'
 *       404:
 *         description: Ambulance not found
 *       500:
 *         description: Server error
 */
router.put('/ambulances/:id', ambulanceController.updateAmbulance);

/**
 * @swagger
 * /ambulances/{id}:
 *   delete:
 *     summary: Delete an ambulance
 *     tags: [Ambulances]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ambulance ID
 *     responses:
 *       200:
 *         description: Ambulance deleted successfully
 *       404:
 *         description: Ambulance not found
 *       500:
 *         description: Server error
 */
router.delete('/ambulances/:id', ambulanceController.deleteAmbulance);

module.exports = router;
