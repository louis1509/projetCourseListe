'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const AuthenticationServices = require('../services/authenticationServices');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/*GET all users */
router.get('/all',(req, res, next) =>{
	User.find((err, users) => {
		if (err) return res.status(200).send(err);
		return res.status(200).send(users);
	});
});

/* GET one user */
router.get('/:login', (req, res, next) =>{
	User.findOne({login: req.params.login}, (err, user)=>{
		if(err) return res.status(200).send(err);
		return res.status(200).send(user);
	});
});

/* CREATE (POST) user */
router.post('/create', (req, res, next)=>{
	var salt = AuthenticationServices.generateSalt();
	console.log('my salt ' + salt);
	User.create(req.body, (err, user)=>{
		if(err) return res.status(200).send(err);
		return res.status(200).send(user);
	});
});

/* UPDATE (PUT) users */
router.put('/:id', (req, res, next)=>{
	User.findByIdAndUpdate(req.params.id, req.body, (err, user)=>{
		if (err) return res.status(200).send(err);
		return res.status(200).send(user);
	});
});

/* DELETE (DELETE) user */
router.delete('/:id', (req, res, next)=>{
	User.findByIdAndRemove(req.params.id, (err, user)=>{
		if(err) return res.status(200).send(err);
		return res.status(200).send(user);
	});
});



module.exports = router;
