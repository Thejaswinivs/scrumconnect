const mongoose = require('mongoose');
var user = require('./model');

const userSchema = mongoose.Schema(user);

const User = module.exports = mongoose.model('user', userSchema);