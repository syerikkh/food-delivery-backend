import { Router } from "express";
import { createCategory } from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.post('/category', createCategory);

export { categoryRouter }