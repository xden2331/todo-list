const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('user', userSchema);
