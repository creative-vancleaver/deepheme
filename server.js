const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// PRELIM ROUTE
app.get('/', (req, res) => res.send('Hello world'));

// DEFINE ROUTES
app.use('/', require('./routes/deepheme'));
app.use('/users/', require('./routes/users'));
app.use('/auth/', require('./routes/auth'));

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`server started on ${ PORT }`));