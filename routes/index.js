const { Router } = require('express');
const userController = require('../app/controllers/user');
const businessController = require('../app/controllers/business');

const router = Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => res.send('Welcome'));

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.post('/businesses', upload.single('profilePic'), businessController.createBusiness);
router.get('/businesses', businessController.getAllBusinesses);
router.get('/businesses/:id', businessController.getBusinessById);
router.put('/businesses/:id', businessController.updateBusiness);
router.delete('/businesses/:id', businessController.deleteBusiness);

module.exports = router;
