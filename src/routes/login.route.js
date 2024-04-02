
'use strict';

/*node modules */
const router = require('express').Router();

const { login } = require('./controller/login.controller');

router.get('/', login);

module.exports = router;