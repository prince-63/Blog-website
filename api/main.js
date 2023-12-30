import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./databases/databases.js";
import blogRoutes from "./routes/blog.js";
import userRoutes from "./routes/user.js";
import cors from "cors";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({credentials:true,origin:'http://localhost:3000'}));

// end-points
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`SERVER LISTEN ON PORT ${PORT}`);
});
