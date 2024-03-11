import { Schema } from "mongoose";
import mongoose from "mongoose";

export const CarModel = mongoose.model("Car", new Schema({ name: String, price: Number, year: Number, color: String }));

