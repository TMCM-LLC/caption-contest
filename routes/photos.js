const express = require('express');
const router = express.Router();

const photoService = require('../services/photo-service');

router.get('/', photoService.list);
router.get('/:id', photoService.getById);

// TODO: Add Admin authorization to app and lock down these endpoints
router.post('/', photoService.add);
router.put('/:id', photoService.update);
router.delete('/:id', photoService.delete);

module.exports = router;
