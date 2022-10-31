const { Router } = require('express');
const userController = require('../app/controllers/user');
const businessController = require('../app/controllers/business');

const router = Router();

const path = require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
});

const upload = multer({ storage: storage });

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
