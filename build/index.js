"use strict";
// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // const main = async () => {
// //     let hostname = "hostname";
// //     let username = "username";
// //     let password = "password";
// //     let transporter = nodemailer.createTransport({
// //         host: hostname,
// //         port: 587,
// //         secure: false,
// //         requireTLS: true,
// //         auth: {
// //             user: username,
// //             pass: password,
// //         },
// //         logger: true
// //     });
// //     let info = await transporter.sendMail({
// //         from: '"Sender" <from@blabla.com>',
// //         to: "khsyerik@gmail.com",
// //         subject: "Helloo",
// //         text: "Hello world?",
// //         html: "<strong> Hello world<strong>",
// //         headers: { 'x-cloudmta-class': 'standard' }
// //     });
// //     console.log("Message sent: asdasd", info.response);
// // };
// // main().catch(console.error)
// var app = require('express')(),
//     mailer = require('express-mailer');
// let hostname = "hostname";
// let username = "username";
// let password = "password";
// mailer.extend(app, {
//     from: 'from@baba.com'
//     host: hostname,
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: username,
//         pass: password,
//     },
// })
const express_1 = __importDefault(require("express"));
const carRoutes_1 = require("./routes/carRoutes");
const connectToDb_1 = require("./connectToDb");
const authRoutes_1 = require("./routes/authRoutes");
const categoryRoutes_1 = require("./routes/categoryRoutes");
const cors_1 = __importDefault(require("cors"));
const foodRoutes_1 = require("./routes/foodRoutes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true
}));
const PORT = 8000;
(0, connectToDb_1.connectToDb)();
app.use(express_1.default.json());
app.use(carRoutes_1.carRouter);
app.use(authRoutes_1.authRouter);
app.use(foodRoutes_1.foodRouter);
app.use(categoryRoutes_1.categoryRouter);
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log('Application is running at: http://localhost:' + PORT);
});
