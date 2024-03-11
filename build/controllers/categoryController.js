"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const categoryModel_1 = require("../models/categoryModel");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, foodId } = req.body;
    try {
        const category = yield categoryModel_1.Category.create({ name, foodId });
        res.status(201).json({ message: "Succeessfully created category", category });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to create category" });
    }
});
exports.createCategory = createCategory;
