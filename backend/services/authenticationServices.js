'use strict';

//NPM dependencies
var bcrypt = require('bcrypt');
var Promise = require('promise');

//Project dependencies
const User = require('../models/Users'); 
let firstSalt = '';
const AuthenticationServices = {
	test(){
		console.log('test');
	},

	createUser(req,res,next){
		console.log('create user');
		console.log(req.cookies);	
		bcrypt.genSalt(10)
		 .then((salt) =>{
		 	console.log('the salt : ' + salt + ' was generated');
			let newUser = {};
			newUser.login = req.body.login;
			newUser.password = req.body.password;
			newUser.salt = salt;
			newUser.token = {};
			newUser.groupName = req.body.groupName;

		 	User.create(newUser, (err, user)=>{
				if(err) return res.status(200).send(err);
				return res.status(200).send(user);
			});		
		})
		 .catch((err)=>{
		 	console.log('erreur lors de la génération du sel : ' + err);
		 });
		
	},

	retrieveUser(req,res,next){
		let userToken =req.cookies.token;
		if(!userToken){
			req.user = null;
			return next();
		}
		console.log('retrieveUser');
		return next();
	},


	generateToken(){
		console.log('generateToken');
	},

	userBuilder(){
		let user;

		return user;
	}

};


module.exports = AuthenticationServices;