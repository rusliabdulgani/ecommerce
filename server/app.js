const express = require('express');
const audioStuff = require('./routers/audioStuff');
const customers = require('./routers/customers')
const transactions = require('./routers/transactions')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

var app = express();

mongoose.connect('mongodb://localhost/library');

app.use(cors())
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api', audioStuff)
app.use('/api', customers)
app.use('/api', transactions)

app.listen(3000)
