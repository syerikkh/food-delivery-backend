"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.Food = mongoose_1.default.model("Food", new mongoose_2.Schema({
    id: mongodb_1.ObjectId,
    name: { type: String, required: true },
    image: { type: String, required: true },
    ingredient: { type: String, required: true },
    price: { type: Number, required: true }
}));
