import { Router } from "express";
import { signUp, getUsers, logIn } from "../controllers/authController";
import { verifyAccessToken } from "../controllers/verifyToken";
import { Response, Request, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
    user?: any
}

const authRouter = Router();

authRouter.get('/users', getUsers)
authRouter.post('/signUp', signUp)
authRouter.post('/logIn', logIn)
authRouter.get('/admin', verifyAccessToken, (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const user = req.user;
    if (user && user.role === 'Admin') {
        next();
    } else {
        res.status(403).json({ error: 'Unauthorized: Access forbidden' });
    }
}, (req: AuthenticatedRequest, res: Response) => {
    res.send('Welcome to admin panel');
})
export { authRouter };