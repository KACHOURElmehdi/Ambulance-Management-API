// controllers/ambulanceController.js
const Ambulance = require('../models/ambulance');

// Créer une ambulance
exports.createAmbulance = async (req, res) => {
  try {
    const { name, status, location } = req.body;
    const ambulance = await Ambulance.create({ name, status, location });
    res.status(201).json(ambulance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les ambulances
exports.getAllAmbulances = async (req, res) => {
  try {
    const ambulances = await Ambulance.findAll();
    res.json(ambulances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une ambulance par ID
exports.getAmbulanceById = async (req, res) => {
  try {
    const { id } = req.params;
    const ambulance = await Ambulance.findByPk(id);
    if (ambulance) {
      res.json(ambulance);
    } else {
      res.status(404).json({ error: 'Ambulance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une ambulance
exports.updateAmbulance = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, status, location } = req.body;
    const ambulance = await Ambulance.findByPk(id);
    if (ambulance) {
      ambulance.name = name || ambulance.name;
      ambulance.status = status || ambulance.status;
      ambulance.location = location || ambulance.location;
      await ambulance.save();
      res.json(ambulance);
    } else {
      res.status(404).json({ error: 'Ambulance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer une ambulance
exports.deleteAmbulance = async (req, res) => {
  try {
    const { id } = req.params;
    const ambulance = await Ambulance.findByPk(id);
    if (ambulance) {
      await ambulance.destroy();
      res.json({ message: 'Ambulance supprimée' });
    } else {
      res.status(404).json({ error: 'Ambulance non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
