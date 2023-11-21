import { auth } from 'express-openid-connect';
import dotenv from "dotenv";
dotenv.config();

const authConfig = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SESSION_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
};

export default auth(authConfig);
