'use strict';

const express = require('express');

const router = express.Router();
const {Food} = require('../models/index');

//crud app
router.get('/food', getData);
router.get('/food/:id', bringOne);
router.post('/food', createData);
router.put('/food/:id', updateData);
router.delete('/food/:id', deleteData);


async function getData(req, res) {
    const foodData = await Food.findAll();
    res.status(200).json(foodData);
}

async function bringOne(req, res) {
    const id = parseInt(req.params.id); 
   const foodData = await Food.findOne({ where: {id: id}});
    res.status(200).json(foodData);
}

async function createData(req, res) {
    const newFoodData = req.body;
    const foodData = await Food.create(newFoodData);
    res.status(200).json(foodData);
}

async function updateData(req, res) {
   const id = parseInt(req.params.id);
    const obj = req.body;
    const foundData = await Food.findOne({ where: {id: id}});
    const updated = await foundData.update(obj);
    res.status(200).json(updated);
}

async function deleteData(req,res) {
    const id = parseInt(req.params.id);
    const deletedData= await Food.destroy({where: {id: id}});
    res.status(204).json(deletedData);
}



module.exports = router;