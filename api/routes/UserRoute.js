import express from "express";
import Login from "../middleware/auth/login.js";
import Register from "../middleware/auth/register.js";
import Logout from "../middleware/auth/Logout.js";
import Profile from "../middleware/auth/Profile.js";
import ProfileWithId from "../middleware/auth/ProfileWithId.js"

const route = express.Router();

route.post("/register", Register);
route.post("/login", Login);
route.post("/logout", Logout);
route.get("/profile/:id", ProfileWithId);
route.get("/profile", Profile);

export default route;
