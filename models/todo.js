const mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    todo: String,
    dueDate: {
        type: Date,
        default: Date.now
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
});

module.exports = mongoose.model('todo', todoSchema);
