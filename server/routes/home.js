import express from 'express';
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get('/', (req, res) => {
  if (req.oidc.isAuthenticated()) {
    const user = req.oidc.user;
    res.send(`Welcome, ${user.given_name} ${user.family_name}!`);
  } else {
    res.send('Not authenticated. Please log in.');
  }
});

export default router;