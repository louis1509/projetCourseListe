'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	login		: String,
	password 	: String,
	salt 		: String,
	token 		: {token : String, expirationDate : Date},
	groupName 	: String,
	isAdmin		: Boolean
});

module.exports = mongoose.model('User', UserSchema, 'Users');