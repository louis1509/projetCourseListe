'use strict';

var mongoose = require('mongoose');

var UserSchema = new mongoose.schema({
	login		: String,
	password 	: String,
	salt 		: String,
	token 		: {token : String, expirationDate : Date},
	groupName 	: String
});

module.exports = mongoose.model('User', UserSchema);