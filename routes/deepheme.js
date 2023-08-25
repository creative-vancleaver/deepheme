const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// MODELS
const User = require('../models/User');

// MIDDLEWARE
const auth = require('../middleware/auth');

// @route   GET /
// @desc    GET HOME PAGE
// @access  Public

router.get('/', (req, res) => {
    res.send('Deep Heme Home Page');
});

// @route   GET /private
// @desc    GET PRIVATE HOME PAGE
// @access  Private

router.get('/private', auth, (req, res) => {

    res.send('Deep Heme PRIVATE Home Page');
    
});

module.exports = router;