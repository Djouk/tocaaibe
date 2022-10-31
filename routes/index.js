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

// get Business fields for files
let businessFileFields = [];
for (i = 0; i < businessController.BUSINESS_FILE_FIELDS.length; i++) {
  businessFileFields.push({
    name: businessController.BUSINESS_FILE_FIELDS[i],
    maxCount: 1,
  });
}

router.post('/businesses', upload.fields(businessFileFields), businessController.createBusiness);
router.get('/businesses', businessController.getAllBusinesses);
router.get('/businesses/:id', businessController.getBusinessById);
router.put('/businesses/:id', businessController.updateBusiness);
router.delete('/businesses/:id', businessController.deleteBusiness);

module.exports = router;
