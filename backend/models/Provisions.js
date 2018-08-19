'use strict';

var mongoose = require('mongoose');

var ProvisionSchema = new mongoose.Schema({
	id 			: Number,
	group_name 	: String,
	price 		: Number,
	quantity 	: Number,
	buy			: Boolean
});

module.exports = mongoose.model('Provision', ProvisionSchema, 'Provisions');