import express from 'express';
import dotenv from 'dotenv';
import createUser from '../controllers/userController.js';
dotenv.config();
const router = express.Router();

router.get('/', (req, res) => {
    if (req.oidc.isAuthenticated()){
        const auth0User = req.oidc.user;
        res.send(`Welcome, ${auth0User.given_name}!`);
    } else {
        res.send("Hello, this is your backend. You are not logged in.");
    }
})

router.get('/login', createUser);


router.get('/logout', (req, res) => {
    res.oidc.logout();
})

export default router;