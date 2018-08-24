'use strict';

//Project dependencies
const Provision = require('../models/Provisions'); 

const ProvisionServices = {
	createProvision(req, res, next){
		console.log('Create provision');
		let newProvision = {};
		newProvision.price = req.price;
		newProvision.quantity = req.quantity;
		newProvision.buy = false;
	}

};

module.exports = ProvisionServices;