'use strict';

var mongoose = require('mongoose');

var ProvisionSchema = new mongoose.Schema({
	name 		: String,
	group_name 	: String,
	price 		: String,
	quantity 	: Number,
	buy			: Boolean,
	updated		: Date
});

module.exports = mongoose.model('Provision', ProvisionSchema, 'Provisions');