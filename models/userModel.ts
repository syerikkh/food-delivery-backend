import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

export const User = mongoose.model("User", new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    id: ObjectId,
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    }
}));