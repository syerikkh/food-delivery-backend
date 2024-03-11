import { Router } from 'express';
import { createCars, getCars } from '../controllers/carController';

const carRouter = Router();

carRouter.get('/cars', getCars).post('/cars', createCars);

export { carRouter };