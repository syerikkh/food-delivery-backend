import { Router } from "express";
import { createFood, getFoods } from "../controllers/foodController";
import upload from "../middleware/multer";


const foodRouter = Router();

foodRouter.get('/foods', getFoods).post('/foods', upload.single('image'), createFood);

export { foodRouter };