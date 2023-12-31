import express from "express";
import register from "../middleware/auth/register.js";
import login from "../middleware/auth/login.js";
import profile from "../middleware/auth/profile.js";
import logout from "../middleware/auth/logout.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);
route.post("/logout", logout);
route.get("/profile", profile);

export default route;
