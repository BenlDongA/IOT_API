
const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');

router.get('/', locationController.getLocation);

router.post('/create', locationController.createLocation);
router.delete('/deleteAll', locationController.deleteAllLocations);

module.exports = router;