import express from 'express';
const router = express.Router()

//controller functions
import { signupUser, loginUser } from '../controllers/usersController'

//login route
router.post('/login', loginUser)

//signup route
router.post('/signup', signupUser)

module.exports = router