import express from "express";
import register from "../middleware/register.js";
import login from "../middleware/login.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);

export default route;