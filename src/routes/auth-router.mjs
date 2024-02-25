import express from 'express';
import jwt from 'jsonwebtoken';
import {getMe, postLogin} from '../controllers/auth-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {selectUserByNameAndPassword} from '../models/user-model.mjs';
import 'dotenv/config';


const postLogin = async (req, res) => {
  console.log('postLogin', req.body);
  const user = await login(req.body);
  if (user) {
    const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '24h'});
    res.json({...user, token});
  } else {
    res.sendStatus(401);
  }
};

const authRouter = express.Router();

// user login
authRouter.post('/login', postLogin)
  .get('/me', authenticateToken, getMe, selectUserByNameAndPassword);

export default authRouter;
