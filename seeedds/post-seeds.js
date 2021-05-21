const { Post } = require('../models');

const postData = [
  {
    title: 'Hello this is testing',
    content: 'Pellentesque id mollis turpis, This is Testing. Etiam at faucibus tortor. Cras vehicula massa dignissim augue interdum, non aliquam ligula mollis.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts; 
