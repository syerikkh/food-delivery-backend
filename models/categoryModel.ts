import { ObjectId } from "mongodb";
import { Schema } from "mongoose";
import mongoose from "mongoose";

export const Category = mongoose.model("Category", new Schema({
    id: ObjectId,
    name: { type: String, required: true },
    foodId: { type: Schema.Types.ObjectId, ref: 'Food' }
}))
