const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'))
router.use('/', require('./public'))

module.exports = router;