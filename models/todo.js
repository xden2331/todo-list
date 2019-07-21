const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    todo: String,
    dueDate: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('todo', todoSchema);