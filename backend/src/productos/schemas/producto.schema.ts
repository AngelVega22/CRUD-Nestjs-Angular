import { Schema } from "mongoose";

export const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    marca: String,
    URL: String,
    precio: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})