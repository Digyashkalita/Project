import express from "express";
import { getGrocery, addGrocery } from "../controller/groceries.js";

const router = express.Router();

router.get("/", getGrocery);
router.post("/", addGrocery);

export default router;
