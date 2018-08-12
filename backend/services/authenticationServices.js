'use strict';

//NPM dependencies
const bcrypt 			= require('bcrypt');
const Promise 			= require('promise');
const TokenGenerator 	= require('uuid-token-generator');

//Project dependencies
const User = require('../models/Users'); 
const config = require('../config/config');
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
		 	bcrypt.hash(req.body.password, salt + config.idPassword)
			 	.then((hash)=>{

				let newUser = {};
				newUser.login = req.body.login;
				newUser.password = hash;
				newUser.salt = salt;
				newUser.token = {};
				newUser.groupName = req.body.groupName;

			 	User.create(newUser, (err, user)=>{
					if(err) return res.status(200).send(err);
					return res.status(200).send(user);
				});		
			})
			 .catch((err)=>{
			 	 console.log('erreur lors du hash du mot de passe : ' + err)
			 });
		 
		})
		 .catch((err)=>{
		 	console.log('erreur lors de la génération du sel : ' + err);
		 });
		
	},

	checkIfUserExists(req, res, next){
		//call database 
		User.findOne({login: req.body.login}, (err, user)=>{
			if(err) {
				console.log('erreur checkIfUserExists : ' +  err);
				return res.status(200).send(err);
			}
			console.log('request : ' +  req.body.login);
			if(user && user.login === req.body.login){ // check if exists
				return res.status(403).send({
					sucess : false,
					reason : 'the user already exits'
				});
			} else{
				return next();
			}
			
		});
		
	},

	comparePassword(req, res, next){
		//call database 
		let login 		= req.body.login;
		let password 	= req.body.password;
	
		console.log('comparePassword');
		// User.findOne({login: login}, (err, user)=>{
		// 	if(err) {
		// 		console.log('erreur checkIfUserExists : ' +  err);
		// 		return res.status(200).send(err);
		// 	}
		// 	if (!user){
		// 		console.log('the user does not exist');
		// 		return res.status(401).send({
		// 			sucess 	: false,
		// 			reason	: 'the user does not exist'
		// 		});
		// 	} else {
		// 		console.log('the user exists');
		// 	// 	bcrypt.compare(password, user.password)
		// 	// 	.then((result) =>{
		// 	// 		console.log('success to authentication');
		// 	// 		return next();
		// 	// 	}).catch((err)=>{
		// 	// 		console.log('erreur durant la connexion : ' + err);
		// 	// 		return res.status(401).send({
		// 	// 			sucess 	: false,
		// 	// 			reason	: 'the user does not exist'
		// 	// 		});
		// 	// 	});
				
		// 	 }
		// });
		if(false){
			return res.status(400).json({success: false, reason: unknowErrorReason});
		} else{
			return next();
		}
		
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
		let tokengen = new TokenGenerator(256, TokenGenerator.BASE62);
		return tokengen.generate();
	},

	userBuilder(){
		let user;

		return user;
	}

};


module.exports = AuthenticationServices;