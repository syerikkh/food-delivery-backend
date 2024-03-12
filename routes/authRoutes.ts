import { Router } from "express";
import { signUp, getUsers, logIn } from "../controllers/authController";
// import { verifyAccessToken } from "../controllers/verifyToken";

const authRouter = Router();

authRouter.get('/users', getUsers).post('/signUp', signUp).post('/logIn', logIn);
export { authRouter };