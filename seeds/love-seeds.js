const { Love } = require('../models');

const lovedata = [
  {
    user_id: 1,
    post_id: 1
  }
];

const seedLoves = () => Love.bulkCreate(lovedata);

module.exports = seedLoves; 

