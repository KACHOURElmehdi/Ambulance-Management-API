// routes/ambulanceRoutes.js
const express = require('express');
const router = express.Router();
const ambulanceController = require('../controllers/ambulanceController');

router.post('/ambulances', ambulanceController.createAmbulance);
router.get('/ambulances', ambulanceController.getAllAmbulances);
router.get('/ambulances/:id', ambulanceController.getAmbulanceById);
router.put('/ambulances/:id', ambulanceController.updateAmbulance);
router.delete('/ambulances/:id', ambulanceController.deleteAmbulance);

module.exports = router;
