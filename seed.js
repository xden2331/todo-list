const mongoose = require("mongoose");

var User = require('./models/user');
var Todo = require("./models/todo");

var userAndTodo = [
  {
    username: "1",
    password: "1",
    todos: ["A", "B", "C"]
  },
  {
    username: "2",
    password: "2",
    todos: ["E", "F", "G"]
  }
];

function seedDB() {
  User.deleteMany({}, err => {
    if(err){
      console.log(err);
    }else{
      console.log('remove users!');
      Todo.deleteMany({}, err => {
        if(err){
          console.log(err);
        }else{
          console.log('remove todos!');
          userAndTodo.forEach(seed => {
            User.register(new User({username:seed.username}), seed.password, (err, user) => {
              if(err){
                console.log(err);
              }else{
                console.log("USER CREATED!");
                seed.todos.forEach(todo => {
                  Todo.create(new Todo({todo: todo, author: user}), (err, todo) => {
                    if(err){
                      console.log(err);
                    }else{
                      console.log("TODO CREATED");
                    }
                  });
                });
              }
            });
          })
        }
      });
    }
  });
}

module.exports = seedDB;
