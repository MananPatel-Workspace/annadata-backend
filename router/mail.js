const express = require('express');
const router = express.Router();
const mail = require('../controller/mail');

router.post('/mail',mail);

module.exports = router;
