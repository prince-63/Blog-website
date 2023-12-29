import { Router } from "express";
import homepage from "../middleware/middleware.homepage.js";
const router = Router();

router.get("/", homepage);

export default router;