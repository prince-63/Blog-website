import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {});

mongoose.connection.on("open", () => {
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
})

mongoose.connection.on("error", (error) => {
    console.error('COULD NOT CONNECT TO DATABASE:', error.message);
})
