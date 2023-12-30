import express from "express";
import register from "../middleware/auth/register.js";
import login from "../middleware/auth/login.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);

export default route;