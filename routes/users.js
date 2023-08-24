const express = require('express');
const router = express.Router();

// @route   POST /users
// @desc    Register a user
// @access  Private

router.post('/', (req, res) => {
    res.send('register a user');
});

// ANYTHING FROM THIS FILE WILL GO TO 'API/USERS' (?) AS DEFINED IN SERVER.JS

module.exports = router;
