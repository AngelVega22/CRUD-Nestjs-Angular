import { Document } from "mongoose";

export interface Producto extends Document {
    readonly nombre: string;
    readonly marca: string;
    readonly URL: string;
    readonly precio: number;
    readonly createdAt: Date;
}