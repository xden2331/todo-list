// ==========
// LIBRARIES
// ==========
const express = require("express");
const router = express.Router();

var Todo = require("../models/todo");
// SHOW ALL TODOS
router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err || !todos){
            console.log((!todos ? "Not found" : err));
        } else {
            res.render('./todos/todos', {todos: todos});
        }
    });
});

router.get('/new', (req, res) => {
    res.render('./todos/new');
});

router.post('/', (req, res) => {
    Todo.create(req.body.todo, (err, todo) => {
        return (err ? console.log(err) : res.redirect('/todos'));
    })
});

router.delete('/:id', (req, res) => {
    var id = req.params.id;
    Todo.findByIdAndDelete(id, (err, removedTodo) => {
       return (err ? console.log(err) : res.redirect('/todos')); 
    });
});

module.exports = router;