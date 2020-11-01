const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userService = require('../services/user-service');

router.get('/', userService.list);
router.get('/:id', userService.getById);
router.post('/', userService.create);
router.post('/login', userService.login);
router.put('/:id', auth, userService.update);

module.exports = router;
