import { Router } from "express";
import { creat, list, read, remove, update } from "../controller/book";
const router = Router();

router.get("/book", list);
router.get("/book/:id", read);
router.delete("/book/:id", remove);
router.post("/book", creat);
router.put("/book/:id", update);

export default router