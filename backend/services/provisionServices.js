'use strict';

//Project dependencies
const Provision = require('../models/Provisions');
const moment = require('moment');

const ProvisionServices = {
	createProvision(req, res, next){
		console.log('Create provision');
		let newProvision 		= {};
		newProvision.name 		= req.body.name;
		newProvision.price 		= req.body.price;
		newProvision.quantity 	= req.body.quantity;
		newProvision.group_name = req.user.groupName;
		newProvision.buy 		= false;
		newProvision.updated	= moment();
		console.log('create provision',newProvision);
		return newProvision;
	},

	deleteProvisions(){
		let limitDate = moment().subtract(3,'days');
		Provision.remove({buy : true, updated: {$lte : limitDate}},(err)=>{
			if(err) console.log('error while cleaning database',err);
		});
	}

};

module.exports = ProvisionServices;