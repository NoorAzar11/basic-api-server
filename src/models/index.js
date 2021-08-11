'use strict';


const POSTGRES_URI =  process.env.DATABASE_URI || "postgres://localhost:5432/noor";
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {};
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const foodData = require('./food.js');

module.exports = {
  db: sequelize,
  Food: foodData(sequelize, DataTypes),
};