const router = require('express').Router();

const sequelize = require('../config/connection');
const { User, Todo } = require('../models');

// get all todos for homepage
router.get('/', (req, res) => {
  if (!req.session.loggedIn){
    res.redirect("/api/users/login")
    return
  }
  Todo.findAll({
    where: {
      user_id: 1,//req.session.user_id
    },
    attributes: [
      'id',
      'todo_text',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']

      }
    ]
  })
    .then(dbTodoData => {
      const todos = dbTodoData.map(todo => todo.get({ plain: true }));

      // res.send({
      //   message: "HERE IS THE TODOS",
      //   todos: todos
      // })
      res.render('homepage', {
        todos,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single todo
router.get('/todo/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'todo_text',
      'user_id'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbTodoData => {
      if (!dbTodoData) {
        res.status(404).json({ message: 'No todo found with this id' });
        return;
      }

      const todo = dbTodoData.get({ plain: true });

      res.render('single-todo', {
        todo,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;


