"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRefreshToken = exports.verifyAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY;
const verifyAccessToken = (req, res, next) => {
    const authToken = req.cookies.accessToken;
    if (!authToken) {
        return res.status(401).json({ error: "Token not found" });
    }
    // const token = authToken && authToken.split(' ')[1];
    jsonwebtoken_1.default.verify(authToken, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid token" });
        }
        req.user = decoded;
        return next();
    });
};
exports.verifyAccessToken = verifyAccessToken;
const verifyRefreshToken = (req, res, next) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token not found" });
    }
    jsonwebtoken_1.default.verify(refreshToken, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid refresh token" });
        }
        req.user = decoded;
        return next();
    });
};
exports.verifyRefreshToken = verifyRefreshToken;
