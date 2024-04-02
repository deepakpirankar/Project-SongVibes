'use strict';

const cors = require('cors');
const cookieParser = require('cookie-parser');

/*custom module */
const login = require('./src/routes/login.route');

const express = require('express');
const app = express();

/*embedded js templates*/
app.set('view engine', 'ejs');

/*setting static directory*/
app.use(express.static('${__dirname}/public'));

/*enable cors & cookie-parser*/
app.use(cors()).use(cookieParser());


/*Login page*/
app.use('/login', login);

app.listen(5555, () => {
    console.log('server listening at http://localhost:5555')
});