'use strict';

const express = require('express')
const router = express.Router();
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

/* CREAT (POST) provision */

router.post('/create', AuthenticationServices.checkIfAuthenticate,(req,res,next)=>{
	let provision = provisionServices.createProvision(req, res, next);
	Provision.create(provision, (err, provision)=>{
		if(err) return res.status(200).send(err)
		res.status(200).send(provision);
	});
});


module.exports = router;