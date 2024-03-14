import jwt from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.SECRET_KEY as string;

interface AuthenticatedRequest extends Request {
    user?: any
}

export const verifyAccessToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authToken: any = req.cookies.accessToken;
    if (!authToken) {
        return res.status(401).json({ error: "Token not found" })
    }
    // const token = authToken && authToken.split(' ')[1];

    jwt.verify(authToken, secretKey, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" })
        }
        req.user = decoded;
        return next();
    })
};

export const verifyRefreshToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token not found" })
    }
    jwt.verify(refreshToken, secretKey, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ error: "Invalid refresh token" })
        }
        req.user = decoded
        return next();
    })
}