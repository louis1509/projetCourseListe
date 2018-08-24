'use strict';
//NPM dependencies
const express = require('express');
const router = express.Router();
const moment = require('moment');

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
router.post('/create', AuthenticationServices.checkIfUserExists,(req, res, next)=>{
	AuthenticationServices.createUser(req,res,next);
});

/* LOG (POST) an user */
router.post('/login',AuthenticationServices.comparePassword, (req, res, next)=>{
	console.log('the user exists (twice)');
	let token = AuthenticationServices.generateToken();
	console.log('token : ' + token);
	console.log('login : ' + req.body.login);
	//save token
	User.findOneAndUpdate({login : req.body.login},{token : {token : token, expirationDate : moment().add(2,'h').toISOString()}}, (err, user)=>{
		if(err) console.log ('erreur while saving token : ' + err);
		console.log('user : ' + user);
		console.log('token saved : ' + token + ' expirationDate : ' + moment().add(2,'h').format('DD/MM/YYYY HH : mm'));
	});
	return res.send(token);
	
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
