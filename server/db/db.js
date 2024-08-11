import mongoose from "mongoose";
import "dotenv/config";
const MONGO_URL = process.env.MONGO_URL;

export const mongoConnect = () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log("Database is Connected");
    } catch (error) {
        console.log(error);
    }
}