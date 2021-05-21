// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Love = require('./Love');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

User.hasMany(Love, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: Love,
  as: 'loved_posts',
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

Post.hasMany(Love, {
  foreignKey: 'post_id'
});


Post.belongsToMany(User, {
  through: Love,
  as: 'loved_posts',
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Love.belongsTo(User, {
  foreignKey: 'user_id',
});

Love.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Love }; 
