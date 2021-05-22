const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
  {
    username: 'Shit Head',
    password: 'AustinMeryl1472!%'
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers; 
