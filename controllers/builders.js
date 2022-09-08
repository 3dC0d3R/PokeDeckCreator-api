const Builders = require('../models/builders.js');
const express = require('express');
const router = express.Router();

//INDUCES

// Index
router.get('/', (req, res)=>{
    Builders.find({}, (err, foundBuilders)=>{
        res.json(foundBuilders);
    });
});

// New - Will be handled by React Application 

// Delete
router.delete('/:id', (req, res)=>{
    Builders.findByIdAndRemove(req.params.id, (err, deletedBuilder)=>{
        res.json(deletedBuilder);
    });
});

// Update
router.put('/:id', (req, res)=>{
    Builders.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedBuilder)=>{
        res.json(updatedBuilder);
    });
});

// Create
router.post('/', (req, res)=>{
    Builders.create(req.body, (err, createdBuilder)=>{
        res.json(createdBuilder); //.json() will send proper headers in response so client knows it's json coming back
    });
});

// Edit -Will be handled by React Application 
// Show 



module.exports = router;