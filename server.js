const express = require('express');
const app = express();

// PRELIM ROUTE
app.get('/', (req, res) => res.send('Hello world'));

// DEFINE ROUTES
app.use('/', require('./routes/deepheme'));

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`server started on ${ PORT }`));