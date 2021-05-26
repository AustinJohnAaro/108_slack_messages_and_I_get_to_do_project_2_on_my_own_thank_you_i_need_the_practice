// import all models
const Todo = require('./Todo');
const User = require('./user');


// create associations
User.hasMany(Todo, {
  foreignKey: 'user_id'
});

Todo.belongsTo(User, {
  foreignKey: 'user_id'
})


module.exports = { User, Todo }; 
