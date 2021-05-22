const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Todo } = require('../../models');

router.post('/', (req, res) => {
    Todo.create({
        todo_text: req.body.todo_text,
        user_id: req.session.user_id
    })
    .then(dbTodoData => {
        res.status(200).json(dbTodoData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;