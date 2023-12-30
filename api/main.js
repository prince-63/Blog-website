import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./databases/databases.js";
import blogRoutes from "./routes/blog.js";
import userRoutes from "./routes/user.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*============================== configuration ===================================*/
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));
const PORT = process.env.PORT || 3000;

/*============================= api end points ==================================*/
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

/*============================= listen ==========================================*/
app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON PORT ${PORT}`);
});
