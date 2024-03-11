"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.foodRouter = void 0;
const express_1 = require("express");
const foodController_1 = require("../controllers/foodController");
const multer_1 = __importDefault(require("../middleware/multer"));
const foodRouter = (0, express_1.Router)();
exports.foodRouter = foodRouter;
foodRouter.get('/foods', foodController_1.getFoods).post('/foods', multer_1.default.single('image'), foodController_1.createFood);
