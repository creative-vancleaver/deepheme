const express = require('express');
const connectDB = require('./config/db');

const app = express();
const path = require('path');

connectDB();

// INNIT MIDDLEWARE
//app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
// PRELIM ROUTE
//app.get('/', (req, res) => res.send('Hello world'));

// DEFINE ROUTES
app.use('/', require('./routes/deepheme'));
app.use('/users/', require('./routes/users'));
app.use('/auth/', require('./routes/auth'));

//app.get('/', (req, res) => res.send('Hello world'));

// const PORT = process.env.PORT || 5555;
const PORT = 5555;
app.listen(PORT, '0.0.0.0', () => console.log(`server started on ${ PORT }`));
