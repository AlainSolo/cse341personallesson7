const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');
//const security = require('..middleware/authorize.js');
//const apostleController = require('..controllers/apostles');

const apostleController = require('../controllers/apostle');
//every routes you want to protect , we use requiresAuth() and it will send the user to
// another url (change site web)
//
router.get('/', requiresAuth(), apostleController.getAll);


router.get('/:apostleId', apostleController.getApostle);

//router.post('/', security.checkLogin , apostleController.addApostle/create);


//router.put('/:apostleId', security.checkLogin , apostleController.updateApostle/edit);

//router.delete('/:papostleId', security.checkLogin , apostleController.deleteApostle);

router.post('/', apostleController.create);

router.put('/:apostleId', apostleController.updateApostle);

router.delete('/:apostleId', apostleController.deleteApostle);

module.exports = router;
 