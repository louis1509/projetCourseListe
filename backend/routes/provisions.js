'use strict';

//NPM dependencies
const express = require('express')
const router = express.Router();
const moment = require('moment');

const Provision = require('../models/Provisions')
const AuthenticationServices = require('../services/authenticationServices');
const provisionServices = require('../services/provisionServices');


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource provisions');
});

/** GET all provisions **/
router.get('/all', AuthenticationServices.checkIfAuthenticate, (req, res, next)=>{
	Provision.find((err, provisions) =>{
		if(err) return res.status(200).send(err);
		return res.status(200).send(provisions);
	});
});

/** GET all provisions  by groupName**/
router.get('/allByGroupName', AuthenticationServices.checkIfAuthenticate, (req, res, next)=>{
	 Provision.find({group_name : req.user.groupName}, (err, provisions) =>{
		if(err) return res.status(200).send(err);
		return res.status(200).send(provisions);
	 });
});
/* CREAT (POST) provision */

router.post('/create', AuthenticationServices.checkIfAuthenticate,(req,res,next)=>{
	console.log('saving provision');
	let provision = provisionServices.createProvision(req, res, next);
	console.log('provision', provision);
	Provision.create(provision, (err, provision)=>{
		if(err) return res.status(200).send(err)
		res.status(200).send(provision);
	});
});

/** UPDATE (PUT) provision */
router.put('/update', AuthenticationServices.checkIfAuthenticate, (req, res, next)=>{
	console.log('updtating provision');
	Provision.findById(req.body.id,(err, provision)=>{
		if (err) return res.status(200).send(err);
		else{
			console.log('id',req.body.id);
			if(provision.group_name === req.user.groupName){
				Provision.findByIdAndUpdate(req.body.id,{buy : req.body.buy, updated : moment()}, (err, provision)=>{
					if (err) return res.status(200).send(err)
					res.status(200).send(provision);
				});
			}
		}
	});
	
});


module.exports = router;