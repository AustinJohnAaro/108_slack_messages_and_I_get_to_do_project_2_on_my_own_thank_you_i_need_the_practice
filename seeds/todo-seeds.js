const { Todo } = require('../models');

const todoData = [
  {
    todo_text: 'My first Todo',
    user_id: 1
  }
];

const seedTodos = () => Todo.bulkCreate(todoData);

module.exports = seedTodos; 