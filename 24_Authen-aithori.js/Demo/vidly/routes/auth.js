
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const _ = require('lodash');
const bcrypt = require('bcrypt');

const debug = require('debug')('app:startup');

router.post('/', async (req, res) => {
    debug('request.body.error', req.body.error);
    const {error} = validate(req.body); 
    debug('Error value', validate(req.body));
    debug('Error is: ', error);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Invalid email or password.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password...');

    const token = jwt.sign({
        _id: user._id
    },'jwtprivatekey');
    
    res.send(token);  
});

function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
    
    return Joi.validate(req, schema);
   
}

module.exports = router; 