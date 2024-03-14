import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const Food = mongoose.model("Food", new Schema({
    id: ObjectId,
    name: { type: String, required: true },
    image: { type: String, required: true },
    ingredient: { type: String, required: true },
    price: { type: Number, required: true }
}))