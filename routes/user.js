const express = require('express');
const passport = require('passport');

const userController = require('../controllers/userController')
const router = express.Router();


//Home Page
router.get('/', userController.signIn);

//signUp Page
router.get('/sign-up', userController.signup);