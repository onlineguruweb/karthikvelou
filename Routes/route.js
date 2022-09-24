const express = require('express');

const router = express.Router();
const {Register,Login} = require('../Controller/UserController');

router.get('/register',Register);

router.get('/login',Login);


module.exports = router;