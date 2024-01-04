import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

try {
    mongoose.connect(DATABASE_URL, {});
}
catch (error) {
    console.log("Error" + error);
}
