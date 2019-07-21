const mongoose = require("mongoose");

var Todo = require("./models/todo");

function seedDB() {
    for(var i=0; i<3; ++i){
        Todo.create({
            todo: 'todo '+i,
            dueDate: Date.now()
        }, (err, todo) => {
           console.log(err ? err:`Create todo with content ${todo}`); 
        });
    }
}

module.exports = seedDB;