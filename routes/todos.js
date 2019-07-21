// ==========
// LIBRARIES
// ==========
const express = require("express");
const router = express.Router();

var todos = [
    {
        todo: "WALK DOGS",
        dueDate: "2019/07/24"
    },
    {
        todo: "WALK CATS",
        dueDate: "2019/07/25"
    }
    ];

// SHOW ALL TODOS
router.get('/', (req, res) => {
    res.render('./todos/todos', {todos: todos});
});

router.get('/new', (req, res) => {
    res.render('./todos/new');
});

router.post('/', (req, res) => {
    todos.push(req.body.todo);
    res.redirect('/todos');
});

module.exports = router;