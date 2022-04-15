import { Router } from "express";
import { signin, signup } from "../controller/user";
const router= Router();

router.post("/signup", signup);
router.get("/signin", signin);
export default router;