const express = require('express');
const router = express.Router();
const multer = require('multer');
const predictFood = require('../controller/predictFood');

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

router.post('/detect-food', upload.single('image'), predictFood);

module.exports = router;