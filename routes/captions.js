const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const captionService = require('../services/caption-service');

router.get('/:id', captionService.getById);
router.post('/', auth, captionService.add);
router.put('/:id', auth, captionService.update);
router.delete('/:id', auth, captionService.delete);

module.exports = router;
