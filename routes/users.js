const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

// @route   POST /users
// @desc    Register a user
// @access  Public

router.post('/', 

    [
        check('name', 'Please add name')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email')
            .isEmail(),
        check('password', 'Please enter a password with 6 or more characters')
            .isLength({ min: 6 })
    ],
// NOTE: ABOVE JUST SETS ERRORS STILL NEED TO 'CATCH' THEM BELOW

    async (req, res) => {

        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {

            let user = await User.findOne({ email: email });

            if (user) {
                return res.status(400).json({ msg: 'User with this email already exists' });
            }

            user = new User({
                name,
                email,
                password
            });

            // BEFORE SAVE USER MUST ENCRYPT PASSWORD -- RETURNS PROMISE
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            // res.send('User saved');
            const payload = {
                user: {
                    id: user.id
                }
            }
            
            // TO GENERATE A TOKEN MUST SIGN IT
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            }, (err, token) => {
                if(err) throw err;
                res.json({ token });
            });

        } catch (err) {

            console.error(err.message);
            res.status(500).send('Server Error');

        }

        // res.send('register a user');

});

// ANYTHING FROM THIS FILE WILL GO TO 'API/USERS' (?) AS DEFINED IN SERVER.JS

module.exports = router;
