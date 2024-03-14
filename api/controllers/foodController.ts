import express from 'express';
import cloudinary from '../utils/cloudinary';
import { Food } from '../models/foodModel';

export const getFoods = async (req: express.Request, res: express.Response) => {
    const foods = await Food.find();
    res.send(foods)
};

// export const deleteFoods = async (req: express.Request, res: express.Response) => {
//     try {
//         await Food.deleteMany({ name: true });
//         res.status(201).json({ message: "Deleted successfully" })
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: "Failed to delete" })
//     }
// }

export const createFood = async (req: express.Request, res: express.Response) => {
    const { name, ingredient, price } = req.body;
    const foodImage = req.file;
    if (!foodImage) {
        return res.status(400).json({ message: "Please upload file" })
    }
    try {
        const newFoodImage = await cloudinary.uploader.upload(foodImage.path);

        const createdFood = await Food.create({ name, image: newFoodImage.secure_url, ingredient, price });

        res.status(200).json({ message: "Successfully created", createdFood })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to create food' })
    }
}