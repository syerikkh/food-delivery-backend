"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
exports.Category = mongoose_2.default.model("Category", new mongoose_1.Schema({
    id: mongodb_1.ObjectId,
    name: { type: String, required: true },
    foodId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Food' }
}));
