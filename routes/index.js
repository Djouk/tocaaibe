const { Router } = require('express');
const userController = require('../app/controllers/user');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', userController.createUser);

module.exports = router;
