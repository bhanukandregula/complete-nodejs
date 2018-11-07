const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
// object destructuring.
const { Customer, validate } = require('../models/customer');


// We should get all the Genre from the database.
router.get('/', async (req, res) => {
  const customers = await Genre.find().sort('name');
  res.send(customers);
});

// We are creating a new Genre object,
router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold
  });
  
  await customer.save();
  
  res.send(genre);
});



module.exports = router;