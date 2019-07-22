// ==========
// LIBRARIES
// ==========
const express = require("express");
const router = express.Router();

const isLoggedIn = require('../utility/utility.js').isLoggedIn;

var Todo = require("../models/todo");
// SHOW ALL TODOS
router.get('/', isLoggedIn, (req, res) => {
  Todo.find({author : req.user._id}, (err, todos) => {
    if (err || !todos) {
      console.log((!todos ? "Not found" : err));
    } else {
      res.render('./todos/todos', {
        todos: todos
      });
    }
  });
});

router.get('/new', isLoggedIn, (req, res) => {
  res.render('./todos/new');
});

router.post('/', isLoggedIn, (req, res) => {
  Todo.create({
    todo: req.body.todo,
    dueDate: req.body.dueDate,
    author: req.user._id
  }, (err, todo) => {
    return (err ? console.log(err) : res.redirect('/todos'));
  })
});

router.delete('/:id', isLoggedIn, (req, res) => {
  var id = req.params.id;
  Todo.findByIdAndDelete(id, (err, removedTodo) => {
    return (err ? console.log(err) : res.redirect('/todos'));
  });
});

module.exports = router;
