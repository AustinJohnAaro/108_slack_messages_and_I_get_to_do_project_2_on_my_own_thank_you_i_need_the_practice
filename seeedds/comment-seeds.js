const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'please response this is testing',
    user_id: 1,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 
