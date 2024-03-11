import { CarModel } from "../models/carModel"
import express from 'express';

export const getCars = async (req: express.Request, res: express.Response) => {
    const cars = await CarModel.find();
    res.send(cars);
};

export const createCars = async (req: express.Request, res: express.Response) => {
    const car = await CarModel.create({ name: "Toyota", price: 10000, year: 2020, color: "black" });
    res.send(car)
}