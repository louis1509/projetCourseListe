'use strict';

var bcrypt = require('bcrypt');
var Promise = require('promise');

const AuthenticationServices = {
	test(){
		console.log('test');
	},

	retrieveUser(req,res,next){
		let userToken =req.cookie.token;
		if(!userToken){
			req.user = null;
			return next();:
		}
	},


	generateSalt(){
		console.log('generateSalt');
		 bcrypt.genSalt(10)
		 .then((salt) =>{
		 	console.log('the salt is : ' + salt);
		 	return salt; 		
		})
		 .catch(()=>{
		 	console.log('erreur lors de la génération du sel');
		 });
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