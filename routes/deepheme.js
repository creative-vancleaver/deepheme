const express = require('express');
const router = express.Router();

// @route   GET /
// @desc    GET HOME PAGE
// @access  Public

router.get('/', (req, res) => {
    res.send('Deep Heme Home Page');
});

module.exports = router;